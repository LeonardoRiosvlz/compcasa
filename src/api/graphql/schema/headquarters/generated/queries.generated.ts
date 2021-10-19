import * as Types from '../../types';

import { HeadquartersFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { HeadquartersFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllHeadquartersDocument = gql`
    query getAllHeadquarters($input: GetAllHeadquartersInput!) {
  getAllHeadquarters(input: $input) {
    ...HeadquartersFragment
  }
}
    ${HeadquartersFragmentFragmentDoc}`;
export type GetAllHeadquartersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllHeadquartersQuery, GetAllHeadquartersQueryVariables>
    } & TChildProps;
export function withGetAllHeadquarters<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllHeadquartersQuery,
  GetAllHeadquartersQueryVariables,
  GetAllHeadquartersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllHeadquartersQuery, GetAllHeadquartersQueryVariables, GetAllHeadquartersProps<TChildProps, TDataName>>(GetAllHeadquartersDocument, {
      alias: 'getAllHeadquarters',
      ...operationOptions
    });
};

/**
 * __useGetAllHeadquartersQuery__
 *
 * To run a query within a React component, call `useGetAllHeadquartersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllHeadquartersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllHeadquartersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllHeadquartersQuery(baseOptions: Apollo.QueryHookOptions<GetAllHeadquartersQuery, GetAllHeadquartersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllHeadquartersQuery, GetAllHeadquartersQueryVariables>(GetAllHeadquartersDocument, options);
      }
export function useGetAllHeadquartersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllHeadquartersQuery, GetAllHeadquartersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllHeadquartersQuery, GetAllHeadquartersQueryVariables>(GetAllHeadquartersDocument, options);
        }
export type GetAllHeadquartersQueryHookResult = ReturnType<typeof useGetAllHeadquartersQuery>;
export type GetAllHeadquartersLazyQueryHookResult = ReturnType<typeof useGetAllHeadquartersLazyQuery>;
export type GetAllHeadquartersQueryResult = Apollo.QueryResult<GetAllHeadquartersQuery, GetAllHeadquartersQueryVariables>;
export const GetPaginatedHeadquartersDocument = gql`
    query getPaginatedHeadquarters($input: GetPaginatedHeadquartersInput!) {
  getPaginatedHeadquarters(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...HeadquartersFragment
    }
  }
}
    ${HeadquartersFragmentFragmentDoc}`;
export type GetPaginatedHeadquartersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedHeadquartersQuery, GetPaginatedHeadquartersQueryVariables>
    } & TChildProps;
export function withGetPaginatedHeadquarters<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedHeadquartersQuery,
  GetPaginatedHeadquartersQueryVariables,
  GetPaginatedHeadquartersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedHeadquartersQuery, GetPaginatedHeadquartersQueryVariables, GetPaginatedHeadquartersProps<TChildProps, TDataName>>(GetPaginatedHeadquartersDocument, {
      alias: 'getPaginatedHeadquarters',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedHeadquartersQuery__
 *
 * To run a query within a React component, call `useGetPaginatedHeadquartersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedHeadquartersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedHeadquartersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedHeadquartersQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedHeadquartersQuery, GetPaginatedHeadquartersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedHeadquartersQuery, GetPaginatedHeadquartersQueryVariables>(GetPaginatedHeadquartersDocument, options);
      }
export function useGetPaginatedHeadquartersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedHeadquartersQuery, GetPaginatedHeadquartersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedHeadquartersQuery, GetPaginatedHeadquartersQueryVariables>(GetPaginatedHeadquartersDocument, options);
        }
export type GetPaginatedHeadquartersQueryHookResult = ReturnType<typeof useGetPaginatedHeadquartersQuery>;
export type GetPaginatedHeadquartersLazyQueryHookResult = ReturnType<typeof useGetPaginatedHeadquartersLazyQuery>;
export type GetPaginatedHeadquartersQueryResult = Apollo.QueryResult<GetPaginatedHeadquartersQuery, GetPaginatedHeadquartersQueryVariables>;
export const GetOneHeadquartersDocument = gql`
    query getOneHeadquarters($input: GetOneHeadquartersInput!) {
  getOneHeadquarters(input: $input) {
    ...HeadquartersFragment
  }
}
    ${HeadquartersFragmentFragmentDoc}`;
export type GetOneHeadquartersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneHeadquartersQuery, GetOneHeadquartersQueryVariables>
    } & TChildProps;
export function withGetOneHeadquarters<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneHeadquartersQuery,
  GetOneHeadquartersQueryVariables,
  GetOneHeadquartersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneHeadquartersQuery, GetOneHeadquartersQueryVariables, GetOneHeadquartersProps<TChildProps, TDataName>>(GetOneHeadquartersDocument, {
      alias: 'getOneHeadquarters',
      ...operationOptions
    });
};

/**
 * __useGetOneHeadquartersQuery__
 *
 * To run a query within a React component, call `useGetOneHeadquartersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneHeadquartersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneHeadquartersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneHeadquartersQuery(baseOptions: Apollo.QueryHookOptions<GetOneHeadquartersQuery, GetOneHeadquartersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneHeadquartersQuery, GetOneHeadquartersQueryVariables>(GetOneHeadquartersDocument, options);
      }
export function useGetOneHeadquartersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneHeadquartersQuery, GetOneHeadquartersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneHeadquartersQuery, GetOneHeadquartersQueryVariables>(GetOneHeadquartersDocument, options);
        }
export type GetOneHeadquartersQueryHookResult = ReturnType<typeof useGetOneHeadquartersQuery>;
export type GetOneHeadquartersLazyQueryHookResult = ReturnType<typeof useGetOneHeadquartersLazyQuery>;
export type GetOneHeadquartersQueryResult = Apollo.QueryResult<GetOneHeadquartersQuery, GetOneHeadquartersQueryVariables>;
export type GetAllHeadquartersQueryVariables = Types.Exact<{
  input: Types.GetAllHeadquartersInput;
}>;


export type GetAllHeadquartersQuery = { getAllHeadquarters: Array<HeadquartersFragmentFragment> };

export type GetPaginatedHeadquartersQueryVariables = Types.Exact<{
  input: Types.GetPaginatedHeadquartersInput;
}>;


export type GetPaginatedHeadquartersQuery = { getPaginatedHeadquarters?: Types.Maybe<(
    Pick<Types.PaginatedHeadquartersResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<HeadquartersFragmentFragment> }
  )> };

export type GetOneHeadquartersQueryVariables = Types.Exact<{
  input: Types.GetOneHeadquartersInput;
}>;


export type GetOneHeadquartersQuery = { getOneHeadquarters?: Types.Maybe<HeadquartersFragmentFragment> };
