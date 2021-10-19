import FuseUtils from '@fuse/utils';
import modulesConfigs from 'app/modules/modulesConfigs';

import React from 'react';
import { Redirect } from 'react-router-dom';

const routeConfigs = [
	...modulesConfigs
];

const routes = [
	// if you want to make whole app auth protected by default change defaultAuth for example:
	// ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
	// The individual route configs which has auth option won't be overridden.
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
	/*{
		path: '/',
		exact: true,
		component: () => <Redirect to="/apps/dashboards/analytics" />
	},*/
	{
		component: () => <Redirect to="/pages/errors/error-404" />
	}
];

export default routes;
