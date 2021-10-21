import React from 'react';
import './i18n';

const UserAreaModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/user-area',
			component: React.lazy(() => import('./pages/UserAreaTablePage'))
		},


	]
};

export default UserAreaModuleConfig;
