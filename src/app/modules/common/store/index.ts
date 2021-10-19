import { combineReducers } from '@reduxjs/toolkit';

import tenant from './tenant.slice';
import notifications from './notification.slice';

const commonReducers = combineReducers({
	tenant,
	notifications
});

export default commonReducers;