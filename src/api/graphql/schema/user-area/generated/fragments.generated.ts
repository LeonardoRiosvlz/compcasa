import * as Types from '../../types';

import { gql } from '@apollo/client';
export const UserAreaFragmentFragmentDoc = gql`
    fragment UserAreaFragment on UserAreaResponse {
  id
  name
  description
  createdAt
  updatedAt
}
    `;
export type UserAreaFragmentFragment = Pick<Types.UserAreaResponse, 'id' | 'name' | 'description' | 'createdAt' | 'updatedAt'>;
