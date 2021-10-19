import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunkActionAsync } from 'app/store';
import history from '@history';
import { AuthUser, AuthRole} from 'api/repositories/user/types/auth.types';

export type AuthUserState =  {
    roles: Array<AuthRole> | null
    data: AuthUser | null
}

const initialState: AuthUserState = {
    roles: null,
    data: null
};


export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, { payload }: PayloadAction<AuthUserState>) => {
            const {roles, data} =  payload
            state.roles = roles;
            state.data = data
        },

        updateUserShortcuts: (state, action: PayloadAction<Array<string>>) => {
            // @ts-ignore
            state.data = { ...state.data, shortcuts:action.payload}
        },
        unSetUser: (state) => {
            state.data = null;
            state.roles = null;
        },


    },
})


export const logOut = (): AppThunkActionAsync<any> =>
    async (dispatch, getState) => {
        localStorage.removeItem('access_token');
        dispatch(unSetUser());
        history.push('/auth/login')
    };

export const {setUser,unSetUser, updateUserShortcuts} = userSlice.actions

export default userSlice.reducer