import React from 'react';
import './i18n';

const MedicalSpecialtiesModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/medical-specialties',
			component: React.lazy(() => import('./pages/MedicalSpecialtiesTablePage'))
		},


	]
};

export default MedicalSpecialtiesModuleConfig;
