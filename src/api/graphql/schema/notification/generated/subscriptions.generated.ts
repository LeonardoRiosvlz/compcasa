import * as Types from '../../types';

import { NotificationFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { NotificationFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const OnCreateNotificationDocument = gql`
    subscription onCreateNotification($toUser: String!) {
  onCreateNotification(toUser: $toUser) {
    ...NotificationFragment
  }
}
    ${NotificationFragmentFragmentDoc}`;
export type OnCreateNotificationProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<OnCreateNotificationSubscription, OnCreateNotificationSubscriptionVariables>
    } & TChildProps;
export function withOnCreateNotification<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  OnCreateNotificationSubscription,
  OnCreateNotificationSubscriptionVariables,
  OnCreateNotificationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withSubscription<TProps, OnCreateNotificationSubscription, OnCreateNotificationSubscriptionVariables, OnCreateNotificationProps<TChildProps, TDataName>>(OnCreateNotificationDocument, {
      alias: 'onCreateNotification',
      ...operationOptions
    });
};

/**
 * __useOnCreateNotificationSubscription__
 *
 * To run a query within a React component, call `useOnCreateNotificationSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateNotificationSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateNotificationSubscription({
 *   variables: {
 *      toUser: // value for 'toUser'
 *   },
 * });
 */
export function useOnCreateNotificationSubscription(baseOptions: Apollo.SubscriptionHookOptions<OnCreateNotificationSubscription, OnCreateNotificationSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnCreateNotificationSubscription, OnCreateNotificationSubscriptionVariables>(OnCreateNotificationDocument, options);
      }
export type OnCreateNotificationSubscriptionHookResult = ReturnType<typeof useOnCreateNotificationSubscription>;
export type OnCreateNotificationSubscriptionResult = Apollo.SubscriptionResult<OnCreateNotificationSubscription>;
export type OnCreateNotificationSubscriptionVariables = Types.Exact<{
  toUser: Types.Scalars['String'];
}>;


export type OnCreateNotificationSubscription = { onCreateNotification?: Types.Maybe<NotificationFragmentFragment> };
