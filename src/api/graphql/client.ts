import { ApolloClient, InMemoryCache, ApolloLink, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { createUploadLink } from 'apollo-upload-client';
import { WebSocketLink } from '@apollo/client/link/ws';

export interface RequestHeaders {
	authorization?: string,
	tenant?: string,
	lang?: string
}

export class ApolloClientProvider {

	public static apiUrl = `${process.env.REACT_APP_API_URL ?? 'https://api.displayforplay.com'}/graphql`;
	public static wsUrl = `${String(process.env.REACT_APP_API_WS ?? 'wss://api.displayforplay.com')}/graphql`;

	public static client: ApolloClient<any>;

	public static initApolloClient(h: Partial<RequestHeaders>) {
		this.buildApolloClient(h);
	}


	private static buildApolloClient(headers?: RequestHeaders) {
		this.client = new ApolloClient({
			link: this.buildLink(headers),
			cache: new InMemoryCache({ addTypename: false }),
			defaultOptions:
				{
					watchQuery: {
						fetchPolicy: 'no-cache',
						errorPolicy: 'all'
					},
					query: {
						fetchPolicy: 'no-cache',
						errorPolicy: 'all'
					},
					mutate: {
						fetchPolicy: 'no-cache'
					}

				}
		});


	}

	public static buildLink(headers?: any): ApolloLink {
		headers = {
			'keep-alive': true,
			...headers ?? {}
		};


		if (headers.authorization) {
			headers.authorization = `Bearer ${headers.authorization}`;
		}


		const linkConstants = {
			uri: this.apiUrl,
			headers
		};

		const uploadLink = createUploadLink({ ...linkConstants });

		const wsLink = new WebSocketLink({
			uri: this.wsUrl,
			options: {
				reconnect: true,
				connectionParams: {
					...headers
				}
			}
		});

		return split(
			({ query }) => {
				const definition = getMainDefinition(query);
				return (
					definition.kind === 'OperationDefinition' &&
					definition.operation === 'subscription'
				);
			},
			wsLink,
			uploadLink
		);
	}

	public static setLink(headers?: Partial<RequestHeaders>) {
		this.client.setLink(this.buildLink(headers));

	}
}



