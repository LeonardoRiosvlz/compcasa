import React from 'react';
import './i18n';
import '../auth/i18n';

const UsersModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/user/areas',
			component: React.lazy(() => import('./pages/UserAreaTablePage'))
		},

		{
			path: '/user/roles',
			component: React.lazy(() => import('./pages/RoleTablePage'))
		},

		{
			path: '/user/positions',
			component: React.lazy(() => import('./pages/UserPositionTablePage'))
		},
		{
			path: '/user/profile',
			component: React.lazy(() => import('./pages/UserProfilePage'))
		},

		{
			path: '/user',
			component: React.lazy(() => import('./pages/UsersTablePage'))
		},

	]
};

export default UsersModuleConfig;
