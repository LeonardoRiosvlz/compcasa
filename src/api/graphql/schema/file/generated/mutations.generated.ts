import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateUploadedFileDocument = gql`
    mutation createUploadedFile($input: CreateUploadedFileInput!) {
  createUploadedFile(input: $input)
}
    `;
export type CreateUploadedFileMutationFn = Apollo.MutationFunction<CreateUploadedFileMutation, CreateUploadedFileMutationVariables>;
export type CreateUploadedFileProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateUploadedFileMutation, CreateUploadedFileMutationVariables>
    } & TChildProps;
export function withCreateUploadedFile<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUploadedFileMutation,
  CreateUploadedFileMutationVariables,
  CreateUploadedFileProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUploadedFileMutation, CreateUploadedFileMutationVariables, CreateUploadedFileProps<TChildProps, TDataName>>(CreateUploadedFileDocument, {
      alias: 'createUploadedFile',
      ...operationOptions
    });
};

/**
 * __useCreateUploadedFileMutation__
 *
 * To run a mutation, you first call `useCreateUploadedFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUploadedFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUploadedFileMutation, { data, loading, error }] = useCreateUploadedFileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUploadedFileMutation(baseOptions?: Apollo.MutationHookOptions<CreateUploadedFileMutation, CreateUploadedFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUploadedFileMutation, CreateUploadedFileMutationVariables>(CreateUploadedFileDocument, options);
      }
export type CreateUploadedFileMutationHookResult = ReturnType<typeof useCreateUploadedFileMutation>;
export type CreateUploadedFileMutationResult = Apollo.MutationResult<CreateUploadedFileMutation>;
export type CreateUploadedFileMutationOptions = Apollo.BaseMutationOptions<CreateUploadedFileMutation, CreateUploadedFileMutationVariables>;
export type CreateUploadedFileMutationVariables = Types.Exact<{
  input: Types.CreateUploadedFileInput;
}>;


export type CreateUploadedFileMutation = Pick<Types.Mutation, 'createUploadedFile'>;
