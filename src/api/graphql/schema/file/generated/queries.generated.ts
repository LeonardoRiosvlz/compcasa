import * as Types from '../../types';

import { FileFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { FileFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetSignedUrlDocument = gql`
    query getSignedUrl($input: GetUploadSignedUrlInput!) {
  getWriteSignedUrl(input: $input) {
    key
    url
  }
}
    `;
export type GetSignedUrlProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetSignedUrlQuery, GetSignedUrlQueryVariables>
    } & TChildProps;
export function withGetSignedUrl<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetSignedUrlQuery,
  GetSignedUrlQueryVariables,
  GetSignedUrlProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetSignedUrlQuery, GetSignedUrlQueryVariables, GetSignedUrlProps<TChildProps, TDataName>>(GetSignedUrlDocument, {
      alias: 'getSignedUrl',
      ...operationOptions
    });
};

/**
 * __useGetSignedUrlQuery__
 *
 * To run a query within a React component, call `useGetSignedUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSignedUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSignedUrlQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetSignedUrlQuery(baseOptions: Apollo.QueryHookOptions<GetSignedUrlQuery, GetSignedUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSignedUrlQuery, GetSignedUrlQueryVariables>(GetSignedUrlDocument, options);
      }
export function useGetSignedUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSignedUrlQuery, GetSignedUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSignedUrlQuery, GetSignedUrlQueryVariables>(GetSignedUrlDocument, options);
        }
export type GetSignedUrlQueryHookResult = ReturnType<typeof useGetSignedUrlQuery>;
export type GetSignedUrlLazyQueryHookResult = ReturnType<typeof useGetSignedUrlLazyQuery>;
export type GetSignedUrlQueryResult = Apollo.QueryResult<GetSignedUrlQuery, GetSignedUrlQueryVariables>;
export const GetPaginatedFilesDocument = gql`
    query getPaginatedFiles($input: GetPaginatedFilesInput!) {
  getPaginatedFiles(input: $input) {
    total
    totalPages
    limit
    currentPage
    items {
      ...FileFragment
    }
  }
}
    ${FileFragmentFragmentDoc}`;
export type GetPaginatedFilesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedFilesQuery, GetPaginatedFilesQueryVariables>
    } & TChildProps;
export function withGetPaginatedFiles<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedFilesQuery,
  GetPaginatedFilesQueryVariables,
  GetPaginatedFilesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedFilesQuery, GetPaginatedFilesQueryVariables, GetPaginatedFilesProps<TChildProps, TDataName>>(GetPaginatedFilesDocument, {
      alias: 'getPaginatedFiles',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedFilesQuery__
 *
 * To run a query within a React component, call `useGetPaginatedFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedFilesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedFilesQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedFilesQuery, GetPaginatedFilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedFilesQuery, GetPaginatedFilesQueryVariables>(GetPaginatedFilesDocument, options);
      }
export function useGetPaginatedFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedFilesQuery, GetPaginatedFilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedFilesQuery, GetPaginatedFilesQueryVariables>(GetPaginatedFilesDocument, options);
        }
export type GetPaginatedFilesQueryHookResult = ReturnType<typeof useGetPaginatedFilesQuery>;
export type GetPaginatedFilesLazyQueryHookResult = ReturnType<typeof useGetPaginatedFilesLazyQuery>;
export type GetPaginatedFilesQueryResult = Apollo.QueryResult<GetPaginatedFilesQuery, GetPaginatedFilesQueryVariables>;
export const GetOneFilesDocument = gql`
    query getOneFiles($input: GetOneFilesInput!) {
  getOneFiles(input: $input) {
    ...FileFragment
  }
}
    ${FileFragmentFragmentDoc}`;
export type GetOneFilesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneFilesQuery, GetOneFilesQueryVariables>
    } & TChildProps;
export function withGetOneFiles<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneFilesQuery,
  GetOneFilesQueryVariables,
  GetOneFilesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneFilesQuery, GetOneFilesQueryVariables, GetOneFilesProps<TChildProps, TDataName>>(GetOneFilesDocument, {
      alias: 'getOneFiles',
      ...operationOptions
    });
};

/**
 * __useGetOneFilesQuery__
 *
 * To run a query within a React component, call `useGetOneFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneFilesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneFilesQuery(baseOptions: Apollo.QueryHookOptions<GetOneFilesQuery, GetOneFilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneFilesQuery, GetOneFilesQueryVariables>(GetOneFilesDocument, options);
      }
export function useGetOneFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneFilesQuery, GetOneFilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneFilesQuery, GetOneFilesQueryVariables>(GetOneFilesDocument, options);
        }
export type GetOneFilesQueryHookResult = ReturnType<typeof useGetOneFilesQuery>;
export type GetOneFilesLazyQueryHookResult = ReturnType<typeof useGetOneFilesLazyQuery>;
export type GetOneFilesQueryResult = Apollo.QueryResult<GetOneFilesQuery, GetOneFilesQueryVariables>;
export type GetSignedUrlQueryVariables = Types.Exact<{
  input: Types.GetUploadSignedUrlInput;
}>;


export type GetSignedUrlQuery = { getWriteSignedUrl: Pick<Types.CloudFileIdResponse, 'key' | 'url'> };

export type GetPaginatedFilesQueryVariables = Types.Exact<{
  input: Types.GetPaginatedFilesInput;
}>;


export type GetPaginatedFilesQuery = { getPaginatedFiles?: Types.Maybe<(
    Pick<Types.PaginatedFilesResponse, 'total' | 'totalPages' | 'limit' | 'currentPage'>
    & { items: Array<FileFragmentFragment> }
  )> };

export type GetOneFilesQueryVariables = Types.Exact<{
  input: Types.GetOneFilesInput;
}>;


export type GetOneFilesQuery = { getOneFiles?: Types.Maybe<FileFragmentFragment> };
