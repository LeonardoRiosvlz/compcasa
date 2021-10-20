import * as Types from '../../types';

import { gql } from '@apollo/client';
export const PatientFragmentFragmentDoc = gql`
    fragment PatientFragment on PatientResponse {
  id
  lastName
  firstName
  lastSurName
  firstSurName
  dateOfBirth
  gender
  documentType
  documentNumber
  placeOfBirth
  linkedType
  affiliateType
  insuranceType
  insuranceName
  maritalStatus
  homeAddress
  neighborhood
  municipality
  homePhone
  officePhone
  occupation
  email
  createdAt
  updatedAt
}
    `;
export type PatientFragmentFragment = Pick<Types.PatientResponse, 'id' | 'lastName' | 'firstName' | 'lastSurName' | 'firstSurName' | 'dateOfBirth' | 'gender' | 'documentType' | 'documentNumber' | 'placeOfBirth' | 'linkedType' | 'affiliateType' | 'insuranceType' | 'insuranceName' | 'maritalStatus' | 'homeAddress' | 'neighborhood' | 'municipality' | 'homePhone' | 'officePhone' | 'occupation' | 'email' | 'createdAt' | 'updatedAt'>;
