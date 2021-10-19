import React from 'react';



import { Divider, List, ListItem, Icon } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useNotifications from 'app/modules/common/hooks/use-notifications';
import NotificationItem from 'app/modules/common/components/Notifications/NotificationItem';
import { CircleLoader } from 'react-spinners';

type Props = {}


const Notifications: React.FC<Props> = (props: Props) => {
	const { t } = useTranslation(['common']);
	const { notifications, loading, remove } = useNotifications();

	return (

		<div className='w-full flex flex-col p-2'>
			<div className='w-full flex justify-center items-center'>
				<Icon>notifications_active</Icon>
				<strong className='ml-4'>{`${t('NOTIFICATIONS')} (${notifications.length})`}</strong>
			</div>

			<div className='w-full my-16'>
				<Divider />
			</div>

			<div className='flex flex-col w-full' >

				<List className='w-full h-full'>
					{loading ? <div className='w-full flex flex-col items-center justify-center'>
						<CircleLoader size={70} />
						<small className='mt-2'>loading...</small>
					</div> : notifications.map((item, index) => {
						return (
							<ListItem key={index}>
								<NotificationItem item={item} handleRemove={remove} />
							</ListItem>);
					})}
				</List>
			</div>
		</div>


	);
};

export default Notifications;
