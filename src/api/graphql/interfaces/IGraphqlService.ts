import { Observable } from '@apollo/client/utilities';

export interface IGraphqlService {
    mutationBuilder<R, V>(mutation: any, variables?: V): Promise<R>;
    queryBuilder<R, V>(query: any, variables?: V):  Promise<R>;
    onSubscription<R, V>(subscription: any, variables?: V): Observable<R>;
}
