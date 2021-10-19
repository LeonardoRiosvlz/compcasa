import React from 'react';
import MedicalSpecialtiesTable from '../components/Table';

type Props = {}
const MedicalSpecialtiesTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <MedicalSpecialtiesTable />
		</div>
	);
};

export default MedicalSpecialtiesTablePage;
