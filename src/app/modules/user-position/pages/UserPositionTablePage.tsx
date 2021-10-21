import React from 'react';
import UserPositionTable from '../components/Table';

type Props = {}
const UserPositionTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <UserPositionTable />
		</div>
	);
};

export default UserPositionTablePage;
