import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	logo: {
		width: 150,
		height: 'auto'
	}
}));

function Logo() {
	const classes = useStyles();

	return (
		<div className='flex items-center'>
			<NavLink to='/'>
				<img className={classes.logo} src="/assets/images/logos/app-logo.png" alt="App-Logo" />
			</NavLink>
		</div>
	);
}

export default Logo;
