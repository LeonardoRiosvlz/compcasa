export type AppLang = 'es' | 'en'
export type AppStorageType = 'cookie' | 'local'

export interface IAppStorage {
	type: AppStorageType;

	setLang(lang: AppLang): void;

	setToken(token: string): void;

	unSetToken(): void;

	setTenant(tenant: string): void;

	unSetTenant(): void;

	getLang(): AppLang;

	getToken(): string | null;

	getTenant(): string | null;

	cleanAll(): void;
}