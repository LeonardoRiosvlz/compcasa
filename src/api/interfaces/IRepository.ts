import { IPaginatedEntity } from './IPaginatedEntity';


export interface IRepository<E> {
	create(...args: Array<any>): Promise<void> | void;
	update(...args: Array<any>): Promise<void> | void;
	updateMany(...args: Array<any>): Promise<void> | void;
	delete(...args: Array<any>): Promise<void> | void;
	deleteMany(...args: Array<any>): Promise<void> | void;
	findOne(...args: Array<any>): Promise<E> | E;
	findById(...args: Array<any>): Promise<E> | E;
	findPaginated(...args: Array<any>): Promise<IPaginatedEntity<E>> | IPaginatedEntity<E>;
	findAll(...args: Array<any>): Promise<Array<E>> | Array<E>;

}


