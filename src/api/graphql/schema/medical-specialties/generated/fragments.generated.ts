import * as Types from '../../types';

import { gql } from '@apollo/client';
export const MedicalSpecialtiesFragmentFragmentDoc = gql`
    fragment MedicalSpecialtiesFragment on MedicalSpecialtiesResponse {
  id
  name
  description
  isActive
  createdAt
  updatedAt
}
    `;
export type MedicalSpecialtiesFragmentFragment = Pick<Types.MedicalSpecialtiesResponse, 'id' | 'name' | 'description' | 'isActive' | 'createdAt' | 'updatedAt'>;
