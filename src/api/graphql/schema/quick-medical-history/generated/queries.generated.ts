import * as Types from '../../types';

import { QuickMedicalHistoryFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { QuickMedicalHistoryFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllQuickMedicalHistoryDocument = gql`
    query getAllQuickMedicalHistory($input: GetAllQuickMedicalHistoryInput!) {
  getAllQuickMedicalHistory(input: $input) {
    ...QuickMedicalHistoryFragment
  }
}
    ${QuickMedicalHistoryFragmentFragmentDoc}`;
export type GetAllQuickMedicalHistoryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllQuickMedicalHistoryQuery, GetAllQuickMedicalHistoryQueryVariables>
    } & TChildProps;
export function withGetAllQuickMedicalHistory<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllQuickMedicalHistoryQuery,
  GetAllQuickMedicalHistoryQueryVariables,
  GetAllQuickMedicalHistoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllQuickMedicalHistoryQuery, GetAllQuickMedicalHistoryQueryVariables, GetAllQuickMedicalHistoryProps<TChildProps, TDataName>>(GetAllQuickMedicalHistoryDocument, {
      alias: 'getAllQuickMedicalHistory',
      ...operationOptions
    });
};

/**
 * __useGetAllQuickMedicalHistoryQuery__
 *
 * To run a query within a React component, call `useGetAllQuickMedicalHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllQuickMedicalHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllQuickMedicalHistoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllQuickMedicalHistoryQuery(baseOptions: Apollo.QueryHookOptions<GetAllQuickMedicalHistoryQuery, GetAllQuickMedicalHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllQuickMedicalHistoryQuery, GetAllQuickMedicalHistoryQueryVariables>(GetAllQuickMedicalHistoryDocument, options);
      }
export function useGetAllQuickMedicalHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllQuickMedicalHistoryQuery, GetAllQuickMedicalHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllQuickMedicalHistoryQuery, GetAllQuickMedicalHistoryQueryVariables>(GetAllQuickMedicalHistoryDocument, options);
        }
export type GetAllQuickMedicalHistoryQueryHookResult = ReturnType<typeof useGetAllQuickMedicalHistoryQuery>;
export type GetAllQuickMedicalHistoryLazyQueryHookResult = ReturnType<typeof useGetAllQuickMedicalHistoryLazyQuery>;
export type GetAllQuickMedicalHistoryQueryResult = Apollo.QueryResult<GetAllQuickMedicalHistoryQuery, GetAllQuickMedicalHistoryQueryVariables>;
export const GetPaginatedQuickMedicalHistoryDocument = gql`
    query getPaginatedQuickMedicalHistory($input: GetPaginatedQuickMedicalHistoryInput!) {
  getPaginatedQuickMedicalHistory(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...QuickMedicalHistoryFragment
    }
  }
}
    ${QuickMedicalHistoryFragmentFragmentDoc}`;
export type GetPaginatedQuickMedicalHistoryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedQuickMedicalHistoryQuery, GetPaginatedQuickMedicalHistoryQueryVariables>
    } & TChildProps;
export function withGetPaginatedQuickMedicalHistory<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedQuickMedicalHistoryQuery,
  GetPaginatedQuickMedicalHistoryQueryVariables,
  GetPaginatedQuickMedicalHistoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedQuickMedicalHistoryQuery, GetPaginatedQuickMedicalHistoryQueryVariables, GetPaginatedQuickMedicalHistoryProps<TChildProps, TDataName>>(GetPaginatedQuickMedicalHistoryDocument, {
      alias: 'getPaginatedQuickMedicalHistory',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedQuickMedicalHistoryQuery__
 *
 * To run a query within a React component, call `useGetPaginatedQuickMedicalHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedQuickMedicalHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedQuickMedicalHistoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedQuickMedicalHistoryQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedQuickMedicalHistoryQuery, GetPaginatedQuickMedicalHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedQuickMedicalHistoryQuery, GetPaginatedQuickMedicalHistoryQueryVariables>(GetPaginatedQuickMedicalHistoryDocument, options);
      }
export function useGetPaginatedQuickMedicalHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedQuickMedicalHistoryQuery, GetPaginatedQuickMedicalHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedQuickMedicalHistoryQuery, GetPaginatedQuickMedicalHistoryQueryVariables>(GetPaginatedQuickMedicalHistoryDocument, options);
        }
export type GetPaginatedQuickMedicalHistoryQueryHookResult = ReturnType<typeof useGetPaginatedQuickMedicalHistoryQuery>;
export type GetPaginatedQuickMedicalHistoryLazyQueryHookResult = ReturnType<typeof useGetPaginatedQuickMedicalHistoryLazyQuery>;
export type GetPaginatedQuickMedicalHistoryQueryResult = Apollo.QueryResult<GetPaginatedQuickMedicalHistoryQuery, GetPaginatedQuickMedicalHistoryQueryVariables>;
export const GetOneQuickMedicalHistoryDocument = gql`
    query getOneQuickMedicalHistory($input: GetOneQuickMedicalHistoryInput!) {
  getOneQuickMedicalHistory(input: $input) {
    ...QuickMedicalHistoryFragment
  }
}
    ${QuickMedicalHistoryFragmentFragmentDoc}`;
export type GetOneQuickMedicalHistoryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneQuickMedicalHistoryQuery, GetOneQuickMedicalHistoryQueryVariables>
    } & TChildProps;
export function withGetOneQuickMedicalHistory<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneQuickMedicalHistoryQuery,
  GetOneQuickMedicalHistoryQueryVariables,
  GetOneQuickMedicalHistoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneQuickMedicalHistoryQuery, GetOneQuickMedicalHistoryQueryVariables, GetOneQuickMedicalHistoryProps<TChildProps, TDataName>>(GetOneQuickMedicalHistoryDocument, {
      alias: 'getOneQuickMedicalHistory',
      ...operationOptions
    });
};

/**
 * __useGetOneQuickMedicalHistoryQuery__
 *
 * To run a query within a React component, call `useGetOneQuickMedicalHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneQuickMedicalHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneQuickMedicalHistoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneQuickMedicalHistoryQuery(baseOptions: Apollo.QueryHookOptions<GetOneQuickMedicalHistoryQuery, GetOneQuickMedicalHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneQuickMedicalHistoryQuery, GetOneQuickMedicalHistoryQueryVariables>(GetOneQuickMedicalHistoryDocument, options);
      }
export function useGetOneQuickMedicalHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneQuickMedicalHistoryQuery, GetOneQuickMedicalHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneQuickMedicalHistoryQuery, GetOneQuickMedicalHistoryQueryVariables>(GetOneQuickMedicalHistoryDocument, options);
        }
export type GetOneQuickMedicalHistoryQueryHookResult = ReturnType<typeof useGetOneQuickMedicalHistoryQuery>;
export type GetOneQuickMedicalHistoryLazyQueryHookResult = ReturnType<typeof useGetOneQuickMedicalHistoryLazyQuery>;
export type GetOneQuickMedicalHistoryQueryResult = Apollo.QueryResult<GetOneQuickMedicalHistoryQuery, GetOneQuickMedicalHistoryQueryVariables>;
export type GetAllQuickMedicalHistoryQueryVariables = Types.Exact<{
  input: Types.GetAllQuickMedicalHistoryInput;
}>;


export type GetAllQuickMedicalHistoryQuery = { getAllQuickMedicalHistory: Array<QuickMedicalHistoryFragmentFragment> };

export type GetPaginatedQuickMedicalHistoryQueryVariables = Types.Exact<{
  input: Types.GetPaginatedQuickMedicalHistoryInput;
}>;


export type GetPaginatedQuickMedicalHistoryQuery = { getPaginatedQuickMedicalHistory?: Types.Maybe<(
    Pick<Types.PaginatedQuickMedicalHistoryResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<QuickMedicalHistoryFragmentFragment> }
  )> };

export type GetOneQuickMedicalHistoryQueryVariables = Types.Exact<{
  input: Types.GetOneQuickMedicalHistoryInput;
}>;


export type GetOneQuickMedicalHistoryQuery = { getOneQuickMedicalHistory?: Types.Maybe<QuickMedicalHistoryFragmentFragment> };
