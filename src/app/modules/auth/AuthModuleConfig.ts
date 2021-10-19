import React from 'react';
import './i18n';

const AuthModuleConfig: any = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	routes: [
		{
			path: '/auth/login',
			component: React.lazy(() => import('./pages/LoginPage'))
		},
		{
			path: '/auth/forgot-password',
			component: React.lazy(() => import('./pages/ForgotPage'))
		},

		{
			path: '/auth/reset-password',
			component: React.lazy(() => import('./pages/ResetPasswordPage'))
		}
	]
};

export default AuthModuleConfig;
