import * as Types from '../../types';

import { CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const TenantFragmentFragmentDoc = gql`
    fragment TenantFragment on TenantResponse {
  id
  name
  code
  isActive
  info {
    email
    country
    nit
    webSite
    description
    address
    phoneNumber
    currency
    responsible {
      email
      firstname
      lastname
      phoneNumber
    }
    logoFile {
      ...CloudFileFragment
    }
  }
  createdAt
  updatedAt
}
    ${CloudFileFragmentFragmentDoc}`;
export const SimplifiedTenantFragmentFragmentDoc = gql`
    fragment SimplifiedTenantFragment on SimplifiedTenantResponse {
  id
  name
  code
}
    `;
export type TenantFragmentFragment = (
  Pick<Types.TenantResponse, 'id' | 'name' | 'code' | 'isActive' | 'createdAt' | 'updatedAt'>
  & { info?: Types.Maybe<(
    Pick<Types.TenantInfoResponse, 'email' | 'country' | 'nit' | 'webSite' | 'description' | 'address' | 'phoneNumber' | 'currency'>
    & { responsible?: Types.Maybe<Pick<Types.TenantResponsibleResponse, 'email' | 'firstname' | 'lastname' | 'phoneNumber'>>, logoFile?: Types.Maybe<CloudFileFragmentFragment> }
  )> }
);

export type SimplifiedTenantFragmentFragment = Pick<Types.SimplifiedTenantResponse, 'id' | 'name' | 'code'>;
