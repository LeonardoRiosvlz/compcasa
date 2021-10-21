import React from 'react';
import './i18n';

const UserPositionModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/user-position',
			component: React.lazy(() => import('./pages/UserPositionTablePage'))
		},


	]
};

export default UserPositionModuleConfig;
