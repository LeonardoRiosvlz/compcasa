import React from 'react';
import { Avatar } from '@material-ui/core';
import { User } from 'api/repositories/user/types/user.types';

type Props = {
	item: User
}


const UserCell: React.FC<Props> = ({ item }: Props) => {

	const fullName = `${item.firstname} ${item.lastname ?? ''}`;
	const avatarSrc = item?.avatarFile ? item.avatarFile.url : undefined;
	return (

		<div className='w-full flex p-2'>
			{avatarSrc ? <Avatar src={avatarSrc} /> : <Avatar>{fullName[0].toUpperCase()}</Avatar>}
			<div className='flex ml-8 flex-col justify-center'>
				<strong>{fullName}</strong>
				<a href={`mailto:${item.email}`}><small>{item.email}</small></a>
			</div>
		</div>


	);
};

export default UserCell;
