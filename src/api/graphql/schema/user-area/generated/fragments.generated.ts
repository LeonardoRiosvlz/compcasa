import * as Types from '../../types';

import { gql } from '@apollo/client';
export const UserAreaFragmentFragmentDoc = gql`
    fragment UserAreaFragment on UserAreaResponse {
  id
  name
  isActive
  description
  createdAt
  updatedAt
}
    `;
export type UserAreaFragmentFragment = Pick<Types.UserAreaResponse, 'id' | 'name' | 'isActive' | 'description' | 'createdAt' | 'updatedAt'>;
