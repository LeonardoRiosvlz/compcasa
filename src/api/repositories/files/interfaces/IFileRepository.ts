import { IRepository } from 'api/interfaces/IRepository';
import {AppFile, SignedWriteUrl} from "../types/file.types";
import {GetUploadSignedUrlInput} from "../../../graphql/schema/types";


export interface IFileRepository extends IRepository<AppFile> {
	getSignedUrl(params: GetUploadSignedUrlInput): Promise<SignedWriteUrl>;
}

