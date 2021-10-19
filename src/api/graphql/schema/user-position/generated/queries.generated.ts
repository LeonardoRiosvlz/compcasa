import * as Types from '../../types';

import { UserPositionFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { UserPositionFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllUserPositionDocument = gql`
    query getAllUserPosition($input: GetAllUserPositionInput!) {
  getAllUserPosition(input: $input) {
    ...UserPositionFragment
  }
}
    ${UserPositionFragmentFragmentDoc}`;
export type GetAllUserPositionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllUserPositionQuery, GetAllUserPositionQueryVariables>
    } & TChildProps;
export function withGetAllUserPosition<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllUserPositionQuery,
  GetAllUserPositionQueryVariables,
  GetAllUserPositionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllUserPositionQuery, GetAllUserPositionQueryVariables, GetAllUserPositionProps<TChildProps, TDataName>>(GetAllUserPositionDocument, {
      alias: 'getAllUserPosition',
      ...operationOptions
    });
};

/**
 * __useGetAllUserPositionQuery__
 *
 * To run a query within a React component, call `useGetAllUserPositionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserPositionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserPositionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllUserPositionQuery(baseOptions: Apollo.QueryHookOptions<GetAllUserPositionQuery, GetAllUserPositionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserPositionQuery, GetAllUserPositionQueryVariables>(GetAllUserPositionDocument, options);
      }
export function useGetAllUserPositionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserPositionQuery, GetAllUserPositionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserPositionQuery, GetAllUserPositionQueryVariables>(GetAllUserPositionDocument, options);
        }
export type GetAllUserPositionQueryHookResult = ReturnType<typeof useGetAllUserPositionQuery>;
export type GetAllUserPositionLazyQueryHookResult = ReturnType<typeof useGetAllUserPositionLazyQuery>;
export type GetAllUserPositionQueryResult = Apollo.QueryResult<GetAllUserPositionQuery, GetAllUserPositionQueryVariables>;
export const GetPaginatedUserPositionDocument = gql`
    query getPaginatedUserPosition($input: GetPaginatedUserPositionInput!) {
  getPaginatedUserPosition(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...UserPositionFragment
    }
  }
}
    ${UserPositionFragmentFragmentDoc}`;
export type GetPaginatedUserPositionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedUserPositionQuery, GetPaginatedUserPositionQueryVariables>
    } & TChildProps;
export function withGetPaginatedUserPosition<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedUserPositionQuery,
  GetPaginatedUserPositionQueryVariables,
  GetPaginatedUserPositionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedUserPositionQuery, GetPaginatedUserPositionQueryVariables, GetPaginatedUserPositionProps<TChildProps, TDataName>>(GetPaginatedUserPositionDocument, {
      alias: 'getPaginatedUserPosition',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedUserPositionQuery__
 *
 * To run a query within a React component, call `useGetPaginatedUserPositionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedUserPositionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedUserPositionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedUserPositionQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedUserPositionQuery, GetPaginatedUserPositionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedUserPositionQuery, GetPaginatedUserPositionQueryVariables>(GetPaginatedUserPositionDocument, options);
      }
export function useGetPaginatedUserPositionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedUserPositionQuery, GetPaginatedUserPositionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedUserPositionQuery, GetPaginatedUserPositionQueryVariables>(GetPaginatedUserPositionDocument, options);
        }
export type GetPaginatedUserPositionQueryHookResult = ReturnType<typeof useGetPaginatedUserPositionQuery>;
export type GetPaginatedUserPositionLazyQueryHookResult = ReturnType<typeof useGetPaginatedUserPositionLazyQuery>;
export type GetPaginatedUserPositionQueryResult = Apollo.QueryResult<GetPaginatedUserPositionQuery, GetPaginatedUserPositionQueryVariables>;
export const GetOneUserPositionDocument = gql`
    query getOneUserPosition($input: GetOneUserPositionInput!) {
  getOneUserPosition(input: $input) {
    ...UserPositionFragment
  }
}
    ${UserPositionFragmentFragmentDoc}`;
export type GetOneUserPositionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneUserPositionQuery, GetOneUserPositionQueryVariables>
    } & TChildProps;
export function withGetOneUserPosition<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneUserPositionQuery,
  GetOneUserPositionQueryVariables,
  GetOneUserPositionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneUserPositionQuery, GetOneUserPositionQueryVariables, GetOneUserPositionProps<TChildProps, TDataName>>(GetOneUserPositionDocument, {
      alias: 'getOneUserPosition',
      ...operationOptions
    });
};

/**
 * __useGetOneUserPositionQuery__
 *
 * To run a query within a React component, call `useGetOneUserPositionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUserPositionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUserPositionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneUserPositionQuery(baseOptions: Apollo.QueryHookOptions<GetOneUserPositionQuery, GetOneUserPositionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneUserPositionQuery, GetOneUserPositionQueryVariables>(GetOneUserPositionDocument, options);
      }
export function useGetOneUserPositionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneUserPositionQuery, GetOneUserPositionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneUserPositionQuery, GetOneUserPositionQueryVariables>(GetOneUserPositionDocument, options);
        }
export type GetOneUserPositionQueryHookResult = ReturnType<typeof useGetOneUserPositionQuery>;
export type GetOneUserPositionLazyQueryHookResult = ReturnType<typeof useGetOneUserPositionLazyQuery>;
export type GetOneUserPositionQueryResult = Apollo.QueryResult<GetOneUserPositionQuery, GetOneUserPositionQueryVariables>;
export type GetAllUserPositionQueryVariables = Types.Exact<{
  input: Types.GetAllUserPositionInput;
}>;


export type GetAllUserPositionQuery = { getAllUserPosition?: Types.Maybe<Array<UserPositionFragmentFragment>> };

export type GetPaginatedUserPositionQueryVariables = Types.Exact<{
  input: Types.GetPaginatedUserPositionInput;
}>;


export type GetPaginatedUserPositionQuery = { getPaginatedUserPosition?: Types.Maybe<(
    Pick<Types.PaginatedUserPositionResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<UserPositionFragmentFragment> }
  )> };

export type GetOneUserPositionQueryVariables = Types.Exact<{
  input: Types.GetOneUserPositionInput;
}>;


export type GetOneUserPositionQuery = { getOneUserPosition?: Types.Maybe<UserPositionFragmentFragment> };
