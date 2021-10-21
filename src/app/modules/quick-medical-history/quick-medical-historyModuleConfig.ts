import React from 'react';
import './i18n';

const QuickMedicalHistoryModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/quick-medical-history',
			component: React.lazy(() => import('./pages/QuickMedicalHistoryTablePage'))
		},


	]
};

export default QuickMedicalHistoryModuleConfig;
