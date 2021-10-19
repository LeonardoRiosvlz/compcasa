import {
    CreateUploadedFileDocument,
    CreateUploadedFileMutationVariables,

} from 'api/graphql/schema/file/generated/mutations.generated';
import {
    GetOneFilesDocument,
    GetOneFilesQueryVariables,
    GetPaginatedFilesDocument, GetPaginatedFilesQueryVariables,
    GetSignedUrlDocument,
    GetSignedUrlQueryVariables
} from 'api/graphql/schema/file/generated/queries.generated';
import {GraphqlRepository} from 'api/graphql/gql-repository';
import {IFileRepository} from './interfaces/IFileRepository';
import {AppFile, SignedWriteUrl} from './types/file.types';
import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {GetUploadSignedUrlInput} from 'api/graphql/schema/types';


export class FileRepository extends GraphqlRepository<AppFile> implements IFileRepository {

    constructor() {
        super({
            create: {query: CreateUploadedFileDocument},
            findOne: {query: GetOneFilesDocument},
            findPaginated: {query: GetPaginatedFilesDocument}
        });
    }


    async create(params: CreateUploadedFileMutationVariables): Promise<void> {
        return super.create(params);
    }


    findPaginated(params: GetPaginatedFilesQueryVariables): Promise<IPaginatedEntity<AppFile>> {
        return super.findPaginated(params);
    }

    findOne(params: GetOneFilesQueryVariables): Promise<AppFile> {
        return super.findOne(params);
    }


    getSignedUrl(params: GetUploadSignedUrlInput): Promise<SignedWriteUrl> {
        return new Promise((resolve, reject) => {
            this._apolloGraphqlService.queryBuilder<SignedWriteUrl, GetSignedUrlQueryVariables>(
                GetSignedUrlDocument,
                {
                    input: {
                        ...params
                    }
                }
            ).then((res) => resolve(res)).catch((err) => reject(err));
        });
    }
}

