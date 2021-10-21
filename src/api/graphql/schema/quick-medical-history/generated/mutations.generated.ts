import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateQuickMedicalHistoryDocument = gql`
    mutation createQuickMedicalHistory($input: CreateQuickMedicalHistoryInput!) {
  createQuickMedicalHistory(input: $input)
}
    `;
export type CreateQuickMedicalHistoryMutationFn = Apollo.MutationFunction<CreateQuickMedicalHistoryMutation, CreateQuickMedicalHistoryMutationVariables>;
export type CreateQuickMedicalHistoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateQuickMedicalHistoryMutation, CreateQuickMedicalHistoryMutationVariables>
    } & TChildProps;
export function withCreateQuickMedicalHistory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateQuickMedicalHistoryMutation,
  CreateQuickMedicalHistoryMutationVariables,
  CreateQuickMedicalHistoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateQuickMedicalHistoryMutation, CreateQuickMedicalHistoryMutationVariables, CreateQuickMedicalHistoryProps<TChildProps, TDataName>>(CreateQuickMedicalHistoryDocument, {
      alias: 'createQuickMedicalHistory',
      ...operationOptions
    });
};

/**
 * __useCreateQuickMedicalHistoryMutation__
 *
 * To run a mutation, you first call `useCreateQuickMedicalHistoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuickMedicalHistoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuickMedicalHistoryMutation, { data, loading, error }] = useCreateQuickMedicalHistoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateQuickMedicalHistoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuickMedicalHistoryMutation, CreateQuickMedicalHistoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuickMedicalHistoryMutation, CreateQuickMedicalHistoryMutationVariables>(CreateQuickMedicalHistoryDocument, options);
      }
export type CreateQuickMedicalHistoryMutationHookResult = ReturnType<typeof useCreateQuickMedicalHistoryMutation>;
export type CreateQuickMedicalHistoryMutationResult = Apollo.MutationResult<CreateQuickMedicalHistoryMutation>;
export type CreateQuickMedicalHistoryMutationOptions = Apollo.BaseMutationOptions<CreateQuickMedicalHistoryMutation, CreateQuickMedicalHistoryMutationVariables>;
export const UpdateQuickMedicalHistoryDocument = gql`
    mutation updateQuickMedicalHistory($input: UpdateQuickMedicalHistoryInput!) {
  updateQuickMedicalHistory(input: $input)
}
    `;
export type UpdateQuickMedicalHistoryMutationFn = Apollo.MutationFunction<UpdateQuickMedicalHistoryMutation, UpdateQuickMedicalHistoryMutationVariables>;
export type UpdateQuickMedicalHistoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateQuickMedicalHistoryMutation, UpdateQuickMedicalHistoryMutationVariables>
    } & TChildProps;
export function withUpdateQuickMedicalHistory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateQuickMedicalHistoryMutation,
  UpdateQuickMedicalHistoryMutationVariables,
  UpdateQuickMedicalHistoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateQuickMedicalHistoryMutation, UpdateQuickMedicalHistoryMutationVariables, UpdateQuickMedicalHistoryProps<TChildProps, TDataName>>(UpdateQuickMedicalHistoryDocument, {
      alias: 'updateQuickMedicalHistory',
      ...operationOptions
    });
};

/**
 * __useUpdateQuickMedicalHistoryMutation__
 *
 * To run a mutation, you first call `useUpdateQuickMedicalHistoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuickMedicalHistoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuickMedicalHistoryMutation, { data, loading, error }] = useUpdateQuickMedicalHistoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateQuickMedicalHistoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuickMedicalHistoryMutation, UpdateQuickMedicalHistoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuickMedicalHistoryMutation, UpdateQuickMedicalHistoryMutationVariables>(UpdateQuickMedicalHistoryDocument, options);
      }
export type UpdateQuickMedicalHistoryMutationHookResult = ReturnType<typeof useUpdateQuickMedicalHistoryMutation>;
export type UpdateQuickMedicalHistoryMutationResult = Apollo.MutationResult<UpdateQuickMedicalHistoryMutation>;
export type UpdateQuickMedicalHistoryMutationOptions = Apollo.BaseMutationOptions<UpdateQuickMedicalHistoryMutation, UpdateQuickMedicalHistoryMutationVariables>;
export const DeleteQuickMedicalHistoryDocument = gql`
    mutation deleteQuickMedicalHistory($input: DeleteQuickMedicalHistoryInput!) {
  deleteQuickMedicalHistory(input: $input)
}
    `;
export type DeleteQuickMedicalHistoryMutationFn = Apollo.MutationFunction<DeleteQuickMedicalHistoryMutation, DeleteQuickMedicalHistoryMutationVariables>;
export type DeleteQuickMedicalHistoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteQuickMedicalHistoryMutation, DeleteQuickMedicalHistoryMutationVariables>
    } & TChildProps;
export function withDeleteQuickMedicalHistory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteQuickMedicalHistoryMutation,
  DeleteQuickMedicalHistoryMutationVariables,
  DeleteQuickMedicalHistoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteQuickMedicalHistoryMutation, DeleteQuickMedicalHistoryMutationVariables, DeleteQuickMedicalHistoryProps<TChildProps, TDataName>>(DeleteQuickMedicalHistoryDocument, {
      alias: 'deleteQuickMedicalHistory',
      ...operationOptions
    });
};

/**
 * __useDeleteQuickMedicalHistoryMutation__
 *
 * To run a mutation, you first call `useDeleteQuickMedicalHistoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuickMedicalHistoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuickMedicalHistoryMutation, { data, loading, error }] = useDeleteQuickMedicalHistoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteQuickMedicalHistoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuickMedicalHistoryMutation, DeleteQuickMedicalHistoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuickMedicalHistoryMutation, DeleteQuickMedicalHistoryMutationVariables>(DeleteQuickMedicalHistoryDocument, options);
      }
export type DeleteQuickMedicalHistoryMutationHookResult = ReturnType<typeof useDeleteQuickMedicalHistoryMutation>;
export type DeleteQuickMedicalHistoryMutationResult = Apollo.MutationResult<DeleteQuickMedicalHistoryMutation>;
export type DeleteQuickMedicalHistoryMutationOptions = Apollo.BaseMutationOptions<DeleteQuickMedicalHistoryMutation, DeleteQuickMedicalHistoryMutationVariables>;
export const DeleteManyQuickMedicalHistoryDocument = gql`
    mutation deleteManyQuickMedicalHistory($input: DeleteManyQuickMedicalHistoryInput!) {
  deleteManyQuickMedicalHistory(input: $input)
}
    `;
export type DeleteManyQuickMedicalHistoryMutationFn = Apollo.MutationFunction<DeleteManyQuickMedicalHistoryMutation, DeleteManyQuickMedicalHistoryMutationVariables>;
export type DeleteManyQuickMedicalHistoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyQuickMedicalHistoryMutation, DeleteManyQuickMedicalHistoryMutationVariables>
    } & TChildProps;
export function withDeleteManyQuickMedicalHistory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyQuickMedicalHistoryMutation,
  DeleteManyQuickMedicalHistoryMutationVariables,
  DeleteManyQuickMedicalHistoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyQuickMedicalHistoryMutation, DeleteManyQuickMedicalHistoryMutationVariables, DeleteManyQuickMedicalHistoryProps<TChildProps, TDataName>>(DeleteManyQuickMedicalHistoryDocument, {
      alias: 'deleteManyQuickMedicalHistory',
      ...operationOptions
    });
};

/**
 * __useDeleteManyQuickMedicalHistoryMutation__
 *
 * To run a mutation, you first call `useDeleteManyQuickMedicalHistoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyQuickMedicalHistoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyQuickMedicalHistoryMutation, { data, loading, error }] = useDeleteManyQuickMedicalHistoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyQuickMedicalHistoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyQuickMedicalHistoryMutation, DeleteManyQuickMedicalHistoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyQuickMedicalHistoryMutation, DeleteManyQuickMedicalHistoryMutationVariables>(DeleteManyQuickMedicalHistoryDocument, options);
      }
export type DeleteManyQuickMedicalHistoryMutationHookResult = ReturnType<typeof useDeleteManyQuickMedicalHistoryMutation>;
export type DeleteManyQuickMedicalHistoryMutationResult = Apollo.MutationResult<DeleteManyQuickMedicalHistoryMutation>;
export type DeleteManyQuickMedicalHistoryMutationOptions = Apollo.BaseMutationOptions<DeleteManyQuickMedicalHistoryMutation, DeleteManyQuickMedicalHistoryMutationVariables>;
export type CreateQuickMedicalHistoryMutationVariables = Types.Exact<{
  input: Types.CreateQuickMedicalHistoryInput;
}>;


export type CreateQuickMedicalHistoryMutation = Pick<Types.Mutation, 'createQuickMedicalHistory'>;

export type UpdateQuickMedicalHistoryMutationVariables = Types.Exact<{
  input: Types.UpdateQuickMedicalHistoryInput;
}>;


export type UpdateQuickMedicalHistoryMutation = Pick<Types.Mutation, 'updateQuickMedicalHistory'>;

export type DeleteQuickMedicalHistoryMutationVariables = Types.Exact<{
  input: Types.DeleteQuickMedicalHistoryInput;
}>;


export type DeleteQuickMedicalHistoryMutation = Pick<Types.Mutation, 'deleteQuickMedicalHistory'>;

export type DeleteManyQuickMedicalHistoryMutationVariables = Types.Exact<{
  input: Types.DeleteManyQuickMedicalHistoryInput;
}>;


export type DeleteManyQuickMedicalHistoryMutation = Pick<Types.Mutation, 'deleteManyQuickMedicalHistory'>;
