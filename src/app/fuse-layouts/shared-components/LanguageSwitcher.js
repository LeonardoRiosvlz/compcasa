import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage } from 'app/store/i18nSlice';
import { LaunchGqlClient } from 'app/modules/common/services/LaunchGqlClient';

const languages = [
	{
		id: 'en',
		title: 'English',
		flag: 'us'
	},
	{
		id: 'es',
		title: 'Español',
		flag: 'es'
	}

];

function LanguageSwitcher(props) {
	const dispatch = useDispatch();

	const currentLanguageId = useSelector(({ i18n }) => i18n.language);
	const currentLanguage = languages.find(lng => lng.id === currentLanguageId);

	const [menu, setMenu] = useState(null);

	const langMenuClick = event => {
		setMenu(event.currentTarget);
	};

	const langMenuClose = () => {
		setMenu(null);
	};

	function handleLanguageChange(lng) {
		dispatch(changeLanguage(lng.id));
		langMenuClose();
		setTimeout(() => {
			LaunchGqlClient.rebuildLink();
		}, 500)
	}

	return (
		<>
			<Button className="h-40 w-64" onClick={langMenuClick}>
				<img
					className="mx-4 min-w-20"
					src={`/assets/images/flags/${currentLanguage.flag}.svg`}
					alt={currentLanguage.title}
				/>

				<Typography className="mx-4 font-bold uppercase" color="textSecondary">
					{currentLanguage.id}
				</Typography>
			</Button>

			<Popover
				open={Boolean(menu)}
				anchorEl={menu}
				onClose={langMenuClose}
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
				{languages.map(lng => (
					<MenuItem key={lng.id} onClick={() => handleLanguageChange(lng)}>
						<ListItemIcon className="min-w-40">
							<img className="h-16" src={`/assets/images/flags/${lng.flag}.svg`} alt={lng.title} />
						</ListItemIcon>
						<ListItemText primary={lng.title} />
					</MenuItem>
				))}

			</Popover>
		</>
	);
}

export default LanguageSwitcher;
