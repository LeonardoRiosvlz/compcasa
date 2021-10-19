import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAppDispatch, useAppSelector } from 'app/modules/common/hooks/use-app-redux';
import {
	GenericTableState,
	TableRecord,
	setSelected,
	setPaginatorIn
} from 'app/modules/common/components/GenericTable/store/generic-table.slice';
import { useTranslation } from 'react-i18next';
import FuseLoading from '@fuse/core/FuseLoading';
import FuseAnimate from '@fuse/core/FuseAnimate';
import _ from '@lodash';
import {
	Table, Checkbox, TableBody,
	TableRow, Typography, TableCell,
	Button, TablePagination,
	List, ListItem, Popover, Icon
} from '@material-ui/core';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import GenericTableHead from 'app/modules/common/components/GenericTable/GenericTableHead';
import { OrderByDirection } from 'app/modules/common/store/shared-types';


const MyFuseScrollbars: any = FuseScrollbars;

const useStyles = makeStyles(theme => ({
	actionBtn: {
		background: '#0d75b3'
	}
}));

export type TableAlign = 'left' | 'center' | 'right' | 'justify' | 'inherit'
export type RowsDef<T> = {
	id: string,
	align: TableAlign,
	contentAlign?: TableAlign,
	disablePadding?: boolean,
	label: string,
	sort?: true
	render?: (row: T) => React.ReactNode | string | number;
}

export type TableAction<T = TableRecord> = {
	label: string,
	action: (record?: T) => unknown
	icon?: string,
	disabled?: ((record?: T) => boolean) | boolean
}

export type GenericTableBodyProps = {
	options?: { actionColumn: boolean }
	rows: Array<RowsDef<unknown>>
	onRowClick?: (row: TableRecord) => void
	onCheckSelectedMenuClick?: () => void
	actionBtnName?: string
	actions?: Array<TableAction>
}

export const GenericTableBody: React.FC<GenericTableBodyProps> = ({
	options,
	rows,
	onRowClick,
	actionBtnName,
	actions,
	onCheckSelectedMenuClick
}: GenericTableBodyProps) => {

	const classes = useStyles();
	const dispatch = useAppDispatch();
	const { t } = useTranslation('common');
	const { loading, paginator, items, selected } = useAppSelector(state => state.table) as GenericTableState;
	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null | undefined>();

	const handleOpenRowMenu = ({ currentTarget }: React.MouseEvent<HTMLElement>, record: TableRecord) => {
		setAnchorEl(currentTarget);
		// @ts-ignore
		dispatch(setSelected([record]));

	};

	const handleCloseRowMenu = () => {
		setAnchorEl(null);
	};

	const handleRequestSort = (property: string) => {
		const id = property;
		let direction: OrderByDirection = 'desc';

		if (paginator.in.order.id === property && paginator.in.order.direction === 'desc') {
			direction = 'asc';
		}

		// @ts-ignore
		dispatch(setPaginatorIn({
			...paginator, order: {
				direction,
				id
			}

		}));
	};

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {

		if (event.target.checked) {
			// @ts-ignore
			dispatch(setSelected([...items]));
			return;
		}
		// @ts-ignore
		dispatch(setSelected([]));
	};

	const handleDeselect = () => {
		// @ts-ignore
		dispatch(setSelected([]));
	};


	const handleCheck = (event: React.ChangeEvent<HTMLInputElement>, row: TableRecord) => {
		const selectedIndex = selected.indexOf(row);
		let newSelected: Array<TableRecord> = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, row);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}
		// @ts-ignore
		dispatch(setSelected(newSelected));
	};

	function handleChangePage(event: any, page: number) {
		// @ts-ignore
		dispatch(setPaginatorIn({ ...paginator, page }));
	}

	const handleCheckSelectMenu = () => {
		/*if (checkSelectAction) {
			checkSelectAction();
		}*/
	};

	const handleChangeRowsPerPage = ({ target }: React.ChangeEvent<HTMLElement>) => {
		// @ts-ignore
		dispatch(setPaginatorIn({ ...paginator, rowsPerPage: +target.value }));

	};

	if (loading) {
		return <FuseLoading />;
	}

	if (items.length === 0) {
		return (
			<FuseAnimate delay={100}>
				<div className="flex flex-1 items-center justify-center h-full">
					<Typography color="textSecondary" variant="h5">
						{t('NO_RECORDS')}
					</Typography>
				</div>
			</FuseAnimate>
		);
	}


	return (
		<>
			<div className="w-full flex flex-col">
				<MyFuseScrollbars className="flex-grow overflow-x-auto">
					<Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
						<GenericTableHead
							onSelectAllClick={handleSelectAllClick}
							onCheckSelectMenuClick={onCheckSelectedMenuClick}
							onRequestSort={handleRequestSort}
							rows={rows}
							actionColumn={options?.actionColumn ?? false}
						/>

						<TableBody>
							{
								items.map((n, i) => {
									const isSelected = selected?.indexOf(n) !== -1;
									return (
										<TableRow
											className="h-64 cursor-pointer"
											hover
											role="checkbox"
											aria-checked={isSelected}
											tabIndex={-1}
											key={i}
											selected={isSelected}
											onClick={() => onRowClick ? onRowClick(n) : () => {
											}}
										>
											<TableCell className="w-40 md:w-64 text-center" padding="none">
												<Checkbox
													checked={isSelected}
													onClick={(event) => event.stopPropagation()}
													onChange={(event) => handleCheck(event, n)}
												/>
											</TableCell>
											<>
												{
													Array.from(rows ?? []).map((row, k) => {

														const align: TableAlign = row.contentAlign ?? row.align ?? 'center';
														return (
															<TableCell key={k} align={align} className="p-2 md:p-8"
																component="th"
																scope="row">
																{row.render ? row.render(n) : n[row.id as keyof TableRecord]}
															</TableCell>
														);

													})
												}

											</>

											<>

												{options?.actionColumn &&
													<TableCell align='center' className="p-2 md:p-8" component="th"
														scope="row">

														<Button className={classes.actionBtn}
															variant="contained"
															color="primary"
															onClick={(e) => handleOpenRowMenu(e, n)}
															size='small'>{actionBtnName || t('ACTIONS')}</Button>

													</TableCell>}
											</>
										</TableRow>
									);
								})}
						</TableBody>
					</Table>
				</MyFuseScrollbars>

				<TablePagination
					className="flex-shrink-0 border-t-1"
					component="div"
					count={paginator.out.total}
					rowsPerPage={paginator.in.rowsPerPage}
					labelRowsPerPage={t('ROWS_PER_PAGE')}
					backIconButtonText={t('BACK_PAGE')}
					nextIconButtonText={t('NEXT_PAGE')}
					rowsPerPageOptions={[5, 10, 25, 50, 100]}
					page={paginator.out.currentPage - 1}
					backIconButtonProps={{
						'aria-label': 'Previous Page'
					}}
					nextIconButtonProps={{
						'aria-label': 'Next Page'
					}}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</div>


			<Popover
				id="actions"
				classes={{
					paper: 'p-1'
				}}
				open={Boolean(anchorEl)}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left'
				}}
				onClose={handleCloseRowMenu}
				disableRestoreFocus
			>
				<List>
					{
						Array.from(actions ?? []).map((item, i) => {

							const itemDisabled: boolean =
								item?.disabled && _.isFunction(item.disabled)
									? Boolean(item.disabled(_.first(selected)))
									: Boolean(item?.disabled)

							return (
								<ListItem key={i}
									disabled={itemDisabled}
									button
									onClick={item.action ?
										() => {
											item.action(_.first(selected));
											handleCloseRowMenu();
										} : () => {
										}}>
									{item?.icon && <Icon className='mr-8' fontSize='small'>{item.icon}</Icon>}
									<label>{item.label ?? t('NO_NAME')}</label></ListItem>
							);
						})
					}
				</List>
			</Popover>
		</>
	);
};