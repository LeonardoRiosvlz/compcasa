import * as Types from '../../types';

import { MedicalSpecialtiesFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { MedicalSpecialtiesFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllMedicalSpecialtiesDocument = gql`
    query getAllMedicalSpecialties($input: GetAllMedicalSpecialtiesInput!) {
  getAllMedicalSpecialties(input: $input) {
    ...MedicalSpecialtiesFragment
  }
}
    ${MedicalSpecialtiesFragmentFragmentDoc}`;
export type GetAllMedicalSpecialtiesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllMedicalSpecialtiesQuery, GetAllMedicalSpecialtiesQueryVariables>
    } & TChildProps;
export function withGetAllMedicalSpecialties<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllMedicalSpecialtiesQuery,
  GetAllMedicalSpecialtiesQueryVariables,
  GetAllMedicalSpecialtiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllMedicalSpecialtiesQuery, GetAllMedicalSpecialtiesQueryVariables, GetAllMedicalSpecialtiesProps<TChildProps, TDataName>>(GetAllMedicalSpecialtiesDocument, {
      alias: 'getAllMedicalSpecialties',
      ...operationOptions
    });
};

/**
 * __useGetAllMedicalSpecialtiesQuery__
 *
 * To run a query within a React component, call `useGetAllMedicalSpecialtiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMedicalSpecialtiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMedicalSpecialtiesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllMedicalSpecialtiesQuery(baseOptions: Apollo.QueryHookOptions<GetAllMedicalSpecialtiesQuery, GetAllMedicalSpecialtiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMedicalSpecialtiesQuery, GetAllMedicalSpecialtiesQueryVariables>(GetAllMedicalSpecialtiesDocument, options);
      }
export function useGetAllMedicalSpecialtiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMedicalSpecialtiesQuery, GetAllMedicalSpecialtiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMedicalSpecialtiesQuery, GetAllMedicalSpecialtiesQueryVariables>(GetAllMedicalSpecialtiesDocument, options);
        }
export type GetAllMedicalSpecialtiesQueryHookResult = ReturnType<typeof useGetAllMedicalSpecialtiesQuery>;
export type GetAllMedicalSpecialtiesLazyQueryHookResult = ReturnType<typeof useGetAllMedicalSpecialtiesLazyQuery>;
export type GetAllMedicalSpecialtiesQueryResult = Apollo.QueryResult<GetAllMedicalSpecialtiesQuery, GetAllMedicalSpecialtiesQueryVariables>;
export const GetPaginatedMedicalSpecialtiesDocument = gql`
    query getPaginatedMedicalSpecialties($input: GetPaginatedMedicalSpecialtiesInput!) {
  getPaginatedMedicalSpecialties(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...MedicalSpecialtiesFragment
    }
  }
}
    ${MedicalSpecialtiesFragmentFragmentDoc}`;
export type GetPaginatedMedicalSpecialtiesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedMedicalSpecialtiesQuery, GetPaginatedMedicalSpecialtiesQueryVariables>
    } & TChildProps;
export function withGetPaginatedMedicalSpecialties<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedMedicalSpecialtiesQuery,
  GetPaginatedMedicalSpecialtiesQueryVariables,
  GetPaginatedMedicalSpecialtiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedMedicalSpecialtiesQuery, GetPaginatedMedicalSpecialtiesQueryVariables, GetPaginatedMedicalSpecialtiesProps<TChildProps, TDataName>>(GetPaginatedMedicalSpecialtiesDocument, {
      alias: 'getPaginatedMedicalSpecialties',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedMedicalSpecialtiesQuery__
 *
 * To run a query within a React component, call `useGetPaginatedMedicalSpecialtiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedMedicalSpecialtiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedMedicalSpecialtiesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedMedicalSpecialtiesQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedMedicalSpecialtiesQuery, GetPaginatedMedicalSpecialtiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedMedicalSpecialtiesQuery, GetPaginatedMedicalSpecialtiesQueryVariables>(GetPaginatedMedicalSpecialtiesDocument, options);
      }
export function useGetPaginatedMedicalSpecialtiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedMedicalSpecialtiesQuery, GetPaginatedMedicalSpecialtiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedMedicalSpecialtiesQuery, GetPaginatedMedicalSpecialtiesQueryVariables>(GetPaginatedMedicalSpecialtiesDocument, options);
        }
export type GetPaginatedMedicalSpecialtiesQueryHookResult = ReturnType<typeof useGetPaginatedMedicalSpecialtiesQuery>;
export type GetPaginatedMedicalSpecialtiesLazyQueryHookResult = ReturnType<typeof useGetPaginatedMedicalSpecialtiesLazyQuery>;
export type GetPaginatedMedicalSpecialtiesQueryResult = Apollo.QueryResult<GetPaginatedMedicalSpecialtiesQuery, GetPaginatedMedicalSpecialtiesQueryVariables>;
export const GetOneMedicalSpecialtiesDocument = gql`
    query getOneMedicalSpecialties($input: GetOneMedicalSpecialtiesInput!) {
  getOneMedicalSpecialties(input: $input) {
    ...MedicalSpecialtiesFragment
  }
}
    ${MedicalSpecialtiesFragmentFragmentDoc}`;
export type GetOneMedicalSpecialtiesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneMedicalSpecialtiesQuery, GetOneMedicalSpecialtiesQueryVariables>
    } & TChildProps;
export function withGetOneMedicalSpecialties<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneMedicalSpecialtiesQuery,
  GetOneMedicalSpecialtiesQueryVariables,
  GetOneMedicalSpecialtiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneMedicalSpecialtiesQuery, GetOneMedicalSpecialtiesQueryVariables, GetOneMedicalSpecialtiesProps<TChildProps, TDataName>>(GetOneMedicalSpecialtiesDocument, {
      alias: 'getOneMedicalSpecialties',
      ...operationOptions
    });
};

/**
 * __useGetOneMedicalSpecialtiesQuery__
 *
 * To run a query within a React component, call `useGetOneMedicalSpecialtiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneMedicalSpecialtiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneMedicalSpecialtiesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneMedicalSpecialtiesQuery(baseOptions: Apollo.QueryHookOptions<GetOneMedicalSpecialtiesQuery, GetOneMedicalSpecialtiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneMedicalSpecialtiesQuery, GetOneMedicalSpecialtiesQueryVariables>(GetOneMedicalSpecialtiesDocument, options);
      }
export function useGetOneMedicalSpecialtiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneMedicalSpecialtiesQuery, GetOneMedicalSpecialtiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneMedicalSpecialtiesQuery, GetOneMedicalSpecialtiesQueryVariables>(GetOneMedicalSpecialtiesDocument, options);
        }
export type GetOneMedicalSpecialtiesQueryHookResult = ReturnType<typeof useGetOneMedicalSpecialtiesQuery>;
export type GetOneMedicalSpecialtiesLazyQueryHookResult = ReturnType<typeof useGetOneMedicalSpecialtiesLazyQuery>;
export type GetOneMedicalSpecialtiesQueryResult = Apollo.QueryResult<GetOneMedicalSpecialtiesQuery, GetOneMedicalSpecialtiesQueryVariables>;
export type GetAllMedicalSpecialtiesQueryVariables = Types.Exact<{
  input: Types.GetAllMedicalSpecialtiesInput;
}>;


export type GetAllMedicalSpecialtiesQuery = { getAllMedicalSpecialties: Array<MedicalSpecialtiesFragmentFragment> };

export type GetPaginatedMedicalSpecialtiesQueryVariables = Types.Exact<{
  input: Types.GetPaginatedMedicalSpecialtiesInput;
}>;


export type GetPaginatedMedicalSpecialtiesQuery = { getPaginatedMedicalSpecialties?: Types.Maybe<(
    Pick<Types.PaginatedMedicalSpecialtiesResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<MedicalSpecialtiesFragmentFragment> }
  )> };

export type GetOneMedicalSpecialtiesQueryVariables = Types.Exact<{
  input: Types.GetOneMedicalSpecialtiesInput;
}>;


export type GetOneMedicalSpecialtiesQuery = { getOneMedicalSpecialties?: Types.Maybe<MedicalSpecialtiesFragmentFragment> };
