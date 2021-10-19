import React from 'react';
import UserTable from 'app/modules/users/components/user/UserTable';

type Props = {}
const UsersTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			<UserTable />
		</div>
	);
};

export default UsersTablePage;
