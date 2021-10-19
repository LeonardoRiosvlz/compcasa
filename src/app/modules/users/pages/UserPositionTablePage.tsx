import React from 'react';
import UserPositionTable from '../components/position/Table';

type Props = {}
const UserPositionPascalCase_TablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <UserPositionTable />
		</div>
	);
};

export default UserPositionPascalCase_TablePage;
