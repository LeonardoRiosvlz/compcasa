import thunk from 'redux-thunk';
import { Dispatch } from 'react';

import {configureStore} from '@reduxjs/toolkit'

import createAppReducers from "./app-root-reducer";
import {Reducer} from "react";

const rootReducer = createAppReducers()


const middlewares:Array<any> = [thunk];
if (process.env.NODE_ENV === 'development') {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: {
                ignoredActions: [
                    'dialog/openDialog',
                    'dialog/closeDialog',
                    'message/showMessage',
                    'message/hideMessage'
                ]
            }
        }).concat(middlewares),
    devTools: process.env.NODE_ENV === 'development'
})



type RootState = ReturnType<typeof rootReducer>

type AppDispatch = typeof store.dispatch;


let  asyncReducers: any = {};


export const injectReducer = (key: string, reducer: Reducer<any, any>) => {

    if (asyncReducers[key]) {
        return false;
    }
    asyncReducers[key] = reducer;


    store.replaceReducer(createAppReducers(asyncReducers));
    return store;
};

export interface AppThunkActionAsync<TAction> {
    (dispatch: Dispatch<TAction>, getState: () => RootState): void | Promise<void>;
}

export type {RootState, AppDispatch}
export default store;