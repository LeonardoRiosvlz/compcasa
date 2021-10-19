import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateMedicalSpecialtiesDocument = gql`
    mutation createMedicalSpecialties($input: CreateMedicalSpecialtiesInput!) {
  createMedicalSpecialties(input: $input)
}
    `;
export type CreateMedicalSpecialtiesMutationFn = Apollo.MutationFunction<CreateMedicalSpecialtiesMutation, CreateMedicalSpecialtiesMutationVariables>;
export type CreateMedicalSpecialtiesProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateMedicalSpecialtiesMutation, CreateMedicalSpecialtiesMutationVariables>
    } & TChildProps;
export function withCreateMedicalSpecialties<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateMedicalSpecialtiesMutation,
  CreateMedicalSpecialtiesMutationVariables,
  CreateMedicalSpecialtiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateMedicalSpecialtiesMutation, CreateMedicalSpecialtiesMutationVariables, CreateMedicalSpecialtiesProps<TChildProps, TDataName>>(CreateMedicalSpecialtiesDocument, {
      alias: 'createMedicalSpecialties',
      ...operationOptions
    });
};

/**
 * __useCreateMedicalSpecialtiesMutation__
 *
 * To run a mutation, you first call `useCreateMedicalSpecialtiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMedicalSpecialtiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMedicalSpecialtiesMutation, { data, loading, error }] = useCreateMedicalSpecialtiesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMedicalSpecialtiesMutation(baseOptions?: Apollo.MutationHookOptions<CreateMedicalSpecialtiesMutation, CreateMedicalSpecialtiesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMedicalSpecialtiesMutation, CreateMedicalSpecialtiesMutationVariables>(CreateMedicalSpecialtiesDocument, options);
      }
export type CreateMedicalSpecialtiesMutationHookResult = ReturnType<typeof useCreateMedicalSpecialtiesMutation>;
export type CreateMedicalSpecialtiesMutationResult = Apollo.MutationResult<CreateMedicalSpecialtiesMutation>;
export type CreateMedicalSpecialtiesMutationOptions = Apollo.BaseMutationOptions<CreateMedicalSpecialtiesMutation, CreateMedicalSpecialtiesMutationVariables>;
export const UpdateMedicalSpecialtiesDocument = gql`
    mutation updateMedicalSpecialties($input: UpdateMedicalSpecialtiesInput!) {
  updateMedicalSpecialties(input: $input)
}
    `;
export type UpdateMedicalSpecialtiesMutationFn = Apollo.MutationFunction<UpdateMedicalSpecialtiesMutation, UpdateMedicalSpecialtiesMutationVariables>;
export type UpdateMedicalSpecialtiesProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateMedicalSpecialtiesMutation, UpdateMedicalSpecialtiesMutationVariables>
    } & TChildProps;
export function withUpdateMedicalSpecialties<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateMedicalSpecialtiesMutation,
  UpdateMedicalSpecialtiesMutationVariables,
  UpdateMedicalSpecialtiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateMedicalSpecialtiesMutation, UpdateMedicalSpecialtiesMutationVariables, UpdateMedicalSpecialtiesProps<TChildProps, TDataName>>(UpdateMedicalSpecialtiesDocument, {
      alias: 'updateMedicalSpecialties',
      ...operationOptions
    });
};

/**
 * __useUpdateMedicalSpecialtiesMutation__
 *
 * To run a mutation, you first call `useUpdateMedicalSpecialtiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMedicalSpecialtiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMedicalSpecialtiesMutation, { data, loading, error }] = useUpdateMedicalSpecialtiesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMedicalSpecialtiesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMedicalSpecialtiesMutation, UpdateMedicalSpecialtiesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMedicalSpecialtiesMutation, UpdateMedicalSpecialtiesMutationVariables>(UpdateMedicalSpecialtiesDocument, options);
      }
export type UpdateMedicalSpecialtiesMutationHookResult = ReturnType<typeof useUpdateMedicalSpecialtiesMutation>;
export type UpdateMedicalSpecialtiesMutationResult = Apollo.MutationResult<UpdateMedicalSpecialtiesMutation>;
export type UpdateMedicalSpecialtiesMutationOptions = Apollo.BaseMutationOptions<UpdateMedicalSpecialtiesMutation, UpdateMedicalSpecialtiesMutationVariables>;
export const DeleteMedicalSpecialtiesDocument = gql`
    mutation deleteMedicalSpecialties($input: DeleteMedicalSpecialtiesInput!) {
  deleteMedicalSpecialties(input: $input)
}
    `;
export type DeleteMedicalSpecialtiesMutationFn = Apollo.MutationFunction<DeleteMedicalSpecialtiesMutation, DeleteMedicalSpecialtiesMutationVariables>;
export type DeleteMedicalSpecialtiesProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteMedicalSpecialtiesMutation, DeleteMedicalSpecialtiesMutationVariables>
    } & TChildProps;
export function withDeleteMedicalSpecialties<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteMedicalSpecialtiesMutation,
  DeleteMedicalSpecialtiesMutationVariables,
  DeleteMedicalSpecialtiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteMedicalSpecialtiesMutation, DeleteMedicalSpecialtiesMutationVariables, DeleteMedicalSpecialtiesProps<TChildProps, TDataName>>(DeleteMedicalSpecialtiesDocument, {
      alias: 'deleteMedicalSpecialties',
      ...operationOptions
    });
};

/**
 * __useDeleteMedicalSpecialtiesMutation__
 *
 * To run a mutation, you first call `useDeleteMedicalSpecialtiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMedicalSpecialtiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMedicalSpecialtiesMutation, { data, loading, error }] = useDeleteMedicalSpecialtiesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteMedicalSpecialtiesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMedicalSpecialtiesMutation, DeleteMedicalSpecialtiesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMedicalSpecialtiesMutation, DeleteMedicalSpecialtiesMutationVariables>(DeleteMedicalSpecialtiesDocument, options);
      }
export type DeleteMedicalSpecialtiesMutationHookResult = ReturnType<typeof useDeleteMedicalSpecialtiesMutation>;
export type DeleteMedicalSpecialtiesMutationResult = Apollo.MutationResult<DeleteMedicalSpecialtiesMutation>;
export type DeleteMedicalSpecialtiesMutationOptions = Apollo.BaseMutationOptions<DeleteMedicalSpecialtiesMutation, DeleteMedicalSpecialtiesMutationVariables>;
export const DeleteManyMedicalSpecialtiesDocument = gql`
    mutation deleteManyMedicalSpecialties($input: DeleteManyMedicalSpecialtiesInput!) {
  deleteManyMedicalSpecialties(input: $input)
}
    `;
export type DeleteManyMedicalSpecialtiesMutationFn = Apollo.MutationFunction<DeleteManyMedicalSpecialtiesMutation, DeleteManyMedicalSpecialtiesMutationVariables>;
export type DeleteManyMedicalSpecialtiesProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyMedicalSpecialtiesMutation, DeleteManyMedicalSpecialtiesMutationVariables>
    } & TChildProps;
export function withDeleteManyMedicalSpecialties<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyMedicalSpecialtiesMutation,
  DeleteManyMedicalSpecialtiesMutationVariables,
  DeleteManyMedicalSpecialtiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyMedicalSpecialtiesMutation, DeleteManyMedicalSpecialtiesMutationVariables, DeleteManyMedicalSpecialtiesProps<TChildProps, TDataName>>(DeleteManyMedicalSpecialtiesDocument, {
      alias: 'deleteManyMedicalSpecialties',
      ...operationOptions
    });
};

/**
 * __useDeleteManyMedicalSpecialtiesMutation__
 *
 * To run a mutation, you first call `useDeleteManyMedicalSpecialtiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyMedicalSpecialtiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyMedicalSpecialtiesMutation, { data, loading, error }] = useDeleteManyMedicalSpecialtiesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyMedicalSpecialtiesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyMedicalSpecialtiesMutation, DeleteManyMedicalSpecialtiesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyMedicalSpecialtiesMutation, DeleteManyMedicalSpecialtiesMutationVariables>(DeleteManyMedicalSpecialtiesDocument, options);
      }
export type DeleteManyMedicalSpecialtiesMutationHookResult = ReturnType<typeof useDeleteManyMedicalSpecialtiesMutation>;
export type DeleteManyMedicalSpecialtiesMutationResult = Apollo.MutationResult<DeleteManyMedicalSpecialtiesMutation>;
export type DeleteManyMedicalSpecialtiesMutationOptions = Apollo.BaseMutationOptions<DeleteManyMedicalSpecialtiesMutation, DeleteManyMedicalSpecialtiesMutationVariables>;
export type CreateMedicalSpecialtiesMutationVariables = Types.Exact<{
  input: Types.CreateMedicalSpecialtiesInput;
}>;


export type CreateMedicalSpecialtiesMutation = Pick<Types.Mutation, 'createMedicalSpecialties'>;

export type UpdateMedicalSpecialtiesMutationVariables = Types.Exact<{
  input: Types.UpdateMedicalSpecialtiesInput;
}>;


export type UpdateMedicalSpecialtiesMutation = Pick<Types.Mutation, 'updateMedicalSpecialties'>;

export type DeleteMedicalSpecialtiesMutationVariables = Types.Exact<{
  input: Types.DeleteMedicalSpecialtiesInput;
}>;


export type DeleteMedicalSpecialtiesMutation = Pick<Types.Mutation, 'deleteMedicalSpecialties'>;

export type DeleteManyMedicalSpecialtiesMutationVariables = Types.Exact<{
  input: Types.DeleteManyMedicalSpecialtiesInput;
}>;


export type DeleteManyMedicalSpecialtiesMutation = Pick<Types.Mutation, 'deleteManyMedicalSpecialties'>;
