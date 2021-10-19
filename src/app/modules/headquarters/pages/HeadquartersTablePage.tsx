import React from 'react';
import HeadquartersTable from '../components/Table';

type Props = {}
const HeadquartersTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <HeadquartersTable />
		</div>
	);
};

export default HeadquartersTablePage;
