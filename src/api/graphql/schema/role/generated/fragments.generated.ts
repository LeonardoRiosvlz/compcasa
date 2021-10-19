import * as Types from '../../types';

import { gql } from '@apollo/client';
export const PermitFragmentFragmentDoc = gql`
    fragment PermitFragment on PermitsResponse {
  action
  module
}
    `;
export const RoleFragmentFragmentDoc = gql`
    fragment RoleFragment on RoleResponse {
  id
  name
  description
  permits {
    ...PermitFragment
  }
  createdAt
  updatedAt
}
    ${PermitFragmentFragmentDoc}`;
export const AuthRoleFragmentFragmentDoc = gql`
    fragment AuthRoleFragment on AuthRoleResponse {
  id
  name
  permits {
    ...PermitFragment
  }
}
    ${PermitFragmentFragmentDoc}`;
export const AvailablePermitsFragmentFragmentDoc = gql`
    fragment AvailablePermitsFragment on AvailablePermitsResponse {
  actions
  module
}
    `;
export type RoleFragmentFragment = (
  Pick<Types.RoleResponse, 'id' | 'name' | 'description' | 'createdAt' | 'updatedAt'>
  & { permits: Array<PermitFragmentFragment> }
);

export type PermitFragmentFragment = Pick<Types.PermitsResponse, 'action' | 'module'>;

export type AuthRoleFragmentFragment = (
  Pick<Types.AuthRoleResponse, 'id' | 'name'>
  & { permits: Array<PermitFragmentFragment> }
);

export type AvailablePermitsFragmentFragment = Pick<Types.AvailablePermitsResponse, 'actions' | 'module'>;
