import * as Types from '../../types';

import { RoleFragmentFragment, AvailablePermitsFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { RoleFragmentFragmentDoc, AvailablePermitsFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllRoleDocument = gql`
    query getAllRole($input: GetAllRoleInput!) {
  getAllRole(input: $input) {
    ...RoleFragment
  }
}
    ${RoleFragmentFragmentDoc}`;
export type GetAllRoleProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllRoleQuery, GetAllRoleQueryVariables>
    } & TChildProps;
export function withGetAllRole<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllRoleQuery,
  GetAllRoleQueryVariables,
  GetAllRoleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllRoleQuery, GetAllRoleQueryVariables, GetAllRoleProps<TChildProps, TDataName>>(GetAllRoleDocument, {
      alias: 'getAllRole',
      ...operationOptions
    });
};

/**
 * __useGetAllRoleQuery__
 *
 * To run a query within a React component, call `useGetAllRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRoleQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllRoleQuery(baseOptions: Apollo.QueryHookOptions<GetAllRoleQuery, GetAllRoleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllRoleQuery, GetAllRoleQueryVariables>(GetAllRoleDocument, options);
      }
export function useGetAllRoleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllRoleQuery, GetAllRoleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllRoleQuery, GetAllRoleQueryVariables>(GetAllRoleDocument, options);
        }
export type GetAllRoleQueryHookResult = ReturnType<typeof useGetAllRoleQuery>;
export type GetAllRoleLazyQueryHookResult = ReturnType<typeof useGetAllRoleLazyQuery>;
export type GetAllRoleQueryResult = Apollo.QueryResult<GetAllRoleQuery, GetAllRoleQueryVariables>;
export const GetPaginatedRoleDocument = gql`
    query getPaginatedRole($input: GetPaginatedRoleInput!) {
  getPaginatedRole(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...RoleFragment
    }
  }
}
    ${RoleFragmentFragmentDoc}`;
export type GetPaginatedRoleProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedRoleQuery, GetPaginatedRoleQueryVariables>
    } & TChildProps;
export function withGetPaginatedRole<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedRoleQuery,
  GetPaginatedRoleQueryVariables,
  GetPaginatedRoleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedRoleQuery, GetPaginatedRoleQueryVariables, GetPaginatedRoleProps<TChildProps, TDataName>>(GetPaginatedRoleDocument, {
      alias: 'getPaginatedRole',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedRoleQuery__
 *
 * To run a query within a React component, call `useGetPaginatedRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedRoleQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedRoleQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedRoleQuery, GetPaginatedRoleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedRoleQuery, GetPaginatedRoleQueryVariables>(GetPaginatedRoleDocument, options);
      }
export function useGetPaginatedRoleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedRoleQuery, GetPaginatedRoleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedRoleQuery, GetPaginatedRoleQueryVariables>(GetPaginatedRoleDocument, options);
        }
export type GetPaginatedRoleQueryHookResult = ReturnType<typeof useGetPaginatedRoleQuery>;
export type GetPaginatedRoleLazyQueryHookResult = ReturnType<typeof useGetPaginatedRoleLazyQuery>;
export type GetPaginatedRoleQueryResult = Apollo.QueryResult<GetPaginatedRoleQuery, GetPaginatedRoleQueryVariables>;
export const GetOneRoleDocument = gql`
    query getOneRole($input: GetOneRoleInput!) {
  getOneRole(input: $input) {
    ...RoleFragment
  }
}
    ${RoleFragmentFragmentDoc}`;
export type GetOneRoleProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneRoleQuery, GetOneRoleQueryVariables>
    } & TChildProps;
export function withGetOneRole<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneRoleQuery,
  GetOneRoleQueryVariables,
  GetOneRoleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneRoleQuery, GetOneRoleQueryVariables, GetOneRoleProps<TChildProps, TDataName>>(GetOneRoleDocument, {
      alias: 'getOneRole',
      ...operationOptions
    });
};

/**
 * __useGetOneRoleQuery__
 *
 * To run a query within a React component, call `useGetOneRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneRoleQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneRoleQuery(baseOptions: Apollo.QueryHookOptions<GetOneRoleQuery, GetOneRoleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneRoleQuery, GetOneRoleQueryVariables>(GetOneRoleDocument, options);
      }
export function useGetOneRoleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneRoleQuery, GetOneRoleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneRoleQuery, GetOneRoleQueryVariables>(GetOneRoleDocument, options);
        }
export type GetOneRoleQueryHookResult = ReturnType<typeof useGetOneRoleQuery>;
export type GetOneRoleLazyQueryHookResult = ReturnType<typeof useGetOneRoleLazyQuery>;
export type GetOneRoleQueryResult = Apollo.QueryResult<GetOneRoleQuery, GetOneRoleQueryVariables>;
export const GetAvailablePermitsDocument = gql`
    query getAvailablePermits {
  getAvailablePermits {
    ...AvailablePermitsFragment
  }
}
    ${AvailablePermitsFragmentFragmentDoc}`;
export type GetAvailablePermitsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAvailablePermitsQuery, GetAvailablePermitsQueryVariables>
    } & TChildProps;
export function withGetAvailablePermits<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAvailablePermitsQuery,
  GetAvailablePermitsQueryVariables,
  GetAvailablePermitsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAvailablePermitsQuery, GetAvailablePermitsQueryVariables, GetAvailablePermitsProps<TChildProps, TDataName>>(GetAvailablePermitsDocument, {
      alias: 'getAvailablePermits',
      ...operationOptions
    });
};

/**
 * __useGetAvailablePermitsQuery__
 *
 * To run a query within a React component, call `useGetAvailablePermitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAvailablePermitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAvailablePermitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAvailablePermitsQuery(baseOptions?: Apollo.QueryHookOptions<GetAvailablePermitsQuery, GetAvailablePermitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAvailablePermitsQuery, GetAvailablePermitsQueryVariables>(GetAvailablePermitsDocument, options);
      }
export function useGetAvailablePermitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAvailablePermitsQuery, GetAvailablePermitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAvailablePermitsQuery, GetAvailablePermitsQueryVariables>(GetAvailablePermitsDocument, options);
        }
export type GetAvailablePermitsQueryHookResult = ReturnType<typeof useGetAvailablePermitsQuery>;
export type GetAvailablePermitsLazyQueryHookResult = ReturnType<typeof useGetAvailablePermitsLazyQuery>;
export type GetAvailablePermitsQueryResult = Apollo.QueryResult<GetAvailablePermitsQuery, GetAvailablePermitsQueryVariables>;
export type GetAllRoleQueryVariables = Types.Exact<{
  input: Types.GetAllRoleInput;
}>;


export type GetAllRoleQuery = { getAllRole: Array<RoleFragmentFragment> };

export type GetPaginatedRoleQueryVariables = Types.Exact<{
  input: Types.GetPaginatedRoleInput;
}>;


export type GetPaginatedRoleQuery = { getPaginatedRole?: Types.Maybe<(
    Pick<Types.PaginatedRoleResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<RoleFragmentFragment> }
  )> };

export type GetOneRoleQueryVariables = Types.Exact<{
  input: Types.GetOneRoleInput;
}>;


export type GetOneRoleQuery = { getOneRole?: Types.Maybe<RoleFragmentFragment> };

export type GetAvailablePermitsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAvailablePermitsQuery = { getAvailablePermits: Array<AvailablePermitsFragmentFragment> };
