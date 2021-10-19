import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	DialogProps,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ButtonLoader from 'app/modules/common/components/ButtonLoader';

const useStyles = makeStyles({
	dialogContent: {
		minWidth: 700
	},

	title: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#3C3C3C',
		fontSize: 8,
		color: '#ccc'
	}


});

export type GenericModalProps = {
	onClose: () => void
	open: boolean
	okLoading?: boolean
	title: string,
	children?: React.ReactNode | Array<React.ReactNode>
	formId?: string,
	cancelBtn?: boolean,
	okBtnTxt: string,
	handleOk?: (...args: Array<any>) => unknown,
	minHeight?: number | string
} & Pick<DialogProps, 'maxWidth'>

const GenericModal: React.FC<GenericModalProps> = ({
													   onClose,
													   open,
													   okLoading = false,
													   title,
													   formId,
													   children,
													   cancelBtn = false,
													   okBtnTxt,
													   maxWidth = 'sm',
													   minHeight = 400,
													   handleOk
												   }) => {
	const classes = useStyles();
	const { t } = useTranslation(['common']);
	const handleClose = () => {
		onClose();
	};

	const okBtnLabel = okBtnTxt || t('EXIT');

	return (
		<Dialog fullWidth maxWidth={maxWidth} onClose={handleClose} open={open}>
			<DialogTitle className={classes.title}>{title}</DialogTitle>
			<DialogContent style={{ minHeight }}>
				{children}
			</DialogContent>
			<DialogActions className='w-full p-16'>
				{cancelBtn && <Button onClick={handleClose} className="whitespace-nowrap"
									  variant="contained"
									  color="primary">
					{t('CANCEL')}
				</Button>}
				<Button className="whitespace-nowrap"
						variant="contained"
						color="secondary"
						type={formId ? 'submit' : 'button'}
						onClick={handleOk}
						form={formId}>
					{okLoading ? <ButtonLoader /> : okBtnLabel}
				</Button>
			</DialogActions>
		</Dialog>

	);
};


export default GenericModal;



