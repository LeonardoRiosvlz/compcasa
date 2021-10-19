import * as Types from '../../types';

import { NotificationFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { NotificationFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetPaginatedNotificationsDocument = gql`
    query getPaginatedNotifications($input: GetPaginatedNotificationInput!) {
  getPaginatedNotification(input: $input) {
    totalPages
    currentPage
    limit
    total
    items {
      ...NotificationFragment
    }
  }
}
    ${NotificationFragmentFragmentDoc}`;
export type GetPaginatedNotificationsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedNotificationsQuery, GetPaginatedNotificationsQueryVariables>
    } & TChildProps;
export function withGetPaginatedNotifications<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedNotificationsQuery,
  GetPaginatedNotificationsQueryVariables,
  GetPaginatedNotificationsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedNotificationsQuery, GetPaginatedNotificationsQueryVariables, GetPaginatedNotificationsProps<TChildProps, TDataName>>(GetPaginatedNotificationsDocument, {
      alias: 'getPaginatedNotifications',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedNotificationsQuery__
 *
 * To run a query within a React component, call `useGetPaginatedNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedNotificationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedNotificationsQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedNotificationsQuery, GetPaginatedNotificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedNotificationsQuery, GetPaginatedNotificationsQueryVariables>(GetPaginatedNotificationsDocument, options);
      }
export function useGetPaginatedNotificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedNotificationsQuery, GetPaginatedNotificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedNotificationsQuery, GetPaginatedNotificationsQueryVariables>(GetPaginatedNotificationsDocument, options);
        }
export type GetPaginatedNotificationsQueryHookResult = ReturnType<typeof useGetPaginatedNotificationsQuery>;
export type GetPaginatedNotificationsLazyQueryHookResult = ReturnType<typeof useGetPaginatedNotificationsLazyQuery>;
export type GetPaginatedNotificationsQueryResult = Apollo.QueryResult<GetPaginatedNotificationsQuery, GetPaginatedNotificationsQueryVariables>;
export const GetNotificationsDocument = gql`
    query getNotifications($input: GetAllNotificationInput!) {
  getAllNotification(input: $input) {
    ...NotificationFragment
  }
}
    ${NotificationFragmentFragmentDoc}`;
export type GetNotificationsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetNotificationsQuery, GetNotificationsQueryVariables>
    } & TChildProps;
export function withGetNotifications<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetNotificationsQuery,
  GetNotificationsQueryVariables,
  GetNotificationsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetNotificationsQuery, GetNotificationsQueryVariables, GetNotificationsProps<TChildProps, TDataName>>(GetNotificationsDocument, {
      alias: 'getNotifications',
      ...operationOptions
    });
};

/**
 * __useGetNotificationsQuery__
 *
 * To run a query within a React component, call `useGetNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotificationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetNotificationsQuery(baseOptions: Apollo.QueryHookOptions<GetNotificationsQuery, GetNotificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(GetNotificationsDocument, options);
      }
export function useGetNotificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNotificationsQuery, GetNotificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(GetNotificationsDocument, options);
        }
export type GetNotificationsQueryHookResult = ReturnType<typeof useGetNotificationsQuery>;
export type GetNotificationsLazyQueryHookResult = ReturnType<typeof useGetNotificationsLazyQuery>;
export type GetNotificationsQueryResult = Apollo.QueryResult<GetNotificationsQuery, GetNotificationsQueryVariables>;
export type GetPaginatedNotificationsQueryVariables = Types.Exact<{
  input: Types.GetPaginatedNotificationInput;
}>;


export type GetPaginatedNotificationsQuery = { getPaginatedNotification?: Types.Maybe<(
    Pick<Types.PaginatedNotificationResponse, 'totalPages' | 'currentPage' | 'limit' | 'total'>
    & { items: Array<NotificationFragmentFragment> }
  )> };

export type GetNotificationsQueryVariables = Types.Exact<{
  input: Types.GetAllNotificationInput;
}>;


export type GetNotificationsQuery = { getAllNotification?: Types.Maybe<Array<NotificationFragmentFragment>> };
