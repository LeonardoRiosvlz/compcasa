import { ApolloClientProvider, RequestHeaders } from 'api/graphql/client';
import { appLocalStorage } from 'app/modules/common/services/AppLocalStorageService';


export type AppHeaders = RequestHeaders


export class LaunchGqlClient {


	private static buildHeaders(): AppHeaders {
		const tenant = appLocalStorage.getTenant() ?? undefined;
		const authorization = appLocalStorage.getToken() ?? undefined;
		const lang = appLocalStorage.getLang();
		const headers: AppHeaders = {
			lang,
			authorization
		};
		if (tenant) {
			headers.tenant = tenant;
		}
		return headers;
	}

	public static init(): void {
		ApolloClientProvider.initApolloClient(this.buildHeaders());
	}

	public static rebuildLink(): void {
		ApolloClientProvider.setLink(this.buildHeaders());
	}

}