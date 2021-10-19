import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateHeadquartersDocument,
    UpdateHeadquartersDocument,
    DeleteHeadquartersDocument,
    DeleteManyHeadquartersDocument,
    CreateHeadquartersMutationVariables,
    DeleteHeadquartersMutationVariables,
    DeleteManyHeadquartersMutationVariables,
    UpdateHeadquartersMutationVariables,
} from 'api/graphql/schema/headquarters/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllHeadquartersDocument,
    GetOneHeadquartersDocument,
    GetPaginatedHeadquartersDocument,
    GetAllHeadquartersQueryVariables,
    GetOneHeadquartersQueryVariables,
    GetPaginatedHeadquartersQueryVariables,

} from 'api/graphql/schema/headquarters/generated/queries.generated';

import {Headquarters} from "./types/headquarters.types";

export class HeadquartersRepository extends GraphqlRepository<Headquarters> {


    constructor() {
        super({
            create: {query: CreateHeadquartersDocument},
            update: {query: UpdateHeadquartersDocument},
            delete: {query: DeleteHeadquartersDocument},
            deleteMany: {query: DeleteManyHeadquartersDocument},
            findAll: {query: GetAllHeadquartersDocument},
            findOne: {query: GetOneHeadquartersDocument},
            findPaginated: {query: GetPaginatedHeadquartersDocument},
        });
    }


    async create(params: CreateHeadquartersMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteHeadquartersMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyHeadquartersMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateHeadquartersMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllHeadquartersQueryVariables): Promise<Array<Headquarters>> {
        return super.findAll(params);
    }

    findOne(params: GetOneHeadquartersQueryVariables): Promise<Headquarters> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedHeadquartersQueryVariables): Promise<IPaginatedEntity<Headquarters>> {
        return super.findPaginated(params);
    }

}
