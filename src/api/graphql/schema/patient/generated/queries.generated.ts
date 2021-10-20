import * as Types from '../../types';

import { PatientFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { PatientFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllPatientDocument = gql`
    query getAllPatient($input: GetAllPatientInput!) {
  getAllPatient(input: $input) {
    ...PatientFragment
  }
}
    ${PatientFragmentFragmentDoc}`;
export type GetAllPatientProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllPatientQuery, GetAllPatientQueryVariables>
    } & TChildProps;
export function withGetAllPatient<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllPatientQuery,
  GetAllPatientQueryVariables,
  GetAllPatientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllPatientQuery, GetAllPatientQueryVariables, GetAllPatientProps<TChildProps, TDataName>>(GetAllPatientDocument, {
      alias: 'getAllPatient',
      ...operationOptions
    });
};

/**
 * __useGetAllPatientQuery__
 *
 * To run a query within a React component, call `useGetAllPatientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPatientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPatientQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllPatientQuery(baseOptions: Apollo.QueryHookOptions<GetAllPatientQuery, GetAllPatientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPatientQuery, GetAllPatientQueryVariables>(GetAllPatientDocument, options);
      }
export function useGetAllPatientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPatientQuery, GetAllPatientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPatientQuery, GetAllPatientQueryVariables>(GetAllPatientDocument, options);
        }
export type GetAllPatientQueryHookResult = ReturnType<typeof useGetAllPatientQuery>;
export type GetAllPatientLazyQueryHookResult = ReturnType<typeof useGetAllPatientLazyQuery>;
export type GetAllPatientQueryResult = Apollo.QueryResult<GetAllPatientQuery, GetAllPatientQueryVariables>;
export const GetPaginatedPatientDocument = gql`
    query getPaginatedPatient($input: GetPaginatedPatientInput!) {
  getPaginatedPatient(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...PatientFragment
    }
  }
}
    ${PatientFragmentFragmentDoc}`;
export type GetPaginatedPatientProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedPatientQuery, GetPaginatedPatientQueryVariables>
    } & TChildProps;
export function withGetPaginatedPatient<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedPatientQuery,
  GetPaginatedPatientQueryVariables,
  GetPaginatedPatientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedPatientQuery, GetPaginatedPatientQueryVariables, GetPaginatedPatientProps<TChildProps, TDataName>>(GetPaginatedPatientDocument, {
      alias: 'getPaginatedPatient',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedPatientQuery__
 *
 * To run a query within a React component, call `useGetPaginatedPatientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedPatientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedPatientQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedPatientQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedPatientQuery, GetPaginatedPatientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedPatientQuery, GetPaginatedPatientQueryVariables>(GetPaginatedPatientDocument, options);
      }
export function useGetPaginatedPatientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedPatientQuery, GetPaginatedPatientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedPatientQuery, GetPaginatedPatientQueryVariables>(GetPaginatedPatientDocument, options);
        }
export type GetPaginatedPatientQueryHookResult = ReturnType<typeof useGetPaginatedPatientQuery>;
export type GetPaginatedPatientLazyQueryHookResult = ReturnType<typeof useGetPaginatedPatientLazyQuery>;
export type GetPaginatedPatientQueryResult = Apollo.QueryResult<GetPaginatedPatientQuery, GetPaginatedPatientQueryVariables>;
export const GetOnePatientDocument = gql`
    query getOnePatient($input: GetOnePatientInput!) {
  getOnePatient(input: $input) {
    ...PatientFragment
  }
}
    ${PatientFragmentFragmentDoc}`;
export type GetOnePatientProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOnePatientQuery, GetOnePatientQueryVariables>
    } & TChildProps;
export function withGetOnePatient<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOnePatientQuery,
  GetOnePatientQueryVariables,
  GetOnePatientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOnePatientQuery, GetOnePatientQueryVariables, GetOnePatientProps<TChildProps, TDataName>>(GetOnePatientDocument, {
      alias: 'getOnePatient',
      ...operationOptions
    });
};

/**
 * __useGetOnePatientQuery__
 *
 * To run a query within a React component, call `useGetOnePatientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOnePatientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOnePatientQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOnePatientQuery(baseOptions: Apollo.QueryHookOptions<GetOnePatientQuery, GetOnePatientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOnePatientQuery, GetOnePatientQueryVariables>(GetOnePatientDocument, options);
      }
export function useGetOnePatientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOnePatientQuery, GetOnePatientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOnePatientQuery, GetOnePatientQueryVariables>(GetOnePatientDocument, options);
        }
export type GetOnePatientQueryHookResult = ReturnType<typeof useGetOnePatientQuery>;
export type GetOnePatientLazyQueryHookResult = ReturnType<typeof useGetOnePatientLazyQuery>;
export type GetOnePatientQueryResult = Apollo.QueryResult<GetOnePatientQuery, GetOnePatientQueryVariables>;
export type GetAllPatientQueryVariables = Types.Exact<{
  input: Types.GetAllPatientInput;
}>;


export type GetAllPatientQuery = { getAllPatient: Array<PatientFragmentFragment> };

export type GetPaginatedPatientQueryVariables = Types.Exact<{
  input: Types.GetPaginatedPatientInput;
}>;


export type GetPaginatedPatientQuery = { getPaginatedPatient?: Types.Maybe<(
    Pick<Types.PaginatedPatientResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<PatientFragmentFragment> }
  )> };

export type GetOnePatientQueryVariables = Types.Exact<{
  input: Types.GetOnePatientInput;
}>;


export type GetOnePatientQuery = { getOnePatient?: Types.Maybe<PatientFragmentFragment> };
