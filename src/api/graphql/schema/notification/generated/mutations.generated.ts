import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const DeleteNotificationDocument = gql`
    mutation deleteNotification($input: DeleteNotificationInput!) {
  deleteNotification(input: $input)
}
    `;
export type DeleteNotificationMutationFn = Apollo.MutationFunction<DeleteNotificationMutation, DeleteNotificationMutationVariables>;
export type DeleteNotificationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteNotificationMutation, DeleteNotificationMutationVariables>
    } & TChildProps;
export function withDeleteNotification<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteNotificationMutation,
  DeleteNotificationMutationVariables,
  DeleteNotificationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteNotificationMutation, DeleteNotificationMutationVariables, DeleteNotificationProps<TChildProps, TDataName>>(DeleteNotificationDocument, {
      alias: 'deleteNotification',
      ...operationOptions
    });
};

/**
 * __useDeleteNotificationMutation__
 *
 * To run a mutation, you first call `useDeleteNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNotificationMutation, { data, loading, error }] = useDeleteNotificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteNotificationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNotificationMutation, DeleteNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNotificationMutation, DeleteNotificationMutationVariables>(DeleteNotificationDocument, options);
      }
export type DeleteNotificationMutationHookResult = ReturnType<typeof useDeleteNotificationMutation>;
export type DeleteNotificationMutationResult = Apollo.MutationResult<DeleteNotificationMutation>;
export type DeleteNotificationMutationOptions = Apollo.BaseMutationOptions<DeleteNotificationMutation, DeleteNotificationMutationVariables>;
export const DeleteManyNotificationDocument = gql`
    mutation deleteManyNotification($input: DeleteManyNotificationInput!) {
  deleteManyNotification(input: $input)
}
    `;
export type DeleteManyNotificationMutationFn = Apollo.MutationFunction<DeleteManyNotificationMutation, DeleteManyNotificationMutationVariables>;
export type DeleteManyNotificationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyNotificationMutation, DeleteManyNotificationMutationVariables>
    } & TChildProps;
export function withDeleteManyNotification<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyNotificationMutation,
  DeleteManyNotificationMutationVariables,
  DeleteManyNotificationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyNotificationMutation, DeleteManyNotificationMutationVariables, DeleteManyNotificationProps<TChildProps, TDataName>>(DeleteManyNotificationDocument, {
      alias: 'deleteManyNotification',
      ...operationOptions
    });
};

/**
 * __useDeleteManyNotificationMutation__
 *
 * To run a mutation, you first call `useDeleteManyNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyNotificationMutation, { data, loading, error }] = useDeleteManyNotificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyNotificationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyNotificationMutation, DeleteManyNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyNotificationMutation, DeleteManyNotificationMutationVariables>(DeleteManyNotificationDocument, options);
      }
export type DeleteManyNotificationMutationHookResult = ReturnType<typeof useDeleteManyNotificationMutation>;
export type DeleteManyNotificationMutationResult = Apollo.MutationResult<DeleteManyNotificationMutation>;
export type DeleteManyNotificationMutationOptions = Apollo.BaseMutationOptions<DeleteManyNotificationMutation, DeleteManyNotificationMutationVariables>;
export const UpdateNotificationDocument = gql`
    mutation updateNotification($input: UpdateNotificationInput!) {
  updateNotification(input: $input)
}
    `;
export type UpdateNotificationMutationFn = Apollo.MutationFunction<UpdateNotificationMutation, UpdateNotificationMutationVariables>;
export type UpdateNotificationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateNotificationMutation, UpdateNotificationMutationVariables>
    } & TChildProps;
export function withUpdateNotification<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateNotificationMutation,
  UpdateNotificationMutationVariables,
  UpdateNotificationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateNotificationMutation, UpdateNotificationMutationVariables, UpdateNotificationProps<TChildProps, TDataName>>(UpdateNotificationDocument, {
      alias: 'updateNotification',
      ...operationOptions
    });
};

/**
 * __useUpdateNotificationMutation__
 *
 * To run a mutation, you first call `useUpdateNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNotificationMutation, { data, loading, error }] = useUpdateNotificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateNotificationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNotificationMutation, UpdateNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNotificationMutation, UpdateNotificationMutationVariables>(UpdateNotificationDocument, options);
      }
export type UpdateNotificationMutationHookResult = ReturnType<typeof useUpdateNotificationMutation>;
export type UpdateNotificationMutationResult = Apollo.MutationResult<UpdateNotificationMutation>;
export type UpdateNotificationMutationOptions = Apollo.BaseMutationOptions<UpdateNotificationMutation, UpdateNotificationMutationVariables>;
export type DeleteNotificationMutationVariables = Types.Exact<{
  input: Types.DeleteNotificationInput;
}>;


export type DeleteNotificationMutation = Pick<Types.Mutation, 'deleteNotification'>;

export type DeleteManyNotificationMutationVariables = Types.Exact<{
  input: Types.DeleteManyNotificationInput;
}>;


export type DeleteManyNotificationMutation = Pick<Types.Mutation, 'deleteManyNotification'>;

export type UpdateNotificationMutationVariables = Types.Exact<{
  input: Types.UpdateNotificationInput;
}>;


export type UpdateNotificationMutation = Pick<Types.Mutation, 'updateNotification'>;
