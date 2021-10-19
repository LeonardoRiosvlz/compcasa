import * as Types from '../../types';

import { SolvedEntityFragmentFragment, CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { SolvedEntityFragmentFragmentDoc, CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const HeadquartersFragmentFragmentDoc = gql`
    fragment HeadquartersFragment on HeadquartersResponse {
  id
  name
  code
  city
  email
  phoneNumber
  address
  manager {
    ...SolvedEntityFragment
  }
  isActive
  createdAt
  updatedAt
}
    ${SolvedEntityFragmentFragmentDoc}`;
export type HeadquartersFragmentFragment = (
  Pick<Types.HeadquartersResponse, 'id' | 'name' | 'code' | 'city' | 'email' | 'phoneNumber' | 'address' | 'isActive' | 'createdAt' | 'updatedAt'>
  & { manager: SolvedEntityFragmentFragment }
);
