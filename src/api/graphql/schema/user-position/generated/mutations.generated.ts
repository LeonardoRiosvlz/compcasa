import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateUserPositionDocument = gql`
    mutation createUserPosition($input: CreateUserPositionInput!) {
  createUserPosition(input: $input)
}
    `;
export type CreateUserPositionMutationFn = Apollo.MutationFunction<CreateUserPositionMutation, CreateUserPositionMutationVariables>;
export type CreateUserPositionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateUserPositionMutation, CreateUserPositionMutationVariables>
    } & TChildProps;
export function withCreateUserPosition<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUserPositionMutation,
  CreateUserPositionMutationVariables,
  CreateUserPositionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUserPositionMutation, CreateUserPositionMutationVariables, CreateUserPositionProps<TChildProps, TDataName>>(CreateUserPositionDocument, {
      alias: 'createUserPosition',
      ...operationOptions
    });
};

/**
 * __useCreateUserPositionMutation__
 *
 * To run a mutation, you first call `useCreateUserPositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserPositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserPositionMutation, { data, loading, error }] = useCreateUserPositionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserPositionMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserPositionMutation, CreateUserPositionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserPositionMutation, CreateUserPositionMutationVariables>(CreateUserPositionDocument, options);
      }
export type CreateUserPositionMutationHookResult = ReturnType<typeof useCreateUserPositionMutation>;
export type CreateUserPositionMutationResult = Apollo.MutationResult<CreateUserPositionMutation>;
export type CreateUserPositionMutationOptions = Apollo.BaseMutationOptions<CreateUserPositionMutation, CreateUserPositionMutationVariables>;
export const UpdateUserPositionDocument = gql`
    mutation updateUserPosition($input: UpdateUserPositionInput!) {
  updateUserPosition(input: $input)
}
    `;
export type UpdateUserPositionMutationFn = Apollo.MutationFunction<UpdateUserPositionMutation, UpdateUserPositionMutationVariables>;
export type UpdateUserPositionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateUserPositionMutation, UpdateUserPositionMutationVariables>
    } & TChildProps;
export function withUpdateUserPosition<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateUserPositionMutation,
  UpdateUserPositionMutationVariables,
  UpdateUserPositionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateUserPositionMutation, UpdateUserPositionMutationVariables, UpdateUserPositionProps<TChildProps, TDataName>>(UpdateUserPositionDocument, {
      alias: 'updateUserPosition',
      ...operationOptions
    });
};

/**
 * __useUpdateUserPositionMutation__
 *
 * To run a mutation, you first call `useUpdateUserPositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserPositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserPositionMutation, { data, loading, error }] = useUpdateUserPositionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserPositionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserPositionMutation, UpdateUserPositionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserPositionMutation, UpdateUserPositionMutationVariables>(UpdateUserPositionDocument, options);
      }
export type UpdateUserPositionMutationHookResult = ReturnType<typeof useUpdateUserPositionMutation>;
export type UpdateUserPositionMutationResult = Apollo.MutationResult<UpdateUserPositionMutation>;
export type UpdateUserPositionMutationOptions = Apollo.BaseMutationOptions<UpdateUserPositionMutation, UpdateUserPositionMutationVariables>;
export const DeleteUserPositionDocument = gql`
    mutation deleteUserPosition($input: DeleteUserPositionInput!) {
  deleteUserPosition(input: $input)
}
    `;
export type DeleteUserPositionMutationFn = Apollo.MutationFunction<DeleteUserPositionMutation, DeleteUserPositionMutationVariables>;
export type DeleteUserPositionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteUserPositionMutation, DeleteUserPositionMutationVariables>
    } & TChildProps;
export function withDeleteUserPosition<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteUserPositionMutation,
  DeleteUserPositionMutationVariables,
  DeleteUserPositionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteUserPositionMutation, DeleteUserPositionMutationVariables, DeleteUserPositionProps<TChildProps, TDataName>>(DeleteUserPositionDocument, {
      alias: 'deleteUserPosition',
      ...operationOptions
    });
};

/**
 * __useDeleteUserPositionMutation__
 *
 * To run a mutation, you first call `useDeleteUserPositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserPositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserPositionMutation, { data, loading, error }] = useDeleteUserPositionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserPositionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserPositionMutation, DeleteUserPositionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserPositionMutation, DeleteUserPositionMutationVariables>(DeleteUserPositionDocument, options);
      }
export type DeleteUserPositionMutationHookResult = ReturnType<typeof useDeleteUserPositionMutation>;
export type DeleteUserPositionMutationResult = Apollo.MutationResult<DeleteUserPositionMutation>;
export type DeleteUserPositionMutationOptions = Apollo.BaseMutationOptions<DeleteUserPositionMutation, DeleteUserPositionMutationVariables>;
export const DeleteManyUserPositionDocument = gql`
    mutation deleteManyUserPosition($input: DeleteManyUserPositionInput!) {
  deleteManyUserPosition(input: $input)
}
    `;
export type DeleteManyUserPositionMutationFn = Apollo.MutationFunction<DeleteManyUserPositionMutation, DeleteManyUserPositionMutationVariables>;
export type DeleteManyUserPositionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyUserPositionMutation, DeleteManyUserPositionMutationVariables>
    } & TChildProps;
export function withDeleteManyUserPosition<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyUserPositionMutation,
  DeleteManyUserPositionMutationVariables,
  DeleteManyUserPositionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyUserPositionMutation, DeleteManyUserPositionMutationVariables, DeleteManyUserPositionProps<TChildProps, TDataName>>(DeleteManyUserPositionDocument, {
      alias: 'deleteManyUserPosition',
      ...operationOptions
    });
};

/**
 * __useDeleteManyUserPositionMutation__
 *
 * To run a mutation, you first call `useDeleteManyUserPositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyUserPositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyUserPositionMutation, { data, loading, error }] = useDeleteManyUserPositionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyUserPositionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyUserPositionMutation, DeleteManyUserPositionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyUserPositionMutation, DeleteManyUserPositionMutationVariables>(DeleteManyUserPositionDocument, options);
      }
export type DeleteManyUserPositionMutationHookResult = ReturnType<typeof useDeleteManyUserPositionMutation>;
export type DeleteManyUserPositionMutationResult = Apollo.MutationResult<DeleteManyUserPositionMutation>;
export type DeleteManyUserPositionMutationOptions = Apollo.BaseMutationOptions<DeleteManyUserPositionMutation, DeleteManyUserPositionMutationVariables>;
export type CreateUserPositionMutationVariables = Types.Exact<{
  input: Types.CreateUserPositionInput;
}>;


export type CreateUserPositionMutation = Pick<Types.Mutation, 'createUserPosition'>;

export type UpdateUserPositionMutationVariables = Types.Exact<{
  input: Types.UpdateUserPositionInput;
}>;


export type UpdateUserPositionMutation = Pick<Types.Mutation, 'updateUserPosition'>;

export type DeleteUserPositionMutationVariables = Types.Exact<{
  input: Types.DeleteUserPositionInput;
}>;


export type DeleteUserPositionMutation = Pick<Types.Mutation, 'deleteUserPosition'>;

export type DeleteManyUserPositionMutationVariables = Types.Exact<{
  input: Types.DeleteManyUserPositionInput;
}>;


export type DeleteManyUserPositionMutation = Pick<Types.Mutation, 'deleteManyUserPosition'>;
