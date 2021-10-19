import * as Types from '../../types';

import { gql } from '@apollo/client';
export const FileFragmentFragmentDoc = gql`
    fragment FileFragment on FilesResponse {
  id
  bytes
  filename
  key
  status
  storage
  url
  createdAt
  updatedAt
}
    `;
export type FileFragmentFragment = Pick<Types.FilesResponse, 'id' | 'bytes' | 'filename' | 'key' | 'status' | 'storage' | 'url' | 'createdAt' | 'updatedAt'>;
