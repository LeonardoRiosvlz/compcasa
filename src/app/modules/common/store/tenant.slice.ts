import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunkActionAsync } from 'app/store';
import { LaunchGqlClient } from 'app/modules/common/services/LaunchGqlClient';


export type TenantInfoState = {
	id: string | null;
	name: string | null;
	code: string | null;
	description: string | null;
}

export type TenantState = {
	info: TenantInfoState;
}

const initialState: TenantState = {
	info: {
		id: null,
		name: null,
		code: null,
		description: null
	}
};

export const tenantSlice = createSlice({
	name: 'tenant',
	initialState,
	reducers: {
		setTenant: (state, action: PayloadAction<TenantInfoState>) => {
			state.info = { ...action.payload };
		},

		unSetTenant: (state) => {
			state.info = initialState.info;
		}
	}
});

const {
	setTenant,
	unSetTenant
} = tenantSlice.actions;


export const setTenantInfo = (tenantInfo: TenantInfoState): AppThunkActionAsync<any> =>
	async (dispatch, getState) => {
		dispatch(setTenant(tenantInfo));
		if (tenantInfo && tenantInfo.code) {
			localStorage.setItem('tenant', tenantInfo.code);
		}
		LaunchGqlClient.rebuildLink();
	};

export const unSetTenantInfo = (): AppThunkActionAsync<any> =>
	async (dispatch, getState) => {
		dispatch(unSetTenant());
		localStorage.removeItem('tenant');
		LaunchGqlClient.rebuildLink();

	};

export default tenantSlice.reducer;