import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logOut } from 'app/auth/store/user.slice';
import { useAppDispatch, useAppSelector } from 'app/modules/common/hooks/use-app-redux';
import { useTranslation } from 'react-i18next';

function UserMenu(props) {
	const dispatch = useAppDispatch();
	const user = useAppSelector(({ auth }) => auth.user);
	const { t } = useTranslation('common');
	const [userMenu, setUserMenu] = useState(null);

	const userMenuClick = event => {
		setUserMenu(event.currentTarget);
	};

	const userMenuClose = () => {
		setUserMenu(null);
	};

	return (
		<>
			<Button className="min-h-40 min-w-40 px-0 md:px-16 py-0 md:py-6" onClick={userMenuClick}>
				<div className="hidden md:flex flex-col mx-4 items-end">
					<Typography component="span" className="font-bold flex">
						{user?.data?.displayName}
					</Typography>
					<Typography className="text-11 capitalize" color="textSecondary">
						{t(user?.role)}
					</Typography>
				</div>

				{user?.data?.avatarFile ? (
					<Avatar className="md:mx-4" alt="user photo" src={user?.data?.avatarFile?.url} />
				) : (
					<Avatar className="md:mx-4">{user?.data?.displayName[0]}</Avatar>
				)}
			</Button>

			<Popover
				open={Boolean(userMenu)}
				anchorEl={userMenu}
				onClose={userMenuClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				classes={{
					paper: 'py-8'
				}}
			>
				{!user ? (
					<>
						<MenuItem component={Link} to="/auth/login" role="button">
							<ListItemIcon className="min-w-40">
								<Icon>lock</Icon>
							</ListItemIcon>
							<ListItemText primary="Login" />
						</MenuItem>
						{/*<MenuItem component={Link} to="/register" role="button">
							<ListItemIcon className="min-w-40">
								<Icon>person_add</Icon>
							</ListItemIcon>
							<ListItemText primary="Register" />
						</MenuItem>*/}
					</>
				) : (
					<>
						<MenuItem component={Link} to="/user/profile" onClick={userMenuClose} role="button">
							<ListItemIcon className="min-w-40">
								<Icon>account_circle</Icon>
							</ListItemIcon>
							<ListItemText primary={t('MY_PROFILE')} />
						</MenuItem>
						{/*<MenuItem component={Link} to="/apps/mail" onClick={userMenuClose} role="button">
							<ListItemIcon className="min-w-40">
								<Icon>mail</Icon>
							</ListItemIcon>
							<ListItemText primary="Inbox" />
						</MenuItem>*/}
						<MenuItem
							onClick={() => {
								dispatch(logOut());
								userMenuClose();
							}}
						>
							<ListItemIcon className="min-w-40">
								<Icon>exit_to_app</Icon>
							</ListItemIcon>
							<ListItemText primary={t('LOGOUT')} />
						</MenuItem>
					</>
				)}
			</Popover>
		</>
	);
}

export default UserMenu;
