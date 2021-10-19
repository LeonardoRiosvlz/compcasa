import React from 'react';
import Button from '@material-ui/core/Button';

import { Dialog, DialogTitle, DialogContent, DialogActions, Icon } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ButtonLoader from 'app/modules/common/components/ButtonLoader';


export type ConfirmDialogProps = {
	onClose: () => void
	open: boolean
	okLoading?: boolean
	title: string,
	type: 'CONFIRM_DELETE' | 'CONFIRM_ACTION'
	message: string;
	handleOk?: () => void,
}

type DialogIcon = { icon: string, color: string } | undefined

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
														 onClose,
														 open,
														 okLoading = false,
														 title,
														 message,
														 type,
														 handleOk
													 }) => {
	const { t } = useTranslation(['common']);
	const [dialogImg, setDialogImg] = React.useState<DialogIcon>(undefined);
	const handleClose = () => {
		onClose();
	};

	React.useEffect(() => {
		if (type) {
			switch (type) {
				case 'CONFIRM_DELETE':
					setDialogImg({
						icon: 'delete_forever',
						color: '#FF0000'
					});
					break;

				case 'CONFIRM_ACTION':
					setDialogImg({
						icon: 'warning',
						color: '#ff8609'
					});
					break;

				default: {
					setDialogImg({
						icon: 'warning_amber',
						color: '#34337d'
					});
				}
			}
		}
	}, [type]);


	return (
		<Dialog fullWidth maxWidth={'xs'} onClose={handleClose} open={open}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<div className='flex w-full items-center '>
					<div>
						<Icon style={{ color: dialogImg?.color, fontSize: 64 }}>{dialogImg?.icon}</Icon>
					</div>

					<label className='ml-8'>{message}</label>
				</div>
			</DialogContent>
			<DialogActions className='w-full p-16'>
				<Button onClick={handleClose} className="whitespace-nowrap"
						variant="contained"
						color="primary">
					{t('NO')}
				</Button>
				<Button className="whitespace-nowrap"
						variant="contained"
						color="secondary"
						onClick={handleOk}>
					{okLoading ? <ButtonLoader /> : t('YES')}
				</Button>
			</DialogActions>
		</Dialog>

	);
};


export default ConfirmDialog;



