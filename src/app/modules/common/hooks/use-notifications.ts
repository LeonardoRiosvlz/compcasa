import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/modules/common/hooks/use-app-redux';
import { toast } from 'react-toastify';
import {
    NotificationsState,
    setLoading,
    setNotifications,
    pushNotification
} from 'app/modules/common/store/notification.slice';
import { AppNotification } from 'api/repositories/notifications/types/notification.types';
import useAuth from 'app/modules/auth/hooks/use-auth';
import useRepository from "./use-repository";
import { NotificationRepository } from "api/repositories/notifications/notification.repository";
import { OrderByType } from "api/graphql/schema/types";


type UseNotificationHook = {
    fetch: () => void;
    loading: boolean;
    notifications: Array<AppNotification>
    unRead: number;
    remove: (id: string) => void

}


const useNotifications = (): UseNotificationHook => {
    const dispatch = useAppDispatch();
    const { user } = useAuth();

    const notificationRepo = useRepository(NotificationRepository)


    const { loading, notifications } = useAppSelector(state => state.app.notifications) as NotificationsState;


    React.useEffect(() => {
        const onNotify = () => {
            if (user) {

                notificationRepo.onNotify(user.userId).subscribe((item: AppNotification) => {
                    if (notifications.some((n => n.id !== item.id)) || notifications.length === 0) {
                        // @ts-ignore
                        dispatch(pushNotification(item));
                    }
                })   
            };          
        }

        onNotify();

    }, []);


    const fetch = (): void => {
        // @ts-ignore
        dispatch(setLoading(true));
        notificationRepo.findAll({
            input: {
                orderBy: { createdAt: OrderByType.Desc }
            }
        })
            .then((res: Array<AppNotification>) => {
                // @ts-ignore
                dispatch(setNotifications(res));
            })
            .catch((err: any) => {
                // @ts-ignore
                dispatch(setLoading(false));
                toast.error(err.toString());
            });
    };


    const remove = (id: string): void => {

        notificationRepo.delete({
            input: {
                entityId: id
            }
        }).then(() => {
            fetch()
        }).catch((err: any) => {
            toast.error(err.toString());
        });
    };


    return {
        fetch,
        loading,
        remove,
        notifications,
        unRead: Array.from(notifications ?? []).filter(n => n.isRead === false).length
    };
};

export default useNotifications;