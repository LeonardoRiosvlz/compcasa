import * as Types from '../../types';

import { UserFragmentFragment, ProfileFragmentFragment, AuthUserFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { UserFragmentFragmentDoc, ProfileFragmentFragmentDoc, AuthUserFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetPaginatedUserDocument = gql`
    query getPaginatedUser($input: GetPaginatedUsersInput!) {
  getPaginatedUser(input: $input) {
    currentPage
    limit
    totalPages
    total
    items {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;
export type GetPaginatedUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedUserQuery, GetPaginatedUserQueryVariables>
    } & TChildProps;
export function withGetPaginatedUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedUserQuery,
  GetPaginatedUserQueryVariables,
  GetPaginatedUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedUserQuery, GetPaginatedUserQueryVariables, GetPaginatedUserProps<TChildProps, TDataName>>(GetPaginatedUserDocument, {
      alias: 'getPaginatedUser',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedUserQuery__
 *
 * To run a query within a React component, call `useGetPaginatedUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedUserQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedUserQuery, GetPaginatedUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedUserQuery, GetPaginatedUserQueryVariables>(GetPaginatedUserDocument, options);
      }
export function useGetPaginatedUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedUserQuery, GetPaginatedUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedUserQuery, GetPaginatedUserQueryVariables>(GetPaginatedUserDocument, options);
        }
export type GetPaginatedUserQueryHookResult = ReturnType<typeof useGetPaginatedUserQuery>;
export type GetPaginatedUserLazyQueryHookResult = ReturnType<typeof useGetPaginatedUserLazyQuery>;
export type GetPaginatedUserQueryResult = Apollo.QueryResult<GetPaginatedUserQuery, GetPaginatedUserQueryVariables>;
export const GetAllUsersDocument = gql`
    query getAllUsers($input: GetAllUsersInput!) {
  getAllUsers(input: $input) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type GetAllUsersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllUsersQuery, GetAllUsersQueryVariables>
    } & TChildProps;
export function withGetAllUsers<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllUsersQuery,
  GetAllUsersQueryVariables,
  GetAllUsersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllUsersQuery, GetAllUsersQueryVariables, GetAllUsersProps<TChildProps, TDataName>>(GetAllUsersDocument, {
      alias: 'getAllUsers',
      ...operationOptions
    });
};

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetOneUserDocument = gql`
    query getOneUser($input: GetOneUserInput!) {
  getOneUser(input: $input) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type GetOneUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneUserQuery, GetOneUserQueryVariables>
    } & TChildProps;
export function withGetOneUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneUserQuery,
  GetOneUserQueryVariables,
  GetOneUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneUserQuery, GetOneUserQueryVariables, GetOneUserProps<TChildProps, TDataName>>(GetOneUserDocument, {
      alias: 'getOneUser',
      ...operationOptions
    });
};

/**
 * __useGetOneUserQuery__
 *
 * To run a query within a React component, call `useGetOneUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneUserQuery(baseOptions: Apollo.QueryHookOptions<GetOneUserQuery, GetOneUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneUserQuery, GetOneUserQueryVariables>(GetOneUserDocument, options);
      }
export function useGetOneUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneUserQuery, GetOneUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneUserQuery, GetOneUserQueryVariables>(GetOneUserDocument, options);
        }
export type GetOneUserQueryHookResult = ReturnType<typeof useGetOneUserQuery>;
export type GetOneUserLazyQueryHookResult = ReturnType<typeof useGetOneUserLazyQuery>;
export type GetOneUserQueryResult = Apollo.QueryResult<GetOneUserQuery, GetOneUserQueryVariables>;
export const MyInfoDocument = gql`
    query myInfo {
  myInfo {
    ...AuthUserFragment
  }
}
    ${AuthUserFragmentFragmentDoc}`;
export type MyInfoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<MyInfoQuery, MyInfoQueryVariables>
    } & TChildProps;
export function withMyInfo<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MyInfoQuery,
  MyInfoQueryVariables,
  MyInfoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, MyInfoQuery, MyInfoQueryVariables, MyInfoProps<TChildProps, TDataName>>(MyInfoDocument, {
      alias: 'myInfo',
      ...operationOptions
    });
};

/**
 * __useMyInfoQuery__
 *
 * To run a query within a React component, call `useMyInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyInfoQuery(baseOptions?: Apollo.QueryHookOptions<MyInfoQuery, MyInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyInfoQuery, MyInfoQueryVariables>(MyInfoDocument, options);
      }
export function useMyInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyInfoQuery, MyInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyInfoQuery, MyInfoQueryVariables>(MyInfoDocument, options);
        }
export type MyInfoQueryHookResult = ReturnType<typeof useMyInfoQuery>;
export type MyInfoLazyQueryHookResult = ReturnType<typeof useMyInfoLazyQuery>;
export type MyInfoQueryResult = Apollo.QueryResult<MyInfoQuery, MyInfoQueryVariables>;
export const GetMyProfileDocument = gql`
    query getMyProfile {
  getMyProfile {
    ...ProfileFragment
  }
}
    ${ProfileFragmentFragmentDoc}`;
export type GetMyProfileProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetMyProfileQuery, GetMyProfileQueryVariables>
    } & TChildProps;
export function withGetMyProfile<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetMyProfileQuery,
  GetMyProfileQueryVariables,
  GetMyProfileProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetMyProfileQuery, GetMyProfileQueryVariables, GetMyProfileProps<TChildProps, TDataName>>(GetMyProfileDocument, {
      alias: 'getMyProfile',
      ...operationOptions
    });
};

/**
 * __useGetMyProfileQuery__
 *
 * To run a query within a React component, call `useGetMyProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetMyProfileQuery, GetMyProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyProfileQuery, GetMyProfileQueryVariables>(GetMyProfileDocument, options);
      }
export function useGetMyProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyProfileQuery, GetMyProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyProfileQuery, GetMyProfileQueryVariables>(GetMyProfileDocument, options);
        }
export type GetMyProfileQueryHookResult = ReturnType<typeof useGetMyProfileQuery>;
export type GetMyProfileLazyQueryHookResult = ReturnType<typeof useGetMyProfileLazyQuery>;
export type GetMyProfileQueryResult = Apollo.QueryResult<GetMyProfileQuery, GetMyProfileQueryVariables>;
export const GetUserProfileDocument = gql`
    query getUserProfile($userId: ID!) {
  getUserProfile(userId: $userId) {
    ...ProfileFragment
  }
}
    ${ProfileFragmentFragmentDoc}`;
export type GetUserProfileProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUserProfileQuery, GetUserProfileQueryVariables>
    } & TChildProps;
export function withGetUserProfile<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserProfileQuery,
  GetUserProfileQueryVariables,
  GetUserProfileProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserProfileQuery, GetUserProfileQueryVariables, GetUserProfileProps<TChildProps, TDataName>>(GetUserProfileDocument, {
      alias: 'getUserProfile',
      ...operationOptions
    });
};

/**
 * __useGetUserProfileQuery__
 *
 * To run a query within a React component, call `useGetUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProfileQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserProfileQuery(baseOptions: Apollo.QueryHookOptions<GetUserProfileQuery, GetUserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(GetUserProfileDocument, options);
      }
export function useGetUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserProfileQuery, GetUserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(GetUserProfileDocument, options);
        }
export type GetUserProfileQueryHookResult = ReturnType<typeof useGetUserProfileQuery>;
export type GetUserProfileLazyQueryHookResult = ReturnType<typeof useGetUserProfileLazyQuery>;
export type GetUserProfileQueryResult = Apollo.QueryResult<GetUserProfileQuery, GetUserProfileQueryVariables>;
export type GetPaginatedUserQueryVariables = Types.Exact<{
  input: Types.GetPaginatedUsersInput;
}>;


export type GetPaginatedUserQuery = { getPaginatedUser: (
    Pick<Types.PaginatedUsers, 'currentPage' | 'limit' | 'totalPages' | 'total'>
    & { items: Array<UserFragmentFragment> }
  ) };

export type GetAllUsersQueryVariables = Types.Exact<{
  input: Types.GetAllUsersInput;
}>;


export type GetAllUsersQuery = { getAllUsers: Array<UserFragmentFragment> };

export type GetOneUserQueryVariables = Types.Exact<{
  input: Types.GetOneUserInput;
}>;


export type GetOneUserQuery = { getOneUser: UserFragmentFragment };

export type MyInfoQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MyInfoQuery = { myInfo?: Types.Maybe<AuthUserFragmentFragment> };

export type GetMyProfileQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetMyProfileQuery = { getMyProfile?: Types.Maybe<ProfileFragmentFragment> };

export type GetUserProfileQueryVariables = Types.Exact<{
  userId: Types.Scalars['ID'];
}>;


export type GetUserProfileQuery = { getUserProfile?: Types.Maybe<ProfileFragmentFragment> };
