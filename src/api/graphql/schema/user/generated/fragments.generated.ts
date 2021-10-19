import * as Types from '../../types';

import { SolvedEntityFragmentFragment, CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { AuthRoleFragmentFragment } from '../../role/generated/fragments.generated';
import { gql } from '@apollo/client';
import { SolvedEntityFragmentFragmentDoc, CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
import { AuthRoleFragmentFragmentDoc } from '../../role/generated/fragments.generated';
export const ProfileFragmentFragmentDoc = gql`
    fragment ProfileFragment on ProfileResponse {
  aboutMe
  birthDay
  country
  city
  gender
  personalWeb
  address
  state
  zipCode
  phoneNumber
  btcWallet
  tronWallet
  area {
    ...SolvedEntityFragment
  }
  position {
    ...SolvedEntityFragment
  }
}
    ${SolvedEntityFragmentFragmentDoc}`;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on UserResponse {
  id
  email
  firstname
  isActive
  lastname
  roles {
    ...SolvedEntityFragment
  }
  verified
  username
  avatarFile {
    ...CloudFileFragment
  }
  profile {
    ...ProfileFragment
  }
}
    ${SolvedEntityFragmentFragmentDoc}
${CloudFileFragmentFragmentDoc}
${ProfileFragmentFragmentDoc}`;
export const AuthUserFragmentFragmentDoc = gql`
    fragment AuthUserFragment on AuthUserResponse {
  email
  firstname
  lastname
  isActive
  isAdmin
  roles {
    ...AuthRoleFragment
  }
  userId
  username
  verified
  avatarFile {
    ...CloudFileFragment
  }
}
    ${AuthRoleFragmentFragmentDoc}
${CloudFileFragmentFragmentDoc}`;
export type UserFragmentFragment = (
  Pick<Types.UserResponse, 'id' | 'email' | 'firstname' | 'isActive' | 'lastname' | 'verified' | 'username'>
  & { roles: Array<SolvedEntityFragmentFragment>, avatarFile?: Types.Maybe<CloudFileFragmentFragment>, profile?: Types.Maybe<ProfileFragmentFragment> }
);

export type ProfileFragmentFragment = (
  Pick<Types.ProfileResponse, 'aboutMe' | 'birthDay' | 'country' | 'city' | 'gender' | 'personalWeb' | 'address' | 'state' | 'zipCode' | 'phoneNumber' | 'btcWallet' | 'tronWallet'>
  & { area?: Types.Maybe<SolvedEntityFragmentFragment>, position?: Types.Maybe<SolvedEntityFragmentFragment> }
);

export type AuthUserFragmentFragment = (
  Pick<Types.AuthUserResponse, 'email' | 'firstname' | 'lastname' | 'isActive' | 'isAdmin' | 'userId' | 'username' | 'verified'>
  & { roles: Array<AuthRoleFragmentFragment>, avatarFile?: Types.Maybe<CloudFileFragmentFragment> }
);
