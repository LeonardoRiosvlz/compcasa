import { PulseLoader } from 'react-spinners';
import React from 'react';

import { DataGrid, DataGridProps, GridColDef, GridRowData } from '@mui/x-data-grid';


export type Props = {
} & DataGridProps
const TableGridEditable: React.FC<Props> = (props: Props) => {

	return (

			<DataGrid
				{...props}

			/>
	);
};
export default TableGridEditable;