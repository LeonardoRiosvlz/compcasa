import { GraphqlRepository } from 'api/graphql/gql-repository';
import {
    CreateTenantDocument,
    UpdateTenantDocument,
    DeleteTenantDocument, UpdateTenantMutationVariables, DeleteTenantMutationVariables, CreateTenantMutationVariables
} from 'api/graphql/schema/tenant/generated/mutations.generated';
import {
    GetAllTenantDocument, GetAllTenantQueryVariables,
    GetAllSimplifiedTenantsInfoDocument
} from 'api/graphql/schema/tenant/generated/queries.generated';

import { Tenant, SimplifiedTenant } from "./types/tenant.types";


export class TenantRepository extends GraphqlRepository<Tenant> {


    constructor() {
        super({
            create: { query: CreateTenantDocument },
            update: { query: UpdateTenantDocument },
            delete: { query: DeleteTenantDocument },
            findAll: { query: GetAllTenantDocument }
        });

    }


    async create(params: CreateTenantMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteTenantMutationVariables): Promise<void> {
        return super.delete(params);
    }

    update(params: UpdateTenantMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllTenantQueryVariables): Promise<Array<Tenant>> {
        return super.findAll(params);
    }

    getTenantsInfo(params: GetAllTenantQueryVariables): Promise<Array<SimplifiedTenant>> {
        return new Promise((resolve, reject) => {
            this._apolloGraphqlService.queryBuilder<Array<SimplifiedTenant>, GetAllTenantQueryVariables>(GetAllSimplifiedTenantsInfoDocument, params).then((res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    }

}
