import {IRepository} from 'api/interfaces/IRepository';
import {AppNotification} from "../types/notification.types";


export interface INotificationRepository extends IRepository<AppNotification> {
    changeRead(id: string, read: boolean): Promise<void>

    changeReadMultiple(ids: Array<string>, read: boolean): Promise<void>
}

