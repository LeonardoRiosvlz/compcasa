import FuseAnimate from '@fuse/core/FuseAnimate';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { useAppDispatch, useAppSelector } from 'app/modules/common/hooks/use-app-redux';
import { GenericTableState, setQuery } from 'app/modules/common/components/GenericTable/store/generic-table.slice';
import { Action_List, App_Modules } from 'api/graphql/schema/types';
import usePermits from 'app/modules/auth/hooks/use-permits';


export type GenericHeaderProps = {
	title: string;
	headerIcon?: string;
	onAddAction?: () => void
	addBtn?: boolean
}
const GenericHeader: React.FC<GenericHeaderProps> = ({ title, headerIcon, onAddAction, addBtn = false }: GenericHeaderProps) => {
	const { t } = useTranslation('common');
	const { hasPermission } = usePermits();
	const dispatch = useAppDispatch();
	const { query, context } = useAppSelector(state => state.table) as GenericTableState;
	const mainTheme = useSelector(selectMainTheme);


	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = target;
		// @ts-ignore
		dispatch(setQuery(value));
	};


	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex items-center">
				<FuseAnimate animation="transition.expandIn" delay={300}>
					<Icon className="text-32">{headerIcon ?? 'shopping_basket'}</Icon>
				</FuseAnimate>
				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
						{title ?? 'UNKNOW'}
					</Typography>
				</FuseAnimate>
			</div>

			<div className="flex flex-1 items-center justify-center px-12">
				<ThemeProvider theme={mainTheme}>
					<FuseAnimate animation="transition.slideDownIn" delay={300}>
						<Paper className="flex items-center w-full max-w-512 px-8 py-4 rounded-8 shadow">
							<Icon color="action">search</Icon>

							<Input
								placeholder="Search"
								className="flex flex-1 mx-8"
								disableUnderline
								fullWidth
								value={query}
								inputProps={{
									'aria-label': 'Search'
								}}
								onChange={handleChange}
							/>
						</Paper>
					</FuseAnimate>
				</ThemeProvider>
			</div>

			{addBtn && <FuseAnimate animation="transition.slideRightIn" delay={300}>
				<Button disabled={!hasPermission(context, Action_List.Create)}
						className="whitespace-nowrap"
						variant="contained"
						color="secondary"
						onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
							e.preventDefault();
							if (onAddAction) onAddAction();
						}}>
					<span className="hidden sm:flex"> {t('ADD')}</span>
					<span className="flex sm:hidden">{t('ADD')}</span>
				</Button>
			</FuseAnimate>}

		</div>
	);
};

export default GenericHeader;
