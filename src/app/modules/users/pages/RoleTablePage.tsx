import React from 'react';
import RoleTable from '../components/roles/Table';

type Props = {}
const RolePascalCase_TablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <RoleTable />
		</div>
	);
};

export default RolePascalCase_TablePage;
