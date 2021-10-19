import { Action_List, App_Modules } from 'api/graphql/schema/types';

export const NO_AUTH_ROUTES = ['/auth/login', '/auth/forgot-password', '/auth/validate', '/auth/reset-password'];
export type APP_MODULES = App_Modules
export type APP_ACTION = Action_List

