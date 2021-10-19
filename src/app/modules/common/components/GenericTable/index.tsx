import React from 'react';
import withReducer from 'app/store/withReducer';
import {
	genericTableSlice,
} from 'app/modules/common/components/GenericTable/store/generic-table.slice';
import FusePageCarded from '@fuse/core/FusePageCarded';
import GenericHeader, { GenericHeaderProps } from 'app/modules/common/components/GenericTable/GenericHeader';
import {
	GenericTableBody,
	GenericTableBodyProps
} from 'app/modules/common/components/GenericTable/GenericTableBody';

type GenericTableProps = GenericHeaderProps & GenericTableBodyProps


const GenericTable: React.FC<GenericTableProps> = ({
													   headerIcon,
													   title,
													   onAddAction,
													   addBtn,
													   rows,
													   onCheckSelectedMenuClick,
													   options,
													   actionBtnName,
													   actions,
													   onRowClick
												   }: GenericTableProps) => {

	return (
		<div className='w-full'>
			<FusePageCarded
				// @ts-ignore
				classes={{
					content: 'flex',
					contentCard: 'overflow-hidden min-h-136 h-136',
					header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
				}}
				header={<GenericHeader title={title}
									   headerIcon={headerIcon}
									   addBtn={addBtn}
									   onAddAction={onAddAction}
				/>}
				content={
					<GenericTableBody rows={rows}
									  actionBtnName={actionBtnName}
									  actions={actions}
									  onCheckSelectedMenuClick={onCheckSelectedMenuClick}
									  onRowClick={onRowClick}
									  options={options}

					/>}
				innerScroll />
		</div>
	);
};

export default withReducer('table', genericTableSlice.reducer)(React.memo(GenericTable));
