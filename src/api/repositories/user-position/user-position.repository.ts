import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateUserPositionDocument,
    UpdateUserPositionDocument,
    DeleteUserPositionDocument,
    DeleteManyUserPositionDocument,
    CreateUserPositionMutationVariables,
    DeleteUserPositionMutationVariables,
    DeleteManyUserPositionMutationVariables,
    UpdateUserPositionMutationVariables,
} from 'api/graphql/schema/user-position/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllUserPositionDocument,
    GetOneUserPositionDocument,
    GetPaginatedUserPositionDocument,
    GetAllUserPositionQueryVariables,
    GetOneUserPositionQueryVariables,
    GetPaginatedUserPositionQueryVariables,

} from 'api/graphql/schema/user-position/generated/queries.generated';

import {UserPosition} from "./types/user-position.types";

export class UserPositionRepository extends GraphqlRepository<UserPosition> {


    constructor() {
        super({
            create: {query: CreateUserPositionDocument},
            update: {query: UpdateUserPositionDocument},
            delete: {query: DeleteUserPositionDocument},
            deleteMany: {query: DeleteManyUserPositionDocument},
            findAll: {query: GetAllUserPositionDocument},
            findOne: {query: GetOneUserPositionDocument},
            findPaginated: {query: GetPaginatedUserPositionDocument},
        });
    }


    async create(params: CreateUserPositionMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteUserPositionMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyUserPositionMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateUserPositionMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllUserPositionQueryVariables): Promise<Array<UserPosition>> {
        return super.findAll(params);
    }

    findOne(params: GetOneUserPositionQueryVariables): Promise<UserPosition> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedUserPositionQueryVariables): Promise<IPaginatedEntity<UserPosition>> {
        return super.findPaginated(params);
    }

}
