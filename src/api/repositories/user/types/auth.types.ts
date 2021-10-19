import {
    AuthRoleResponse,
    AuthUserResponse,
    ForgotPasswordInput,
    JwtAuthenticatedResponse
} from "api/graphql/schema/types";

export type  ForgotPasswordParams = ForgotPasswordInput
export type AuthResult = JwtAuthenticatedResponse

export type AuthUser = AuthUserResponse & {
    displayName?: string;
    shortcuts?: Array<string>
}

export type AuthRole = AuthRoleResponse