import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateUserAreaDocument,
    UpdateUserAreaDocument,
    DeleteUserAreaDocument,
    DeleteManyUserAreaDocument,
    CreateUserAreaMutationVariables,
    DeleteUserAreaMutationVariables,
    DeleteManyUserAreaMutationVariables,
    UpdateUserAreaMutationVariables,
} from 'api/graphql/schema/user-area/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllUserAreaDocument,
    GetOneUserAreaDocument,
    GetPaginatedUserAreaDocument,
    GetAllUserAreaQueryVariables,
    GetOneUserAreaQueryVariables,
    GetPaginatedUserAreaQueryVariables,

} from 'api/graphql/schema/user-area/generated/queries.generated';

import {UserArea} from "./types/user-area.types";

export class UserAreaRepository extends GraphqlRepository<UserArea> {


    constructor() {
        super({
            create: {query: CreateUserAreaDocument},
            update: {query: UpdateUserAreaDocument},
            delete: {query: DeleteUserAreaDocument},
            deleteMany: {query: DeleteManyUserAreaDocument},
            findAll: {query: GetAllUserAreaDocument},
            findOne: {query: GetOneUserAreaDocument},
            findPaginated: {query: GetPaginatedUserAreaDocument},
        });
    }


    async create(params: CreateUserAreaMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteUserAreaMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyUserAreaMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateUserAreaMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllUserAreaQueryVariables): Promise<Array<UserArea>> {
        return super.findAll(params);
    }

    findOne(params: GetOneUserAreaQueryVariables): Promise<UserArea> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedUserAreaQueryVariables): Promise<IPaginatedEntity<UserArea>> {
        return super.findPaginated(params);
    }

}
