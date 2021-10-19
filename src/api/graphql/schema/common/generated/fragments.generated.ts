import * as Types from '../../types';

import { gql } from '@apollo/client';
export const SolvedEntityFragmentFragmentDoc = gql`
    fragment SolvedEntityFragment on SolvedEntityResponse {
  id
  identifier
  entityName
  fields {
    field
    value
  }
}
    `;
export const CloudFileFragmentFragmentDoc = gql`
    fragment CloudFileFragment on CloudFileResponse {
  id
  key
  url
}
    `;
export const CloudFileIdFragmentFragmentDoc = gql`
    fragment CloudFileIdFragment on CloudFileIdResponse {
  key
  url
}
    `;
export type SolvedEntityFragmentFragment = (
  Pick<Types.SolvedEntityResponse, 'id' | 'identifier' | 'entityName'>
  & { fields?: Types.Maybe<Array<Pick<Types.EntityFieldsResponse, 'field' | 'value'>>> }
);

export type CloudFileFragmentFragment = Pick<Types.CloudFileResponse, 'id' | 'key' | 'url'>;

export type CloudFileIdFragmentFragment = Pick<Types.CloudFileIdResponse, 'key' | 'url'>;
