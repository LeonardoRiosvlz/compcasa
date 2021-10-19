import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunkActionAsync } from 'app/store';
import history from '@history';
import { LaunchGqlClient } from 'app/modules/common/services/LaunchGqlClient';
import { AuthRoleResponse, AuthUserResponse, RoleResponse } from 'api/graphql/schema/types';

export type AuthUserState = {
    roles: Array<AuthRoleResponse> | null;
    data: AuthUserResponse & {
        displayName: string;
        shortcuts: Array<string>
    } | null
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
            state.roles= roles;
            // @ts-ignore
            state.data = {...data}
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
        LaunchGqlClient.rebuildLink();
        history.push('/auth/login')
    };

export const {setUser,unSetUser, updateUserShortcuts} = userSlice.actions

export default userSlice.reducer