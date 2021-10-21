import * as Types from '../../types';

import { SolvedEntityFragmentFragment, CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { SolvedEntityFragmentFragmentDoc, CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const QuickMedicalHistoryFragmentFragmentDoc = gql`
    fragment QuickMedicalHistoryFragment on QuickMedicalHistoryResponse {
  id
  patient {
    ...SolvedEntityFragment
  }
  quickMedicalHistoryType
  companionsName
  companionsPhoneNumber
  companionsType
  responsibleName
  responsiblePhoneNumber
  responsibleOfficeNumber
  relationship
  currentIllness
  createdAt
  updatedAt
}
    ${SolvedEntityFragmentFragmentDoc}`;
export type QuickMedicalHistoryFragmentFragment = (
  Pick<Types.QuickMedicalHistoryResponse, 'id' | 'quickMedicalHistoryType' | 'companionsName' | 'companionsPhoneNumber' | 'companionsType' | 'responsibleName' | 'responsiblePhoneNumber' | 'responsibleOfficeNumber' | 'relationship' | 'currentIllness' | 'createdAt' | 'updatedAt'>
  & { patient?: Types.Maybe<SolvedEntityFragmentFragment> }
);
