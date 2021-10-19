import * as Types from '../../types';

import { TenantFragmentFragment, SimplifiedTenantFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { TenantFragmentFragmentDoc, SimplifiedTenantFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllTenantDocument = gql`
    query getAllTenant($input: GetAllTenantsInput!) {
  getAllTenant(input: $input) {
    ...TenantFragment
  }
}
    ${TenantFragmentFragmentDoc}`;
export type GetAllTenantProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllTenantQuery, GetAllTenantQueryVariables>
    } & TChildProps;
export function withGetAllTenant<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllTenantQuery,
  GetAllTenantQueryVariables,
  GetAllTenantProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllTenantQuery, GetAllTenantQueryVariables, GetAllTenantProps<TChildProps, TDataName>>(GetAllTenantDocument, {
      alias: 'getAllTenant',
      ...operationOptions
    });
};

/**
 * __useGetAllTenantQuery__
 *
 * To run a query within a React component, call `useGetAllTenantQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTenantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTenantQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllTenantQuery(baseOptions: Apollo.QueryHookOptions<GetAllTenantQuery, GetAllTenantQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTenantQuery, GetAllTenantQueryVariables>(GetAllTenantDocument, options);
      }
export function useGetAllTenantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTenantQuery, GetAllTenantQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTenantQuery, GetAllTenantQueryVariables>(GetAllTenantDocument, options);
        }
export type GetAllTenantQueryHookResult = ReturnType<typeof useGetAllTenantQuery>;
export type GetAllTenantLazyQueryHookResult = ReturnType<typeof useGetAllTenantLazyQuery>;
export type GetAllTenantQueryResult = Apollo.QueryResult<GetAllTenantQuery, GetAllTenantQueryVariables>;
export const GetAllSimplifiedTenantsInfoDocument = gql`
    query getAllSimplifiedTenantsInfo($input: GetAllTenantsInput!) {
  getAllSimplifiedTenantsInfo(input: $input) {
    ...SimplifiedTenantFragment
  }
}
    ${SimplifiedTenantFragmentFragmentDoc}`;
export type GetAllSimplifiedTenantsInfoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllSimplifiedTenantsInfoQuery, GetAllSimplifiedTenantsInfoQueryVariables>
    } & TChildProps;
export function withGetAllSimplifiedTenantsInfo<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllSimplifiedTenantsInfoQuery,
  GetAllSimplifiedTenantsInfoQueryVariables,
  GetAllSimplifiedTenantsInfoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllSimplifiedTenantsInfoQuery, GetAllSimplifiedTenantsInfoQueryVariables, GetAllSimplifiedTenantsInfoProps<TChildProps, TDataName>>(GetAllSimplifiedTenantsInfoDocument, {
      alias: 'getAllSimplifiedTenantsInfo',
      ...operationOptions
    });
};

/**
 * __useGetAllSimplifiedTenantsInfoQuery__
 *
 * To run a query within a React component, call `useGetAllSimplifiedTenantsInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSimplifiedTenantsInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSimplifiedTenantsInfoQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllSimplifiedTenantsInfoQuery(baseOptions: Apollo.QueryHookOptions<GetAllSimplifiedTenantsInfoQuery, GetAllSimplifiedTenantsInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSimplifiedTenantsInfoQuery, GetAllSimplifiedTenantsInfoQueryVariables>(GetAllSimplifiedTenantsInfoDocument, options);
      }
export function useGetAllSimplifiedTenantsInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSimplifiedTenantsInfoQuery, GetAllSimplifiedTenantsInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSimplifiedTenantsInfoQuery, GetAllSimplifiedTenantsInfoQueryVariables>(GetAllSimplifiedTenantsInfoDocument, options);
        }
export type GetAllSimplifiedTenantsInfoQueryHookResult = ReturnType<typeof useGetAllSimplifiedTenantsInfoQuery>;
export type GetAllSimplifiedTenantsInfoLazyQueryHookResult = ReturnType<typeof useGetAllSimplifiedTenantsInfoLazyQuery>;
export type GetAllSimplifiedTenantsInfoQueryResult = Apollo.QueryResult<GetAllSimplifiedTenantsInfoQuery, GetAllSimplifiedTenantsInfoQueryVariables>;
export type GetAllTenantQueryVariables = Types.Exact<{
  input: Types.GetAllTenantsInput;
}>;


export type GetAllTenantQuery = { getAllTenant?: Types.Maybe<Array<TenantFragmentFragment>> };

export type GetAllSimplifiedTenantsInfoQueryVariables = Types.Exact<{
  input: Types.GetAllTenantsInput;
}>;


export type GetAllSimplifiedTenantsInfoQuery = { getAllSimplifiedTenantsInfo?: Types.Maybe<Array<SimplifiedTenantFragmentFragment>> };
