import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleQuickPanel } from './store/stateSlice';
import useNotifications from 'app/modules/common/hooks/use-notifications';
import { Badge } from '@material-ui/core';

function QuickPanelToggleButton(props) {
	const dispatch = useDispatch();
	const { unRead } = useNotifications();


	return (
		<Badge badgeContent={unRead} color='primary'>
			<IconButton className="w-40 h-40" onClick={ev => dispatch(toggleQuickPanel())}>
				{props.children}
			</IconButton>
		</Badge>
	);
}

QuickPanelToggleButton.defaultProps = {
	children: <Icon>notifications_active</Icon>
};

export default QuickPanelToggleButton;
