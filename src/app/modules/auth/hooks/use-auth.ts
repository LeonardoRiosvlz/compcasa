import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/modules/common/hooks/use-app-redux';
import { useHistory } from 'react-router';
import { setUser, logOut } from 'app/auth/store/user.slice';
import { toast } from 'react-toastify';
import { appLocalStorage } from 'app/modules/common/services/AppLocalStorageService';
import { LaunchGqlClient } from 'app/modules/common/services/LaunchGqlClient';
import { AuthUserState } from 'app/modules/auth/store/user.slice';
import {AuthResult, AuthUser} from 'api/repositories/user/types/auth.types';
import useRepository from "../../common/hooks/use-repository";
import {UserRepository} from "api/repositories/user/user.repository";
import {AuthRepository} from "api/repositories/user/auth.repository";


type CallbackFunc = (error: boolean, ...args: any[]) => void;

type UseAuthHook = {
	state: UseAuthHookState;
	login: (unique: string, password: string) => void;
	logout: () => void;
	myInfo: (cbFn?: CallbackFunc) => void;
	user: AuthUser | null
}

type UseAuthHookState = {
	loading: {
		login: boolean
		myInfo: boolean
	};
}


const useAuth = (): UseAuthHook => {
	const dispatch = useAppDispatch();
	const history = useHistory();

	const userRepo = useRepository(UserRepository)
	const authRepo = useRepository(AuthRepository)



	const authUserState = useAppSelector(({ auth }) => auth.user) as AuthUserState;

	const user = authUserState.data;

	const [state, setState] = React.useState<UseAuthHookState>({ loading: { login: false, myInfo: false } });

	const logout = (): void => {
		// @ts-ignore
		dispatch(logOut());
	};

	const login = (identifier: string, password: string): void => {
		setState({ ...state, loading: { ...state.loading, login: true } });
		authRepo.login(identifier, password ).then((result: AuthResult) => {

			setState({ ...state, loading: { ...state.loading, login: false } });
			// @ts-ignore
			dispatch(setUser({
				roles: result.user.roles,
				data: {
					shortcuts: [],
					displayName: `${result.user.firstname} ${result.user?.lastname ?? ''}`,
					...result.user
				}
			}));
			appLocalStorage.setToken(result.access_token);
			LaunchGqlClient.rebuildLink();
			history.push('/');

		}).catch((err) => {
			toast.error(err.toString());
			setState({ ...state, loading: { ...state.loading, login: false } });
		});
	};


	const myInfo = (cbFn?: CallbackFunc): void => {
		setState({ ...state, loading: { ...state.loading, myInfo: true } });
		authRepo.myInfo().then((result: AuthUser) => {
			setState({ ...state, loading: { ...state.loading, myInfo: false } });
			// @ts-ignore
			dispatch(setUser({
				roles: result.roles,
				data: {
					shortcuts: [],
					displayName: `${result.firstname} ${result?.lastname ?? ''}`,
					...result
				}
			}));
			if (cbFn) {
				cbFn(false);
			}

		}).catch((err) => {
			if (cbFn) {
				cbFn(true);
			}
			history.push('/auth/login');

		});
	};

	return {
		state,
		login,
		logout,
		myInfo,
		user
	};
};

export default useAuth;