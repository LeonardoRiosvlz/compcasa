import { INotificationRepository } from './interfaces/INotificationRepository';
import { AppNotification } from './types/notification.types';
import { GraphqlRepository } from 'api/graphql/gql-repository';

import {
	GetNotificationsDocument, GetNotificationsQueryVariables,
	GetPaginatedNotificationsQueryVariables
} from 'api/graphql/schema/notification/generated/queries.generated';

import { IPaginatedEntity } from 'api/interfaces/IPaginatedEntity';
import { GetPaginatedNotificationsDocument } from 'api/graphql/schema/notification/generated/queries.generated';
import {
	DeleteNotificationDocument,
	DeleteNotificationMutationVariables,
	DeleteManyNotificationDocument, DeleteManyNotificationMutationVariables,
	UpdateNotificationDocument, UpdateNotificationMutationVariables
} from 'api/graphql/schema/notification/generated/mutations.generated';
import {
	OnCreateNotificationDocument,
	OnCreateNotificationSubscriptionVariables
} from 'api/graphql/schema/notification/generated/subscriptions.generated';
import { Observable } from '@apollo/client/utilities';

export class NotificationRepository extends GraphqlRepository<AppNotification> implements INotificationRepository {


	constructor() {
		super({
			findAll: { query: GetNotificationsDocument },
			findPaginated: { query: GetPaginatedNotificationsDocument },
			delete: { query: DeleteNotificationDocument },
			deleteMany: { query: DeleteManyNotificationDocument }
		});

	}


	async findAll(params: GetNotificationsQueryVariables): Promise<Array<AppNotification>> {
		return super.findAll(params);
	}

	async findPaginated(params: GetPaginatedNotificationsQueryVariables): Promise<IPaginatedEntity<AppNotification>> {
		return super.findPaginated(params);
	}

	async delete(params: DeleteNotificationMutationVariables): Promise<void> {
		return super.delete(params);
	}

	async deleteMany(params: DeleteManyNotificationMutationVariables): Promise<void> {
		return super.delete(params);
	}

	changeRead(id: string, read: boolean): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			this._apolloGraphqlService.mutationBuilder<void, UpdateNotificationMutationVariables>(
				UpdateNotificationDocument,
				{ input: { entityId: id, update: { isRead: read } } }
			).then(() => resolve()).catch((err) => reject(err));
		});
	}

	changeReadMultiple(ids: Array<string>, read: boolean): Promise<void> {
		/*return new Promise<void>((resolve, reject) => {
			this._apolloGraphqlService.mutationBuilder<void, ChangeReadNotificationsMutationVariables>(
				ChangeReadNotificationsDocument,
				{ input: { notificationIds: ids, read } }
			).then(() => resolve()).catch((err) => reject(err));
		});*/
		throw new Error('Implements me!')
	}

	onNotify(toUser: string): Observable<AppNotification> {

		return this._apolloGraphqlService.onSubscription<AppNotification, OnCreateNotificationSubscriptionVariables>(
			OnCreateNotificationDocument,
			{ toUser }
		);
	}


}

