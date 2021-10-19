import {AuthResult, AuthUser, ForgotPasswordParams} from "../types/auth.types";


export interface IAuthRepository {
	login(email: string, password: string): Promise<AuthResult>;

	myInfo(): Promise<AuthUser>;

	resetPassword(password: string): Promise<void>;

	changePassword(newPassword: string, oldPassword: string): Promise<void>;

	forgotPassword(params: ForgotPasswordParams): Promise<void>;


}

