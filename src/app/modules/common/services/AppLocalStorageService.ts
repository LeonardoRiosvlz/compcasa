import { AppLang, AppStorageType, IAppStorage } from 'app/modules/common/interfaces/IAppStorage';

class AppLocalStorageService implements IAppStorage {

	type: AppStorageType = 'local';

	setLang(lang: AppLang): void {
		localStorage.setItem('app_lang', lang);
	}

	setToken(token: string): void {
		localStorage.setItem('access_token', token);
	}

	unSetToken(): void {
		localStorage.removeItem('access_token')
	}

	setTenant(tenant: string): void {
		localStorage.setItem('tenant', tenant);
	}

	unSetTenant(): void {
		localStorage.removeItem('tenant')
	}


	getLang(): AppLang {
		return localStorage.getItem('i18n') as AppLang ?? 'es';
	}

	getToken(): string | null {
		return localStorage.getItem('access_token');
	}

	getTenant(): string | null {
		return localStorage.getItem('tenant');
	}

	cleanAll(): void {
		localStorage.clear();
	}
}

const appLocalStorage = new AppLocalStorageService();
export { appLocalStorage };