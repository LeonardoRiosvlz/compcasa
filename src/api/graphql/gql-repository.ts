import {IRepository} from 'api/interfaces/IRepository';
import {IGraphqlService} from 'api/graphql/interfaces/IGraphqlService';
import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {ApolloGraphqlService, GQLSchema} from 'api/graphql/apollo-graphql.service';


export type RepositoryConfig = {
    create?: {
        query: GQLSchema;
    };

    delete?: {
        query: GQLSchema;
    };

    deleteMany?: {
        query: GQLSchema;
    };

    update?: {
        query: GQLSchema;
    };

    updateMany?: {
        query: GQLSchema;
    };

    findOne?: {
        query: GQLSchema;
    };

    findById?: {
        query: GQLSchema;
    };

    findAll?: {
        query: GQLSchema;
    };

    findPaginated?: {
        query: GQLSchema;
    };
}


export class GraphqlRepository<Entity> implements IRepository<Entity> {

    protected config: RepositoryConfig = {};
    protected _apolloGraphqlService: IGraphqlService;

    constructor(cfg?: RepositoryConfig) {
        this._apolloGraphqlService = new ApolloGraphqlService();
        if (cfg) {
            this.config = cfg
        }
    }

    setConfig(cfg: RepositoryConfig) {
        this.config = cfg;
    }

    async create(params: any): Promise<void> {
        if (!this.config.create) throw new Error('Create Mutation not defined!');
        return new Promise((resolve, reject) => {
                // @ts-ignore
                this._apolloGraphqlService.mutationBuilder<void, typeof params>(this.config.create.query, params).then(() =>
                    resolve()
                ).catch((err: any) => reject(err));
            }
        );
    }


    async delete(params: any): Promise<void> {
        if (!this.config.delete) throw new Error('Delete Mutation not defined!');

        return new Promise((resolve, reject) => {
                // @ts-ignore
                this._apolloGraphqlService.mutationBuilder<void, typeof params>(this.config.delete.query, params).then(() =>
                    resolve()
                ).catch((err: any) => reject(err));
            }
        );
    }

    async deleteMany(params: any): Promise<void> {
        if (!this.config.deleteMany) throw new Error('Delete Many Mutation not defined!');
        return new Promise((resolve, reject) => {
                // @ts-ignore
                this._apolloGraphqlService.mutationBuilder<void, typeof params>(this.config.deleteMany.query, params).then(() =>
                    resolve()
                ).catch((err: any) => reject(err));
            }
        );
    }


    update(params: any): Promise<void> {
        if (!this.config.update) throw new Error('Update Mutation not defined!');
        return new Promise((resolve, reject) => {
                // @ts-ignore
            this._apolloGraphqlService.mutationBuilder<void, typeof params>(this.config.update.query, params).then(() =>
                    resolve()
                ).catch((err: any) => reject(err));
            }
        );
    }

    updateMany(params: any): Promise<void> {
        if (!this.config.updateMany) throw new Error('Update Many Mutation not defined!');
        return new Promise((resolve, reject) => {
                // @ts-ignore
            this._apolloGraphqlService.mutationBuilder<void, typeof params>(this.config.updateMany.query, params).then(() =>
                    resolve()
                ).catch((err: any) => reject(err));
            }
        );
    }


    findOne(params: any): Promise<Entity> {
        if (!this.config.findOne) throw new Error('FindOne Query not defined!');
        return new Promise((resolve, reject) => {
                // @ts-ignore
            this._apolloGraphqlService.queryBuilder<Entity, typeof params>(this.config.findOne.query, params).then((result) =>
                    resolve(result)
                ).catch((err: any) => reject(err));
            }
        );
    }

    findById(params: any): Promise<Entity> {
        if (!this.config.findById) throw new Error('FindById Query not defined!');
        return new Promise((resolve, reject) => {
                // @ts-ignore
            this._apolloGraphqlService.queryBuilder<Entity, typeof params>(this.config.findById.query, params).then((result) =>
                    resolve(result)
                ).catch((err: any) => reject(err));
            }
        );
    }


    findAll(params: any): Promise<Array<Entity>> {
        if (!this.config.findAll) throw new Error('FindAll Query not defined!');
        return new Promise((resolve, reject) => {
                // @ts-ignore
            this._apolloGraphqlService.queryBuilder<Array<Entity>, typeof params>(this.config.findAll.query, params).then((result) =>
                    resolve(result)
                ).catch((err: any) => reject(err));
            }
        );
    }


    findPaginated(params: any): Promise<IPaginatedEntity<Entity>> {
        if (!this.config.findPaginated) throw new Error('FindPaginated Query not defined!');
        return new Promise((resolve, reject) => {
                // @ts-ignore
            this._apolloGraphqlService.queryBuilder<IPaginatedEntity<Entity>, typeof params>(this.config.findPaginated.query, params).then((result) =>
                    resolve(result)
                ).catch((err: any) => reject(err));
            }
        );
    }
}




