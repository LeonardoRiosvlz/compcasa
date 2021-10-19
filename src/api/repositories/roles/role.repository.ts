import { GraphqlRepository } from 'api/graphql/gql-repository';
import {
	CreateRoleDocument,
	UpdateRoleDocument,
	DeleteRoleDocument,
	DeleteManyRoleDocument,
	CreateRoleMutationVariables,
	DeleteRoleMutationVariables,
	DeleteManyRoleMutationVariables,
	UpdateRoleMutationVariables,
} from 'api/graphql/schema/role/generated/mutations.generated';


import { IPaginatedEntity } from 'api/interfaces/IPaginatedEntity';
import {	GetAllRoleDocument,
	GetOneRoleDocument,
	GetPaginatedRoleDocument,
	GetAllRoleQueryVariables,
	GetOneRoleQueryVariables,
	GetPaginatedRoleQueryVariables,
	GetAvailablePermitsDocument

} from 'api/graphql/schema/role/generated/queries.generated';

import {AvailablePermit, Role} from "./types/roles.types";



export class RolesRepository extends GraphqlRepository<Role> {


	constructor() {
		super({
			create: { query: CreateRoleDocument },
			update: { query: UpdateRoleDocument },
			delete: { query: DeleteRoleDocument },
			deleteMany: { query: DeleteManyRoleDocument },
			findAll: { query: GetAllRoleDocument },
			findOne: {query: GetOneRoleDocument },
			findPaginated: { query: GetPaginatedRoleDocument },
		});

	}


	async create(params: CreateRoleMutationVariables): Promise<void> {
		return super.create(params);
	}

	async delete(params: DeleteRoleMutationVariables): Promise<void> {
		return super.delete(params);
	}

	async deleteMany(params: DeleteManyRoleMutationVariables): Promise<void> {
		return super.deleteMany(params);
	}

	update(params: UpdateRoleMutationVariables): Promise<void> {
		return super.update(params);
	}

	findAll(params: GetAllRoleQueryVariables): Promise<Array<Role>> {
		return super.findAll(params);
	}

	findOne(params: GetOneRoleQueryVariables): Promise<Role> {
		return super.findOne(params);
	}


	findPaginated(params: GetPaginatedRoleQueryVariables): Promise<IPaginatedEntity<Role>> {
		return super.findPaginated(params);
	}

	getAvailablePermits(): Promise<Array<AvailablePermit>> {
		return new Promise((resolve, reject) => {
			this._apolloGraphqlService.queryBuilder<Array<AvailablePermit>, null>(
				GetAvailablePermitsDocument
			).then((result) => resolve(result)).catch((err) => reject(err));
		});
	}

}

