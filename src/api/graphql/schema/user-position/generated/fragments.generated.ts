import * as Types from '../../types';

import { gql } from '@apollo/client';
export const UserPositionFragmentFragmentDoc = gql`
    fragment UserPositionFragment on UserPositionResponse {
  id
  name
  isActive
  description
  createdAt
  updatedAt
}
    `;
export type UserPositionFragmentFragment = Pick<Types.UserPositionResponse, 'id' | 'name' | 'isActive' | 'description' | 'createdAt' | 'updatedAt'>;
