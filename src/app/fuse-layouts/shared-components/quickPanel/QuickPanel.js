import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import withReducer from 'app/store/withReducer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './store';
import { getData } from './store/dataSlice';
import { toggleQuickPanel } from './store/stateSlice';
import { IconButton } from '@material-ui/core';
import Notifications from 'app/modules/common/components/Notifications';

const useStyles = makeStyles(theme => ({
	root: {
		width: 350
	}
}));

function QuickPanel(props) {
	const dispatch = useDispatch();
	const data = useSelector(({ quickPanel }) => quickPanel?.data);
	const state = useSelector(({ quickPanel }) => quickPanel?.state);

	const classes = useStyles();
	const [checked, setChecked] = useState('notifications');

	const handleToggle = value => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

	return (
		<SwipeableDrawer
			classes={{ paper: classes.root }}
			open={state}
			anchor="right"
			onOpen={ev => {
			}}
			onClose={ev => dispatch(toggleQuickPanel())}
			disableSwipeToOpen
		>

			<div className='flex flex-col w-full'>
				<div className='flex w-full p-4 justify-end '>
					<IconButton size='small' onClick={ev => dispatch(toggleQuickPanel())}>
						<Icon fontSize='small'>close</Icon>
					</IconButton>
				</div>

				<FuseScrollbars>

					<Notifications />

					{/*<div className="mb-0 py-16 px-24">
					<Typography className="mb-12 text-32" color="textSecondary">
						{moment().format('dddd')}
					</Typography>
					<div className="flex">
						<Typography className="leading-none text-32" color="textSecondary">
							{moment().format('DD')}
						</Typography>
						<Typography className="leading-none text-16" color="textSecondary">
							th
						</Typography>
						<Typography className="leading-none text-32" color="textSecondary">
							{moment().format('MMMM')}
						</Typography>
					</div>
				</div>
				<Divider />
				<List>
					<ListSubheader component="div">Events</ListSubheader>
					{data &&
						data.events.map(event => (
							<ListItem key={event.id}>
								<ListItemText primary={event.title} secondary={event.detail} />
							</ListItem>
						))}
				</List>
				<Divider />
				<List>
					<ListSubheader component="div">Notes</ListSubheader>
					{data &&
						data.notes.map(note => (
							<ListItem key={note.id}>
								<ListItemText primary={note.title} secondary={note.detail} />
							</ListItem>
						))}
				</List>
				<Divider />
				<List>
					<ListSubheader component="div">Quick Settings</ListSubheader>
					<ListItem>
						<ListItemIcon className="min-w-40">
							<Icon>notifications</Icon>
						</ListItemIcon>
						<ListItemText primary="Notification" />
						<ListItemSecondaryAction>
							<Switch
								color="primary"
								onChange={handleToggle('notifications')}
								checked={checked.indexOf('notifications') !== -1}
							/>
						</ListItemSecondaryAction>
					</ListItem>
					<ListItem>
						<ListItemIcon className="min-w-40">
							<Icon>cloud</Icon>
						</ListItemIcon>
						<ListItemText primary="Cloud Sync" />
						<ListItemSecondaryAction>
							<Switch
								color="secondary"
								onChange={handleToggle('cloudSync')}
								checked={checked.indexOf('cloudSync') !== -1}
							/>
						</ListItemSecondaryAction>
					</ListItem>
					<ListItem>
						<ListItemIcon className="min-w-40">
							<Icon>brightness_high</Icon>
						</ListItemIcon>
						<ListItemText primary="Retro Thrusters" />
						<ListItemSecondaryAction>
							<Switch
								color="primary"
								onChange={handleToggle('retroThrusters')}
								checked={checked.indexOf('retroThrusters') !== -1}
							/>
						</ListItemSecondaryAction>
					</ListItem>
				</List>*/}
				</FuseScrollbars>

			</div>

		</SwipeableDrawer>
	);
}

export default withReducer('quickPanel', reducer)(React.memo(QuickPanel));
