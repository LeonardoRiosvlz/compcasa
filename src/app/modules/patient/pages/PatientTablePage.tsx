import React from 'react';
import PatientTable from '../components/Table';

type Props = {}
const PatientTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <PatientTable />
		</div>
	);
};

export default PatientTablePage;
