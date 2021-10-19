import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    Create__name__Document,
    Update__name__Document,
    Delete__name__Document,
    DeleteMany__name__Document,
    Create__name__MutationVariables,
    Delete__name__MutationVariables,
    DeleteMany__name__MutationVariables,
    Update__name__MutationVariables,
} from 'api/graphql/schema/__name__(kebabCase)/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAll__name__Document,
    GetOne__name__Document,
    GetPaginated__name__Document,
    GetAll__name__QueryVariables,
    GetOne__name__QueryVariables,
    GetPaginated__name__QueryVariables,

} from 'api/graphql/schema/__name__(kebabCase)/generated/queries.generated';

import {__name__} from "./types/__name__(kebabCase).types";

export class __name__Repository extends GraphqlRepository<__name__> {


    constructor() {
        super({
            create: {query: Create__name__Document},
            update: {query: Update__name__Document},
            delete: {query: Delete__name__Document},
            deleteMany: {query: DeleteMany__name__Document},
            findAll: {query: GetAll__name__Document},
            findOne: {query: GetOne__name__Document},
            findPaginated: {query: GetPaginated__name__Document},
        });
    }


    async create(params: Create__name__MutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: Delete__name__MutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteMany__name__MutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: Update__name__MutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAll__name__QueryVariables): Promise<Array<__name__>> {
        return super.findAll(params);
    }

    findOne(params: GetOne__name__QueryVariables): Promise<__name__> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginated__name__QueryVariables): Promise<IPaginatedEntity<__name__>> {
        return super.findPaginated(params);
    }

}
