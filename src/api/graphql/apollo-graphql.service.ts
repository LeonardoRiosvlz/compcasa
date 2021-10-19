import { IGraphqlService } from 'api/graphql/interfaces/IGraphqlService';
import {
    DocumentNode,
    OperationVariables,
    TypedDocumentNode
} from '@apollo/client';
import { Observable } from '@apollo/client/utilities';
import { ApolloClientProvider } from './client';

export type GQLSchema = DocumentNode | TypedDocumentNode

export class ApolloGraphqlService implements IGraphqlService {


    queryBuilder<R, V = OperationVariables>(query: GQLSchema, variables?: V): Promise<R> {
        return new Promise((resolve, reject) => {
            ApolloClientProvider.client.query<R, V>({
                query,
                variables,
                errorPolicy: 'all',
                fetchPolicy: 'no-cache'
            }).then(({ data, errors }) => {
                if (data) {
                    const keys = Object.keys(data ?? {}).map(x => x as keyof R);
                    const k = keys.pop();
                    data = k ? data[k] : null as any;
                }
                const message = errors?.find(_ => true)?.message;
                if (message) {
                    reject(message);
                } else {
                    resolve(data);
                }
            }).catch(err => reject(err));

        });
    }

    mutationBuilder<R, V>(mutation: GQLSchema, variables?: V): Promise<R> {
        return new Promise((resolve, reject) => {
            ApolloClientProvider.client.mutate<R, V>({
                mutation,
                variables,
                errorPolicy: 'all',
                fetchPolicy: 'no-cache'
            }).then(({ data, errors }) => {
                if (data) {
                    const keys = Object.keys(data ?? {}).map(x => x as keyof R);
                    const k = keys.pop();
                    data = k ? data[k] : null as any;
                }
                const message = errors?.find(_ => true)?.message;
                if (message) {
                    reject(message);
                } else {
                    resolve(data as any);
                }
            }).catch(err => reject(err));
        });
    }

    onSubscription<R, V>(query: GQLSchema, variables?: V): Observable<R> {
        return ApolloClientProvider.client.subscribe<R, V>({
            query,
            variables,
            errorPolicy: 'all',
            fetchPolicy: 'no-cache'
        }).filter(x => !!x.data).map<R>(x => {
            const keys = Object.keys(x?.data ?? {}) as Array<keyof R>;
            const k = keys.pop();
            return (x.data as any)[k];
        });
    }

}