import React from 'react';
import './i18n';

const PatientModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/patient',
			component: React.lazy(() => import('./pages/PatientTablePage'))
		}

	]
};

export default PatientModuleConfig;
