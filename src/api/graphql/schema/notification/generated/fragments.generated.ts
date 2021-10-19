import * as Types from '../../types';

import { SolvedEntityFragmentFragment, CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { SolvedEntityFragmentFragmentDoc, CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const NotificationFragmentFragmentDoc = gql`
    fragment NotificationFragment on NotificationResponse {
  id
  message {
    es
    en
  }
  type
  toUser {
    ...SolvedEntityFragment
  }
  isRead
  createdAt
}
    ${SolvedEntityFragmentFragmentDoc}`;
export type NotificationFragmentFragment = (
  Pick<Types.NotificationResponse, 'id' | 'type' | 'isRead' | 'createdAt'>
  & { message?: Types.Maybe<Pick<Types.I18nMessageResponse, 'es' | 'en'>>, toUser?: Types.Maybe<SolvedEntityFragmentFragment> }
);
