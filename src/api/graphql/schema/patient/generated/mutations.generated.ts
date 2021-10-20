import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreatePatientDocument = gql`
    mutation createPatient($input: CreatePatientInput!) {
  createPatient(input: $input)
}
    `;
export type CreatePatientMutationFn = Apollo.MutationFunction<CreatePatientMutation, CreatePatientMutationVariables>;
export type CreatePatientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreatePatientMutation, CreatePatientMutationVariables>
    } & TChildProps;
export function withCreatePatient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreatePatientMutation,
  CreatePatientMutationVariables,
  CreatePatientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreatePatientMutation, CreatePatientMutationVariables, CreatePatientProps<TChildProps, TDataName>>(CreatePatientDocument, {
      alias: 'createPatient',
      ...operationOptions
    });
};

/**
 * __useCreatePatientMutation__
 *
 * To run a mutation, you first call `useCreatePatientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePatientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPatientMutation, { data, loading, error }] = useCreatePatientMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePatientMutation(baseOptions?: Apollo.MutationHookOptions<CreatePatientMutation, CreatePatientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePatientMutation, CreatePatientMutationVariables>(CreatePatientDocument, options);
      }
export type CreatePatientMutationHookResult = ReturnType<typeof useCreatePatientMutation>;
export type CreatePatientMutationResult = Apollo.MutationResult<CreatePatientMutation>;
export type CreatePatientMutationOptions = Apollo.BaseMutationOptions<CreatePatientMutation, CreatePatientMutationVariables>;
export const UpdatePatientDocument = gql`
    mutation updatePatient($input: UpdatePatientInput!) {
  updatePatient(input: $input)
}
    `;
export type UpdatePatientMutationFn = Apollo.MutationFunction<UpdatePatientMutation, UpdatePatientMutationVariables>;
export type UpdatePatientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdatePatientMutation, UpdatePatientMutationVariables>
    } & TChildProps;
export function withUpdatePatient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdatePatientMutation,
  UpdatePatientMutationVariables,
  UpdatePatientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdatePatientMutation, UpdatePatientMutationVariables, UpdatePatientProps<TChildProps, TDataName>>(UpdatePatientDocument, {
      alias: 'updatePatient',
      ...operationOptions
    });
};

/**
 * __useUpdatePatientMutation__
 *
 * To run a mutation, you first call `useUpdatePatientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePatientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePatientMutation, { data, loading, error }] = useUpdatePatientMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePatientMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePatientMutation, UpdatePatientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePatientMutation, UpdatePatientMutationVariables>(UpdatePatientDocument, options);
      }
export type UpdatePatientMutationHookResult = ReturnType<typeof useUpdatePatientMutation>;
export type UpdatePatientMutationResult = Apollo.MutationResult<UpdatePatientMutation>;
export type UpdatePatientMutationOptions = Apollo.BaseMutationOptions<UpdatePatientMutation, UpdatePatientMutationVariables>;
export const DeletePatientDocument = gql`
    mutation deletePatient($input: DeletePatientInput!) {
  deletePatient(input: $input)
}
    `;
export type DeletePatientMutationFn = Apollo.MutationFunction<DeletePatientMutation, DeletePatientMutationVariables>;
export type DeletePatientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeletePatientMutation, DeletePatientMutationVariables>
    } & TChildProps;
export function withDeletePatient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeletePatientMutation,
  DeletePatientMutationVariables,
  DeletePatientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeletePatientMutation, DeletePatientMutationVariables, DeletePatientProps<TChildProps, TDataName>>(DeletePatientDocument, {
      alias: 'deletePatient',
      ...operationOptions
    });
};

/**
 * __useDeletePatientMutation__
 *
 * To run a mutation, you first call `useDeletePatientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePatientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePatientMutation, { data, loading, error }] = useDeletePatientMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePatientMutation(baseOptions?: Apollo.MutationHookOptions<DeletePatientMutation, DeletePatientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePatientMutation, DeletePatientMutationVariables>(DeletePatientDocument, options);
      }
export type DeletePatientMutationHookResult = ReturnType<typeof useDeletePatientMutation>;
export type DeletePatientMutationResult = Apollo.MutationResult<DeletePatientMutation>;
export type DeletePatientMutationOptions = Apollo.BaseMutationOptions<DeletePatientMutation, DeletePatientMutationVariables>;
export const DeleteManyPatientDocument = gql`
    mutation deleteManyPatient($input: DeleteManyPatientInput!) {
  deleteManyPatient(input: $input)
}
    `;
export type DeleteManyPatientMutationFn = Apollo.MutationFunction<DeleteManyPatientMutation, DeleteManyPatientMutationVariables>;
export type DeleteManyPatientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyPatientMutation, DeleteManyPatientMutationVariables>
    } & TChildProps;
export function withDeleteManyPatient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyPatientMutation,
  DeleteManyPatientMutationVariables,
  DeleteManyPatientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyPatientMutation, DeleteManyPatientMutationVariables, DeleteManyPatientProps<TChildProps, TDataName>>(DeleteManyPatientDocument, {
      alias: 'deleteManyPatient',
      ...operationOptions
    });
};

/**
 * __useDeleteManyPatientMutation__
 *
 * To run a mutation, you first call `useDeleteManyPatientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyPatientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyPatientMutation, { data, loading, error }] = useDeleteManyPatientMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyPatientMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyPatientMutation, DeleteManyPatientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyPatientMutation, DeleteManyPatientMutationVariables>(DeleteManyPatientDocument, options);
      }
export type DeleteManyPatientMutationHookResult = ReturnType<typeof useDeleteManyPatientMutation>;
export type DeleteManyPatientMutationResult = Apollo.MutationResult<DeleteManyPatientMutation>;
export type DeleteManyPatientMutationOptions = Apollo.BaseMutationOptions<DeleteManyPatientMutation, DeleteManyPatientMutationVariables>;
export type CreatePatientMutationVariables = Types.Exact<{
  input: Types.CreatePatientInput;
}>;


export type CreatePatientMutation = Pick<Types.Mutation, 'createPatient'>;

export type UpdatePatientMutationVariables = Types.Exact<{
  input: Types.UpdatePatientInput;
}>;


export type UpdatePatientMutation = Pick<Types.Mutation, 'updatePatient'>;

export type DeletePatientMutationVariables = Types.Exact<{
  input: Types.DeletePatientInput;
}>;


export type DeletePatientMutation = Pick<Types.Mutation, 'deletePatient'>;

export type DeleteManyPatientMutationVariables = Types.Exact<{
  input: Types.DeleteManyPatientInput;
}>;


export type DeleteManyPatientMutation = Pick<Types.Mutation, 'deleteManyPatient'>;
