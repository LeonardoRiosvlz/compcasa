import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateQuickMedicalHistoryDocument,
    UpdateQuickMedicalHistoryDocument,
    DeleteQuickMedicalHistoryDocument,
    DeleteManyQuickMedicalHistoryDocument,
    CreateQuickMedicalHistoryMutationVariables,
    DeleteQuickMedicalHistoryMutationVariables,
    DeleteManyQuickMedicalHistoryMutationVariables,
    UpdateQuickMedicalHistoryMutationVariables,
} from 'api/graphql/schema/quick-medical-history/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllQuickMedicalHistoryDocument,
    GetOneQuickMedicalHistoryDocument,
    GetPaginatedQuickMedicalHistoryDocument,
    GetAllQuickMedicalHistoryQueryVariables,
    GetOneQuickMedicalHistoryQueryVariables,
    GetPaginatedQuickMedicalHistoryQueryVariables,

} from 'api/graphql/schema/quick-medical-history/generated/queries.generated';

import {QuickMedicalHistory} from "./types/quick-medical-history.types";

export class QuickMedicalHistoryRepository extends GraphqlRepository<QuickMedicalHistory> {


    constructor() {
        super({
            create: {query: CreateQuickMedicalHistoryDocument},
            update: {query: UpdateQuickMedicalHistoryDocument},
            delete: {query: DeleteQuickMedicalHistoryDocument},
            deleteMany: {query: DeleteManyQuickMedicalHistoryDocument},
            findAll: {query: GetAllQuickMedicalHistoryDocument},
            findOne: {query: GetOneQuickMedicalHistoryDocument},
            findPaginated: {query: GetPaginatedQuickMedicalHistoryDocument},
        });
    }


    async create(params: CreateQuickMedicalHistoryMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteQuickMedicalHistoryMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyQuickMedicalHistoryMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateQuickMedicalHistoryMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllQuickMedicalHistoryQueryVariables): Promise<Array<QuickMedicalHistory>> {
        return super.findAll(params);
    }

    findOne(params: GetOneQuickMedicalHistoryQueryVariables): Promise<QuickMedicalHistory> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedQuickMedicalHistoryQueryVariables): Promise<IPaginatedEntity<QuickMedicalHistory>> {
        return super.findPaginated(params);
    }

}
