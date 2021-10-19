import { combineReducers } from '@reduxjs/toolkit';

import user from './user.slice';

const authReducers = combineReducers({
	user,
});

export default authReducers;
