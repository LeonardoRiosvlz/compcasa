import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateUserAreaDocument = gql`
    mutation createUserArea($input: CreateUserAreaInput!) {
  createUserArea(input: $input)
}
    `;
export type CreateUserAreaMutationFn = Apollo.MutationFunction<CreateUserAreaMutation, CreateUserAreaMutationVariables>;
export type CreateUserAreaProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateUserAreaMutation, CreateUserAreaMutationVariables>
    } & TChildProps;
export function withCreateUserArea<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUserAreaMutation,
  CreateUserAreaMutationVariables,
  CreateUserAreaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUserAreaMutation, CreateUserAreaMutationVariables, CreateUserAreaProps<TChildProps, TDataName>>(CreateUserAreaDocument, {
      alias: 'createUserArea',
      ...operationOptions
    });
};

/**
 * __useCreateUserAreaMutation__
 *
 * To run a mutation, you first call `useCreateUserAreaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserAreaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserAreaMutation, { data, loading, error }] = useCreateUserAreaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserAreaMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserAreaMutation, CreateUserAreaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserAreaMutation, CreateUserAreaMutationVariables>(CreateUserAreaDocument, options);
      }
export type CreateUserAreaMutationHookResult = ReturnType<typeof useCreateUserAreaMutation>;
export type CreateUserAreaMutationResult = Apollo.MutationResult<CreateUserAreaMutation>;
export type CreateUserAreaMutationOptions = Apollo.BaseMutationOptions<CreateUserAreaMutation, CreateUserAreaMutationVariables>;
export const UpdateUserAreaDocument = gql`
    mutation updateUserArea($input: UpdateUserAreaInput!) {
  updateUserArea(input: $input)
}
    `;
export type UpdateUserAreaMutationFn = Apollo.MutationFunction<UpdateUserAreaMutation, UpdateUserAreaMutationVariables>;
export type UpdateUserAreaProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateUserAreaMutation, UpdateUserAreaMutationVariables>
    } & TChildProps;
export function withUpdateUserArea<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateUserAreaMutation,
  UpdateUserAreaMutationVariables,
  UpdateUserAreaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateUserAreaMutation, UpdateUserAreaMutationVariables, UpdateUserAreaProps<TChildProps, TDataName>>(UpdateUserAreaDocument, {
      alias: 'updateUserArea',
      ...operationOptions
    });
};

/**
 * __useUpdateUserAreaMutation__
 *
 * To run a mutation, you first call `useUpdateUserAreaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserAreaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserAreaMutation, { data, loading, error }] = useUpdateUserAreaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserAreaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserAreaMutation, UpdateUserAreaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserAreaMutation, UpdateUserAreaMutationVariables>(UpdateUserAreaDocument, options);
      }
export type UpdateUserAreaMutationHookResult = ReturnType<typeof useUpdateUserAreaMutation>;
export type UpdateUserAreaMutationResult = Apollo.MutationResult<UpdateUserAreaMutation>;
export type UpdateUserAreaMutationOptions = Apollo.BaseMutationOptions<UpdateUserAreaMutation, UpdateUserAreaMutationVariables>;
export const DeleteUserAreaDocument = gql`
    mutation deleteUserArea($input: DeleteUserAreaInput!) {
  deleteUserArea(input: $input)
}
    `;
export type DeleteUserAreaMutationFn = Apollo.MutationFunction<DeleteUserAreaMutation, DeleteUserAreaMutationVariables>;
export type DeleteUserAreaProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteUserAreaMutation, DeleteUserAreaMutationVariables>
    } & TChildProps;
export function withDeleteUserArea<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteUserAreaMutation,
  DeleteUserAreaMutationVariables,
  DeleteUserAreaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteUserAreaMutation, DeleteUserAreaMutationVariables, DeleteUserAreaProps<TChildProps, TDataName>>(DeleteUserAreaDocument, {
      alias: 'deleteUserArea',
      ...operationOptions
    });
};

/**
 * __useDeleteUserAreaMutation__
 *
 * To run a mutation, you first call `useDeleteUserAreaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserAreaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserAreaMutation, { data, loading, error }] = useDeleteUserAreaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserAreaMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserAreaMutation, DeleteUserAreaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserAreaMutation, DeleteUserAreaMutationVariables>(DeleteUserAreaDocument, options);
      }
export type DeleteUserAreaMutationHookResult = ReturnType<typeof useDeleteUserAreaMutation>;
export type DeleteUserAreaMutationResult = Apollo.MutationResult<DeleteUserAreaMutation>;
export type DeleteUserAreaMutationOptions = Apollo.BaseMutationOptions<DeleteUserAreaMutation, DeleteUserAreaMutationVariables>;
export const DeleteManyUserAreaDocument = gql`
    mutation deleteManyUserArea($input: DeleteManyUserAreaInput!) {
  deleteManyUserArea(input: $input)
}
    `;
export type DeleteManyUserAreaMutationFn = Apollo.MutationFunction<DeleteManyUserAreaMutation, DeleteManyUserAreaMutationVariables>;
export type DeleteManyUserAreaProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyUserAreaMutation, DeleteManyUserAreaMutationVariables>
    } & TChildProps;
export function withDeleteManyUserArea<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyUserAreaMutation,
  DeleteManyUserAreaMutationVariables,
  DeleteManyUserAreaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyUserAreaMutation, DeleteManyUserAreaMutationVariables, DeleteManyUserAreaProps<TChildProps, TDataName>>(DeleteManyUserAreaDocument, {
      alias: 'deleteManyUserArea',
      ...operationOptions
    });
};

/**
 * __useDeleteManyUserAreaMutation__
 *
 * To run a mutation, you first call `useDeleteManyUserAreaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyUserAreaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyUserAreaMutation, { data, loading, error }] = useDeleteManyUserAreaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyUserAreaMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyUserAreaMutation, DeleteManyUserAreaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyUserAreaMutation, DeleteManyUserAreaMutationVariables>(DeleteManyUserAreaDocument, options);
      }
export type DeleteManyUserAreaMutationHookResult = ReturnType<typeof useDeleteManyUserAreaMutation>;
export type DeleteManyUserAreaMutationResult = Apollo.MutationResult<DeleteManyUserAreaMutation>;
export type DeleteManyUserAreaMutationOptions = Apollo.BaseMutationOptions<DeleteManyUserAreaMutation, DeleteManyUserAreaMutationVariables>;
export type CreateUserAreaMutationVariables = Types.Exact<{
  input: Types.CreateUserAreaInput;
}>;


export type CreateUserAreaMutation = Pick<Types.Mutation, 'createUserArea'>;

export type UpdateUserAreaMutationVariables = Types.Exact<{
  input: Types.UpdateUserAreaInput;
}>;


export type UpdateUserAreaMutation = Pick<Types.Mutation, 'updateUserArea'>;

export type DeleteUserAreaMutationVariables = Types.Exact<{
  input: Types.DeleteUserAreaInput;
}>;


export type DeleteUserAreaMutation = Pick<Types.Mutation, 'deleteUserArea'>;

export type DeleteManyUserAreaMutationVariables = Types.Exact<{
  input: Types.DeleteManyUserAreaInput;
}>;


export type DeleteManyUserAreaMutation = Pick<Types.Mutation, 'deleteManyUserArea'>;
