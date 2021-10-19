import { IAuthRepository} from './interfaces/IAuthRepository';

import {
    ChangePasswordDocument,
    ChangePasswordMutationVariables, ForgotPasswordDocument, ForgotPasswordMutationVariables,
    ResetPasswordDocument,
    ResetPasswordMutationVariables,
    SigInDocument, SigInMutationVariables
} from 'api/graphql/schema/user/generated/mutations.generated';

import {
    AuthUserResponse,
    JwtAuthenticatedResponse
} from 'api/graphql/schema/types';


import {
    MyInfoDocument,
    MyInfoQueryVariables
} from 'api/graphql/schema/user/generated/queries.generated';

import {AuthResult, ForgotPasswordParams} from "./types/auth.types";
import {GraphqlRepository} from "../../graphql/gql-repository";

export class AuthRepository extends GraphqlRepository<unknown> implements IAuthRepository {

    constructor() {
        super()
    }

    async login(unique: string, password: string): Promise<AuthResult> {
        return new Promise((resolve, reject) => {
            this._apolloGraphqlService.mutationBuilder<JwtAuthenticatedResponse, SigInMutationVariables>(SigInDocument, {
                input: {
                    unique,
                    password
                }
            }).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    myInfo(): Promise<AuthUserResponse> {
        return new Promise((resolve, reject) => {
            this._apolloGraphqlService.queryBuilder<AuthUserResponse, MyInfoQueryVariables>(MyInfoDocument).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    }


    resetPassword(password: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this._apolloGraphqlService.mutationBuilder<void, ResetPasswordMutationVariables>(
                ResetPasswordDocument,
                {input: {password}}
            ).then(() => resolve()).catch((err) => reject(err));
        });
    }


    changePassword(newPassword: string, oldPassword: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this._apolloGraphqlService.mutationBuilder<void, ChangePasswordMutationVariables>(
                ChangePasswordDocument,
                {input: {newPassword, oldPassword}}
            ).then(() => resolve()).catch((err) => reject(err));
        });
    }

    forgotPassword(params: ForgotPasswordParams): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this._apolloGraphqlService.mutationBuilder<void, ForgotPasswordMutationVariables>(
                ForgotPasswordDocument,
                {input: {...params}}
            ).then(() => resolve()).catch((err) => reject(err));
        });
    }


}