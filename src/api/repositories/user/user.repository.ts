import {
    CreateUserDocument,
    CreateUserMutationVariables,
    DeleteUserDocument,
    DeleteUserMutationVariables,
    DeleteManyUserDocument,
    DeleteManyUserMutationVariables,
    UpdateUserDocument,
    UpdateUserMutationVariables,
    UpdateMeDocument,
    UpdateMeMutationVariables
} from 'api/graphql/schema/user/generated/mutations.generated';
import {
    GetPaginatedUserDocument, GetPaginatedUserQueryVariables,
    GetAllUsersDocument, GetAllUsersQueryVariables,
    GetMyProfileDocument, GetUserProfileDocument, GetUserProfileQueryVariables, GetOneUserDocument
} from 'api/graphql/schema/user/generated/queries.generated';
import {GraphqlRepository} from 'api/graphql/gql-repository';
import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {IUserRepository,} from './interfaces/IUserRepository';
import {Profile, User} from './types/user.types';


export class UserRepository extends GraphqlRepository<User> implements IUserRepository {


    constructor() {
        super({
            create: {query: CreateUserDocument},
            update: {query: UpdateUserDocument},
            delete: {query: DeleteUserDocument},
            deleteMany: {query: DeleteManyUserDocument},
            findPaginated: {query: GetPaginatedUserDocument},
            findAll: {query: GetAllUsersDocument},
            findOne: {query: GetOneUserDocument}
        });
    }


    async create(params: CreateUserMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteUserMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyUserMutationVariables): Promise<void> {
        return super.delete(params);
    }

    update(params: UpdateUserMutationVariables): Promise<void> {
        return super.update(params);
    }

    findPaginated(params: GetPaginatedUserQueryVariables): Promise<IPaginatedEntity<User>> {
        return super.findPaginated(params);
    }

    findAll(params: GetAllUsersQueryVariables): Promise<Array<User>> {
        return super.findAll(params);
    }

    updateMe(input: UpdateMeMutationVariables): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this._apolloGraphqlService.mutationBuilder<void, UpdateMeMutationVariables>(
                UpdateMeDocument,
                input
            ).then(() => resolve()).catch((err) => reject(err));
        });
    }

    getMyProfile(): Promise<Profile> {
        return new Promise((resolve, reject) => {
            this._apolloGraphqlService.queryBuilder<Profile, void>(
                GetMyProfileDocument,
            ).then((result) => resolve(result)).catch((err) => reject(err));
        });
    }

    getUserProfile(userId: string): Promise<Profile> {
        return new Promise((resolve, reject) => {
            this._apolloGraphqlService.queryBuilder<Profile, GetUserProfileQueryVariables>(
                GetUserProfileDocument,
                {userId}
            ).then((result) => resolve(result)).catch((err) => reject(err));
        });
    }

}

