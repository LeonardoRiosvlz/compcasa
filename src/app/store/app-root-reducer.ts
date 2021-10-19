import {combineReducers} from '@reduxjs/toolkit';
import auth from 'app/modules/auth/store';
import app from 'app/modules/common/store/';
import fuse from './fuse';
import i18n from './i18nSlice';


const createAppReducers = (asyncReducers?: any) => {
    const combinedReducers = combineReducers({
        auth,
        app,
        fuse,
        i18n,
        ...asyncReducers
    });

    return combinedReducers
};

export default createAppReducers;