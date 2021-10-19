import { IRepository } from 'api/interfaces/IRepository';
import {Profile, User} from "../types/user.types";



export interface IUserRepository extends IRepository<User> {
	updateMe(update: unknown): Promise<void>;

	getMyProfile(): Promise<Profile>;
	getUserProfile(userId: string): Promise<Profile>;
}

