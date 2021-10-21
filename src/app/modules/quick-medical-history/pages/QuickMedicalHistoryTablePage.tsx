import React from 'react';
import QuickMedicalHistoryTable from '../components/Table';

type Props = {}
const QuickMedicalHistoryTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <QuickMedicalHistoryTable />
		</div>
	);
};

export default QuickMedicalHistoryTablePage;
