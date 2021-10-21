import React from 'react';
import UserAreaTable from '../components/Table';

type Props = {}
const UserAreaTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <UserAreaTable />
		</div>
	);
};

export default UserAreaTablePage;
