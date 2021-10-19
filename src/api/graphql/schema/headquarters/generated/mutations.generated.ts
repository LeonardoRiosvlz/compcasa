import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateHeadquartersDocument = gql`
    mutation createHeadquarters($input: CreateHeadquartersInput!) {
  createHeadquarters(input: $input)
}
    `;
export type CreateHeadquartersMutationFn = Apollo.MutationFunction<CreateHeadquartersMutation, CreateHeadquartersMutationVariables>;
export type CreateHeadquartersProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateHeadquartersMutation, CreateHeadquartersMutationVariables>
    } & TChildProps;
export function withCreateHeadquarters<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateHeadquartersMutation,
  CreateHeadquartersMutationVariables,
  CreateHeadquartersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateHeadquartersMutation, CreateHeadquartersMutationVariables, CreateHeadquartersProps<TChildProps, TDataName>>(CreateHeadquartersDocument, {
      alias: 'createHeadquarters',
      ...operationOptions
    });
};

/**
 * __useCreateHeadquartersMutation__
 *
 * To run a mutation, you first call `useCreateHeadquartersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHeadquartersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHeadquartersMutation, { data, loading, error }] = useCreateHeadquartersMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateHeadquartersMutation(baseOptions?: Apollo.MutationHookOptions<CreateHeadquartersMutation, CreateHeadquartersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHeadquartersMutation, CreateHeadquartersMutationVariables>(CreateHeadquartersDocument, options);
      }
export type CreateHeadquartersMutationHookResult = ReturnType<typeof useCreateHeadquartersMutation>;
export type CreateHeadquartersMutationResult = Apollo.MutationResult<CreateHeadquartersMutation>;
export type CreateHeadquartersMutationOptions = Apollo.BaseMutationOptions<CreateHeadquartersMutation, CreateHeadquartersMutationVariables>;
export const UpdateHeadquartersDocument = gql`
    mutation updateHeadquarters($input: UpdateHeadquartersInput!) {
  updateHeadquarters(input: $input)
}
    `;
export type UpdateHeadquartersMutationFn = Apollo.MutationFunction<UpdateHeadquartersMutation, UpdateHeadquartersMutationVariables>;
export type UpdateHeadquartersProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateHeadquartersMutation, UpdateHeadquartersMutationVariables>
    } & TChildProps;
export function withUpdateHeadquarters<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateHeadquartersMutation,
  UpdateHeadquartersMutationVariables,
  UpdateHeadquartersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateHeadquartersMutation, UpdateHeadquartersMutationVariables, UpdateHeadquartersProps<TChildProps, TDataName>>(UpdateHeadquartersDocument, {
      alias: 'updateHeadquarters',
      ...operationOptions
    });
};

/**
 * __useUpdateHeadquartersMutation__
 *
 * To run a mutation, you first call `useUpdateHeadquartersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHeadquartersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHeadquartersMutation, { data, loading, error }] = useUpdateHeadquartersMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateHeadquartersMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHeadquartersMutation, UpdateHeadquartersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHeadquartersMutation, UpdateHeadquartersMutationVariables>(UpdateHeadquartersDocument, options);
      }
export type UpdateHeadquartersMutationHookResult = ReturnType<typeof useUpdateHeadquartersMutation>;
export type UpdateHeadquartersMutationResult = Apollo.MutationResult<UpdateHeadquartersMutation>;
export type UpdateHeadquartersMutationOptions = Apollo.BaseMutationOptions<UpdateHeadquartersMutation, UpdateHeadquartersMutationVariables>;
export const DeleteHeadquartersDocument = gql`
    mutation deleteHeadquarters($input: DeleteHeadquartersInput!) {
  deleteHeadquarters(input: $input)
}
    `;
export type DeleteHeadquartersMutationFn = Apollo.MutationFunction<DeleteHeadquartersMutation, DeleteHeadquartersMutationVariables>;
export type DeleteHeadquartersProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteHeadquartersMutation, DeleteHeadquartersMutationVariables>
    } & TChildProps;
export function withDeleteHeadquarters<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteHeadquartersMutation,
  DeleteHeadquartersMutationVariables,
  DeleteHeadquartersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteHeadquartersMutation, DeleteHeadquartersMutationVariables, DeleteHeadquartersProps<TChildProps, TDataName>>(DeleteHeadquartersDocument, {
      alias: 'deleteHeadquarters',
      ...operationOptions
    });
};

/**
 * __useDeleteHeadquartersMutation__
 *
 * To run a mutation, you first call `useDeleteHeadquartersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHeadquartersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHeadquartersMutation, { data, loading, error }] = useDeleteHeadquartersMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteHeadquartersMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHeadquartersMutation, DeleteHeadquartersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHeadquartersMutation, DeleteHeadquartersMutationVariables>(DeleteHeadquartersDocument, options);
      }
export type DeleteHeadquartersMutationHookResult = ReturnType<typeof useDeleteHeadquartersMutation>;
export type DeleteHeadquartersMutationResult = Apollo.MutationResult<DeleteHeadquartersMutation>;
export type DeleteHeadquartersMutationOptions = Apollo.BaseMutationOptions<DeleteHeadquartersMutation, DeleteHeadquartersMutationVariables>;
export const DeleteManyHeadquartersDocument = gql`
    mutation deleteManyHeadquarters($input: DeleteManyHeadquartersInput!) {
  deleteManyHeadquarters(input: $input)
}
    `;
export type DeleteManyHeadquartersMutationFn = Apollo.MutationFunction<DeleteManyHeadquartersMutation, DeleteManyHeadquartersMutationVariables>;
export type DeleteManyHeadquartersProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyHeadquartersMutation, DeleteManyHeadquartersMutationVariables>
    } & TChildProps;
export function withDeleteManyHeadquarters<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyHeadquartersMutation,
  DeleteManyHeadquartersMutationVariables,
  DeleteManyHeadquartersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyHeadquartersMutation, DeleteManyHeadquartersMutationVariables, DeleteManyHeadquartersProps<TChildProps, TDataName>>(DeleteManyHeadquartersDocument, {
      alias: 'deleteManyHeadquarters',
      ...operationOptions
    });
};

/**
 * __useDeleteManyHeadquartersMutation__
 *
 * To run a mutation, you first call `useDeleteManyHeadquartersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyHeadquartersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyHeadquartersMutation, { data, loading, error }] = useDeleteManyHeadquartersMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyHeadquartersMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyHeadquartersMutation, DeleteManyHeadquartersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyHeadquartersMutation, DeleteManyHeadquartersMutationVariables>(DeleteManyHeadquartersDocument, options);
      }
export type DeleteManyHeadquartersMutationHookResult = ReturnType<typeof useDeleteManyHeadquartersMutation>;
export type DeleteManyHeadquartersMutationResult = Apollo.MutationResult<DeleteManyHeadquartersMutation>;
export type DeleteManyHeadquartersMutationOptions = Apollo.BaseMutationOptions<DeleteManyHeadquartersMutation, DeleteManyHeadquartersMutationVariables>;
export type CreateHeadquartersMutationVariables = Types.Exact<{
  input: Types.CreateHeadquartersInput;
}>;


export type CreateHeadquartersMutation = Pick<Types.Mutation, 'createHeadquarters'>;

export type UpdateHeadquartersMutationVariables = Types.Exact<{
  input: Types.UpdateHeadquartersInput;
}>;


export type UpdateHeadquartersMutation = Pick<Types.Mutation, 'updateHeadquarters'>;

export type DeleteHeadquartersMutationVariables = Types.Exact<{
  input: Types.DeleteHeadquartersInput;
}>;


export type DeleteHeadquartersMutation = Pick<Types.Mutation, 'deleteHeadquarters'>;

export type DeleteManyHeadquartersMutationVariables = Types.Exact<{
  input: Types.DeleteManyHeadquartersInput;
}>;


export type DeleteManyHeadquartersMutation = Pick<Types.Mutation, 'deleteManyHeadquarters'>;
