import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateMedicalSpecialtiesDocument,
    UpdateMedicalSpecialtiesDocument,
    DeleteMedicalSpecialtiesDocument,
    DeleteManyMedicalSpecialtiesDocument,
    CreateMedicalSpecialtiesMutationVariables,
    DeleteMedicalSpecialtiesMutationVariables,
    DeleteManyMedicalSpecialtiesMutationVariables,
    UpdateMedicalSpecialtiesMutationVariables,
} from 'api/graphql/schema/medical-specialties/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllMedicalSpecialtiesDocument,
    GetOneMedicalSpecialtiesDocument,
    GetPaginatedMedicalSpecialtiesDocument,
    GetAllMedicalSpecialtiesQueryVariables,
    GetOneMedicalSpecialtiesQueryVariables,
    GetPaginatedMedicalSpecialtiesQueryVariables,

} from 'api/graphql/schema/medical-specialties/generated/queries.generated';

import {MedicalSpecialties} from "./types/medical-specialties.types";

export class MedicalSpecialtiesRepository extends GraphqlRepository<MedicalSpecialties> {


    constructor() {
        super({
            create: {query: CreateMedicalSpecialtiesDocument},
            update: {query: UpdateMedicalSpecialtiesDocument},
            delete: {query: DeleteMedicalSpecialtiesDocument},
            deleteMany: {query: DeleteManyMedicalSpecialtiesDocument},
            findAll: {query: GetAllMedicalSpecialtiesDocument},
            findOne: {query: GetOneMedicalSpecialtiesDocument},
            findPaginated: {query: GetPaginatedMedicalSpecialtiesDocument},
        });
    }


    async create(params: CreateMedicalSpecialtiesMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteMedicalSpecialtiesMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyMedicalSpecialtiesMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateMedicalSpecialtiesMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllMedicalSpecialtiesQueryVariables): Promise<Array<MedicalSpecialties>> {
        return super.findAll(params);
    }

    findOne(params: GetOneMedicalSpecialtiesQueryVariables): Promise<MedicalSpecialties> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedMedicalSpecialtiesQueryVariables): Promise<IPaginatedEntity<MedicalSpecialties>> {
        return super.findPaginated(params);
    }

}
