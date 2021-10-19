import * as Types from '../../types';

import { UserAreaFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { UserAreaFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllUserAreaDocument = gql`
    query getAllUserArea($input: GetAllUserAreaInput!) {
  getAllUserArea(input: $input) {
    ...UserAreaFragment
  }
}
    ${UserAreaFragmentFragmentDoc}`;
export type GetAllUserAreaProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllUserAreaQuery, GetAllUserAreaQueryVariables>
    } & TChildProps;
export function withGetAllUserArea<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllUserAreaQuery,
  GetAllUserAreaQueryVariables,
  GetAllUserAreaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllUserAreaQuery, GetAllUserAreaQueryVariables, GetAllUserAreaProps<TChildProps, TDataName>>(GetAllUserAreaDocument, {
      alias: 'getAllUserArea',
      ...operationOptions
    });
};

/**
 * __useGetAllUserAreaQuery__
 *
 * To run a query within a React component, call `useGetAllUserAreaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserAreaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserAreaQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllUserAreaQuery(baseOptions: Apollo.QueryHookOptions<GetAllUserAreaQuery, GetAllUserAreaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserAreaQuery, GetAllUserAreaQueryVariables>(GetAllUserAreaDocument, options);
      }
export function useGetAllUserAreaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserAreaQuery, GetAllUserAreaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserAreaQuery, GetAllUserAreaQueryVariables>(GetAllUserAreaDocument, options);
        }
export type GetAllUserAreaQueryHookResult = ReturnType<typeof useGetAllUserAreaQuery>;
export type GetAllUserAreaLazyQueryHookResult = ReturnType<typeof useGetAllUserAreaLazyQuery>;
export type GetAllUserAreaQueryResult = Apollo.QueryResult<GetAllUserAreaQuery, GetAllUserAreaQueryVariables>;
export const GetPaginatedUserAreaDocument = gql`
    query getPaginatedUserArea($input: GetPaginatedUserAreaInput!) {
  getPaginatedUserArea(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...UserAreaFragment
    }
  }
}
    ${UserAreaFragmentFragmentDoc}`;
export type GetPaginatedUserAreaProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedUserAreaQuery, GetPaginatedUserAreaQueryVariables>
    } & TChildProps;
export function withGetPaginatedUserArea<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedUserAreaQuery,
  GetPaginatedUserAreaQueryVariables,
  GetPaginatedUserAreaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedUserAreaQuery, GetPaginatedUserAreaQueryVariables, GetPaginatedUserAreaProps<TChildProps, TDataName>>(GetPaginatedUserAreaDocument, {
      alias: 'getPaginatedUserArea',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedUserAreaQuery__
 *
 * To run a query within a React component, call `useGetPaginatedUserAreaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedUserAreaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedUserAreaQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedUserAreaQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedUserAreaQuery, GetPaginatedUserAreaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedUserAreaQuery, GetPaginatedUserAreaQueryVariables>(GetPaginatedUserAreaDocument, options);
      }
export function useGetPaginatedUserAreaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedUserAreaQuery, GetPaginatedUserAreaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedUserAreaQuery, GetPaginatedUserAreaQueryVariables>(GetPaginatedUserAreaDocument, options);
        }
export type GetPaginatedUserAreaQueryHookResult = ReturnType<typeof useGetPaginatedUserAreaQuery>;
export type GetPaginatedUserAreaLazyQueryHookResult = ReturnType<typeof useGetPaginatedUserAreaLazyQuery>;
export type GetPaginatedUserAreaQueryResult = Apollo.QueryResult<GetPaginatedUserAreaQuery, GetPaginatedUserAreaQueryVariables>;
export const GetOneUserAreaDocument = gql`
    query getOneUserArea($input: GetOneUserAreaInput!) {
  getOneUserArea(input: $input) {
    ...UserAreaFragment
  }
}
    ${UserAreaFragmentFragmentDoc}`;
export type GetOneUserAreaProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneUserAreaQuery, GetOneUserAreaQueryVariables>
    } & TChildProps;
export function withGetOneUserArea<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneUserAreaQuery,
  GetOneUserAreaQueryVariables,
  GetOneUserAreaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneUserAreaQuery, GetOneUserAreaQueryVariables, GetOneUserAreaProps<TChildProps, TDataName>>(GetOneUserAreaDocument, {
      alias: 'getOneUserArea',
      ...operationOptions
    });
};

/**
 * __useGetOneUserAreaQuery__
 *
 * To run a query within a React component, call `useGetOneUserAreaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUserAreaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUserAreaQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneUserAreaQuery(baseOptions: Apollo.QueryHookOptions<GetOneUserAreaQuery, GetOneUserAreaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneUserAreaQuery, GetOneUserAreaQueryVariables>(GetOneUserAreaDocument, options);
      }
export function useGetOneUserAreaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneUserAreaQuery, GetOneUserAreaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneUserAreaQuery, GetOneUserAreaQueryVariables>(GetOneUserAreaDocument, options);
        }
export type GetOneUserAreaQueryHookResult = ReturnType<typeof useGetOneUserAreaQuery>;
export type GetOneUserAreaLazyQueryHookResult = ReturnType<typeof useGetOneUserAreaLazyQuery>;
export type GetOneUserAreaQueryResult = Apollo.QueryResult<GetOneUserAreaQuery, GetOneUserAreaQueryVariables>;
export type GetAllUserAreaQueryVariables = Types.Exact<{
  input: Types.GetAllUserAreaInput;
}>;


export type GetAllUserAreaQuery = { getAllUserArea?: Types.Maybe<Array<UserAreaFragmentFragment>> };

export type GetPaginatedUserAreaQueryVariables = Types.Exact<{
  input: Types.GetPaginatedUserAreaInput;
}>;


export type GetPaginatedUserAreaQuery = { getPaginatedUserArea?: Types.Maybe<(
    Pick<Types.PaginatedUserAreaResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<UserAreaFragmentFragment> }
  )> };

export type GetOneUserAreaQueryVariables = Types.Exact<{
  input: Types.GetOneUserAreaInput;
}>;


export type GetOneUserAreaQuery = { getOneUserArea?: Types.Maybe<UserAreaFragmentFragment> };
