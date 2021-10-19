import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';

import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { RowsDef } from 'app/modules/common/components/GenericTable/GenericTableBody';
import { GenericTableState, TableRecord } from 'app/modules/common/components/GenericTable/store/generic-table.slice';
import { useAppSelector } from 'app/modules/common/hooks/use-app-redux';
import usePermits from 'app/modules/auth/hooks/use-permits';
import { Action_List } from 'api/graphql/schema/types';


const useStyles = makeStyles(theme => ({
	actionsButtonWrapper: {
		background: theme.palette.background.paper
	}
}));


type GenericTableHeadProps = {
	rows: Array<RowsDef<unknown>>,
	onRequestSort?: (property: string) => void;
	onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onCheckSelectMenuClick?: (event?: React.ChangeEvent<HTMLInputElement>, row?: TableRecord) => void;
	actionColumn?: boolean
}

const GenericTableHead: React.FC<GenericTableHeadProps> = ({
															   rows,
															   onRequestSort,
															   onSelectAllClick,
															   onCheckSelectMenuClick,
															   actionColumn
														   }) => {
	const classes = useStyles();
	const { t } = useTranslation('common');
	const { hasPermission } = usePermits();
	const { paginator, items, selected, context } = useAppSelector(state => state.table) as GenericTableState;


	const pageSize = items.length;
	const numSelected = selected.length;

	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null | undefined>();


	const openSelectedMenu = ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(currentTarget);

	};

	const closeSelectedMenu = () => {
		setAnchorEl(null);
	};

	const createSortHandler = (property: string) => {
		if (onRequestSort) onRequestSort(property);
	};

	return (
		<TableHead>
			<TableRow className="h-64">
				<TableCell padding="none" className="w-40 md:w-64 text-center z-99">
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < pageSize}
						checked={pageSize !== 0 && pageSize === numSelected}
						onChange={onSelectAllClick}
					/>

					{numSelected > 0 && onCheckSelectMenuClick && (
						<div
							className={clsx(
								'flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1',
								classes.actionsButtonWrapper
							)}
						>
							<IconButton
								aria-haspopup="true"
								onClick={openSelectedMenu}>
								<Icon>more_horiz</Icon>
							</IconButton>
							<Menu
								id="selectedOrdersMenu"
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={closeSelectedMenu}
							>
								<MenuList>
									<MenuItem disabled={!hasPermission(context,  Action_List.DeleteMany)}
										onClick={() => onCheckSelectMenuClick()}>
										<ListItemIcon className="min-w-40">
											<Icon>delete</Icon>
										</ListItemIcon>
										<ListItemText primary="Remove" />
									</MenuItem>
								</MenuList>
							</Menu>
						</div>
					)}

				</TableCell>
				{rows.map(row => {
					return (
						<TableCell
							className="p-4 md:p-16"
							key={row.id}
							align={row.align}
							padding={row.disablePadding ? 'none' : 'default'}
							sortDirection={paginator.in.order?.id === row.id ? paginator.in.order?.direction : false}
						>
							{row.sort ? (
								<Tooltip
									title="Sort"
									placement={row.align === 'right' ? 'bottom-end' : 'bottom-start'}
									enterDelay={300}
								>
									<TableSortLabel
										active={paginator.in.order?.id === row.id}
										direction={paginator.in.order?.direction}
										onClick={() => createSortHandler(row.id)}
									>
										{row.label}
									</TableSortLabel>
								</Tooltip>
							) : (<label> {row.label} </label>)}
						</TableCell>
					);
				}, this)}

				{actionColumn && <TableCell align='center' className="p-4 md:p-16"> {t('ACTIONS')}</TableCell>}
			</TableRow>
		</TableHead>
	);
};

export default GenericTableHead;
