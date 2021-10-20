import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreatePatientDocument,
    UpdatePatientDocument,
    DeletePatientDocument,
    DeleteManyPatientDocument,
    CreatePatientMutationVariables,
    DeletePatientMutationVariables,
    DeleteManyPatientMutationVariables,
    UpdatePatientMutationVariables,
} from 'api/graphql/schema/patient/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllPatientDocument,
    GetOnePatientDocument,
    GetPaginatedPatientDocument,
    GetAllPatientQueryVariables,
    GetOnePatientQueryVariables,
    GetPaginatedPatientQueryVariables,

} from 'api/graphql/schema/patient/generated/queries.generated';

import {Patient} from "./types/patient.types";

export class PatientRepository extends GraphqlRepository<Patient> {


    constructor() {
        super({
            create: {query: CreatePatientDocument},
            update: {query: UpdatePatientDocument},
            delete: {query: DeletePatientDocument},
            deleteMany: {query: DeleteManyPatientDocument},
            findAll: {query: GetAllPatientDocument},
            findOne: {query: GetOnePatientDocument},
            findPaginated: {query: GetPaginatedPatientDocument},
        });
    }


    async create(params: CreatePatientMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeletePatientMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyPatientMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdatePatientMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllPatientQueryVariables): Promise<Array<Patient>> {
        return super.findAll(params);
    }

    findOne(params: GetOnePatientQueryVariables): Promise<Patient> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedPatientQueryVariables): Promise<IPaginatedEntity<Patient>> {
        return super.findPaginated(params);
    }

}
