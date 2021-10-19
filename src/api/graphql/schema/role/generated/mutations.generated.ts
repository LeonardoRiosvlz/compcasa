import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateRoleDocument = gql`
    mutation createRole($input: CreateRoleInput!) {
  createRole(input: $input)
}
    `;
export type CreateRoleMutationFn = Apollo.MutationFunction<CreateRoleMutation, CreateRoleMutationVariables>;
export type CreateRoleProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateRoleMutation, CreateRoleMutationVariables>
    } & TChildProps;
export function withCreateRole<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateRoleMutation,
  CreateRoleMutationVariables,
  CreateRoleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateRoleMutation, CreateRoleMutationVariables, CreateRoleProps<TChildProps, TDataName>>(CreateRoleDocument, {
      alias: 'createRole',
      ...operationOptions
    });
};

/**
 * __useCreateRoleMutation__
 *
 * To run a mutation, you first call `useCreateRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoleMutation, { data, loading, error }] = useCreateRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRoleMutation(baseOptions?: Apollo.MutationHookOptions<CreateRoleMutation, CreateRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRoleMutation, CreateRoleMutationVariables>(CreateRoleDocument, options);
      }
export type CreateRoleMutationHookResult = ReturnType<typeof useCreateRoleMutation>;
export type CreateRoleMutationResult = Apollo.MutationResult<CreateRoleMutation>;
export type CreateRoleMutationOptions = Apollo.BaseMutationOptions<CreateRoleMutation, CreateRoleMutationVariables>;
export const UpdateRoleDocument = gql`
    mutation updateRole($input: UpdateRoleInput!) {
  updateRole(input: $input)
}
    `;
export type UpdateRoleMutationFn = Apollo.MutationFunction<UpdateRoleMutation, UpdateRoleMutationVariables>;
export type UpdateRoleProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateRoleMutation, UpdateRoleMutationVariables>
    } & TChildProps;
export function withUpdateRole<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateRoleMutation,
  UpdateRoleMutationVariables,
  UpdateRoleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateRoleMutation, UpdateRoleMutationVariables, UpdateRoleProps<TChildProps, TDataName>>(UpdateRoleDocument, {
      alias: 'updateRole',
      ...operationOptions
    });
};

/**
 * __useUpdateRoleMutation__
 *
 * To run a mutation, you first call `useUpdateRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoleMutation, { data, loading, error }] = useUpdateRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateRoleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRoleMutation, UpdateRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRoleMutation, UpdateRoleMutationVariables>(UpdateRoleDocument, options);
      }
export type UpdateRoleMutationHookResult = ReturnType<typeof useUpdateRoleMutation>;
export type UpdateRoleMutationResult = Apollo.MutationResult<UpdateRoleMutation>;
export type UpdateRoleMutationOptions = Apollo.BaseMutationOptions<UpdateRoleMutation, UpdateRoleMutationVariables>;
export const DeleteRoleDocument = gql`
    mutation deleteRole($input: DeleteRoleInput!) {
  deleteRole(input: $input)
}
    `;
export type DeleteRoleMutationFn = Apollo.MutationFunction<DeleteRoleMutation, DeleteRoleMutationVariables>;
export type DeleteRoleProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteRoleMutation, DeleteRoleMutationVariables>
    } & TChildProps;
export function withDeleteRole<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteRoleMutation,
  DeleteRoleMutationVariables,
  DeleteRoleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteRoleMutation, DeleteRoleMutationVariables, DeleteRoleProps<TChildProps, TDataName>>(DeleteRoleDocument, {
      alias: 'deleteRole',
      ...operationOptions
    });
};

/**
 * __useDeleteRoleMutation__
 *
 * To run a mutation, you first call `useDeleteRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoleMutation, { data, loading, error }] = useDeleteRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteRoleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRoleMutation, DeleteRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRoleMutation, DeleteRoleMutationVariables>(DeleteRoleDocument, options);
      }
export type DeleteRoleMutationHookResult = ReturnType<typeof useDeleteRoleMutation>;
export type DeleteRoleMutationResult = Apollo.MutationResult<DeleteRoleMutation>;
export type DeleteRoleMutationOptions = Apollo.BaseMutationOptions<DeleteRoleMutation, DeleteRoleMutationVariables>;
export const DeleteManyRoleDocument = gql`
    mutation deleteManyRole($input: DeleteManyRoleInput!) {
  deleteManyRole(input: $input)
}
    `;
export type DeleteManyRoleMutationFn = Apollo.MutationFunction<DeleteManyRoleMutation, DeleteManyRoleMutationVariables>;
export type DeleteManyRoleProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyRoleMutation, DeleteManyRoleMutationVariables>
    } & TChildProps;
export function withDeleteManyRole<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyRoleMutation,
  DeleteManyRoleMutationVariables,
  DeleteManyRoleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyRoleMutation, DeleteManyRoleMutationVariables, DeleteManyRoleProps<TChildProps, TDataName>>(DeleteManyRoleDocument, {
      alias: 'deleteManyRole',
      ...operationOptions
    });
};

/**
 * __useDeleteManyRoleMutation__
 *
 * To run a mutation, you first call `useDeleteManyRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyRoleMutation, { data, loading, error }] = useDeleteManyRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyRoleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyRoleMutation, DeleteManyRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyRoleMutation, DeleteManyRoleMutationVariables>(DeleteManyRoleDocument, options);
      }
export type DeleteManyRoleMutationHookResult = ReturnType<typeof useDeleteManyRoleMutation>;
export type DeleteManyRoleMutationResult = Apollo.MutationResult<DeleteManyRoleMutation>;
export type DeleteManyRoleMutationOptions = Apollo.BaseMutationOptions<DeleteManyRoleMutation, DeleteManyRoleMutationVariables>;
export type CreateRoleMutationVariables = Types.Exact<{
  input: Types.CreateRoleInput;
}>;


export type CreateRoleMutation = Pick<Types.Mutation, 'createRole'>;

export type UpdateRoleMutationVariables = Types.Exact<{
  input: Types.UpdateRoleInput;
}>;


export type UpdateRoleMutation = Pick<Types.Mutation, 'updateRole'>;

export type DeleteRoleMutationVariables = Types.Exact<{
  input: Types.DeleteRoleInput;
}>;


export type DeleteRoleMutation = Pick<Types.Mutation, 'deleteRole'>;

export type DeleteManyRoleMutationVariables = Types.Exact<{
  input: Types.DeleteManyRoleInput;
}>;


export type DeleteManyRoleMutation = Pick<Types.Mutation, 'deleteManyRole'>;
