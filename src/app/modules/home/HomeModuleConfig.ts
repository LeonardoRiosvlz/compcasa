import React from 'react';
import './i18n'

const HomeModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [


		{
			path: '/',
			component: React.lazy(() => import('./pages/HomePage'))
		},

	]
};

export default HomeModuleConfig;
