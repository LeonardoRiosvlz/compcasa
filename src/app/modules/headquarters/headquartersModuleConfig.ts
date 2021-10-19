import React from 'react';
import './i18n';

const HeadquartersModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/headquarters',
			component: React.lazy(() => import('./pages/HeadquartersTablePage'))
		},


	]
};

export default HeadquartersModuleConfig;
