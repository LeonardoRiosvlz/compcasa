import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppNotification } from 'api/repositories/notifications/types/notification.types';
import { Icon, Divider } from '@material-ui/core';
import moment, { isDate } from 'moment'

type Props = {
	item: AppNotification
	handleRemove?: (id: string) => void
}


type IconState = { icon: string, color: string }
const initialIconState = { icon: 'info', color: '#04cd25' };

const NotificationItem: React.FC<Props> = ({ item, handleRemove }: Props) => {
	const { t, i18n } = useTranslation(['common']);
	const [message, setMessage] = React.useState<string | null>(null);

	React.useEffect(() => {
		switch (i18n.language) {
			case 'es':
				moment.locale('es');
				setMessage(item.message.es)
				break;

			case 'en':
				moment.locale('en');
				setMessage(item.message.en)

				break;

			default: {
				moment.locale('es');
				setMessage(item.message.es)

			}
		}
	}, [i18n]);

	const createdAt = item?.createdAt ? new Date(item?.createdAt) : new Date()

	// @ts-ignore
	const formatDate = isDate(createdAt) ? moment(createdAt).fromNow() : '--';
	return (

		<div className='w-full flex px-2 rounded py-8 rounded hover:bg-gray-100'>

			<div className=' w-full ml-2 flex flex-col'>
				<div className=' w-full flex justify-between'>
					<strong className='text-xs'>{t(item.type)}</strong>
					<div className='flex items-center justify-center'>
						<small style={{ fontSize: 10 }}>{formatDate}</small>
						<Icon className='text-2xs ml-4 cursor-pointer' onClick={() =>
							handleRemove ? handleRemove(item.id) : () => { }}>close</Icon>
					</div>
				</div>
				<Divider />

				<div className='w-full '>
					<label className='text-xs text-gray-500'>{message}</label>
				</div>
			</div>

		</div>


	);
};

export default NotificationItem;
