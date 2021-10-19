import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateTenantDocument = gql`
    mutation createTenant($input: CreateTenantInput!) {
  createTenant(input: $input)
}
    `;
export type CreateTenantMutationFn = Apollo.MutationFunction<CreateTenantMutation, CreateTenantMutationVariables>;
export type CreateTenantProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateTenantMutation, CreateTenantMutationVariables>
    } & TChildProps;
export function withCreateTenant<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateTenantMutation,
  CreateTenantMutationVariables,
  CreateTenantProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateTenantMutation, CreateTenantMutationVariables, CreateTenantProps<TChildProps, TDataName>>(CreateTenantDocument, {
      alias: 'createTenant',
      ...operationOptions
    });
};

/**
 * __useCreateTenantMutation__
 *
 * To run a mutation, you first call `useCreateTenantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTenantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTenantMutation, { data, loading, error }] = useCreateTenantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTenantMutation(baseOptions?: Apollo.MutationHookOptions<CreateTenantMutation, CreateTenantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTenantMutation, CreateTenantMutationVariables>(CreateTenantDocument, options);
      }
export type CreateTenantMutationHookResult = ReturnType<typeof useCreateTenantMutation>;
export type CreateTenantMutationResult = Apollo.MutationResult<CreateTenantMutation>;
export type CreateTenantMutationOptions = Apollo.BaseMutationOptions<CreateTenantMutation, CreateTenantMutationVariables>;
export const UpdateTenantDocument = gql`
    mutation updateTenant($input: UpdateTenantInput!) {
  updateTenant(input: $input)
}
    `;
export type UpdateTenantMutationFn = Apollo.MutationFunction<UpdateTenantMutation, UpdateTenantMutationVariables>;
export type UpdateTenantProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateTenantMutation, UpdateTenantMutationVariables>
    } & TChildProps;
export function withUpdateTenant<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateTenantMutation,
  UpdateTenantMutationVariables,
  UpdateTenantProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateTenantMutation, UpdateTenantMutationVariables, UpdateTenantProps<TChildProps, TDataName>>(UpdateTenantDocument, {
      alias: 'updateTenant',
      ...operationOptions
    });
};

/**
 * __useUpdateTenantMutation__
 *
 * To run a mutation, you first call `useUpdateTenantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTenantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTenantMutation, { data, loading, error }] = useUpdateTenantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTenantMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTenantMutation, UpdateTenantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTenantMutation, UpdateTenantMutationVariables>(UpdateTenantDocument, options);
      }
export type UpdateTenantMutationHookResult = ReturnType<typeof useUpdateTenantMutation>;
export type UpdateTenantMutationResult = Apollo.MutationResult<UpdateTenantMutation>;
export type UpdateTenantMutationOptions = Apollo.BaseMutationOptions<UpdateTenantMutation, UpdateTenantMutationVariables>;
export const DeleteTenantDocument = gql`
    mutation deleteTenant($input: DeleteTenantInput!) {
  deleteTenant(input: $input)
}
    `;
export type DeleteTenantMutationFn = Apollo.MutationFunction<DeleteTenantMutation, DeleteTenantMutationVariables>;
export type DeleteTenantProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteTenantMutation, DeleteTenantMutationVariables>
    } & TChildProps;
export function withDeleteTenant<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTenantMutation,
  DeleteTenantMutationVariables,
  DeleteTenantProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTenantMutation, DeleteTenantMutationVariables, DeleteTenantProps<TChildProps, TDataName>>(DeleteTenantDocument, {
      alias: 'deleteTenant',
      ...operationOptions
    });
};

/**
 * __useDeleteTenantMutation__
 *
 * To run a mutation, you first call `useDeleteTenantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTenantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTenantMutation, { data, loading, error }] = useDeleteTenantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTenantMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTenantMutation, DeleteTenantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTenantMutation, DeleteTenantMutationVariables>(DeleteTenantDocument, options);
      }
export type DeleteTenantMutationHookResult = ReturnType<typeof useDeleteTenantMutation>;
export type DeleteTenantMutationResult = Apollo.MutationResult<DeleteTenantMutation>;
export type DeleteTenantMutationOptions = Apollo.BaseMutationOptions<DeleteTenantMutation, DeleteTenantMutationVariables>;
export type CreateTenantMutationVariables = Types.Exact<{
  input: Types.CreateTenantInput;
}>;


export type CreateTenantMutation = Pick<Types.Mutation, 'createTenant'>;

export type UpdateTenantMutationVariables = Types.Exact<{
  input: Types.UpdateTenantInput;
}>;


export type UpdateTenantMutation = Pick<Types.Mutation, 'updateTenant'>;

export type DeleteTenantMutationVariables = Types.Exact<{
  input: Types.DeleteTenantInput;
}>;


export type DeleteTenantMutation = Pick<Types.Mutation, 'deleteTenant'>;
