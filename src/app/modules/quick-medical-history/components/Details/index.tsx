import React from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import { QuickMedicalHistory } from 'api/repositories/quick-medical-history/types/quick-medical-history.types';



type Props = {
	row: QuickMedicalHistory | null | undefined

}
const QuickMedicalHistoryDetails: React.FC<Props> = ({ row }: Props) => {

	const { t } = useTranslation(['quick-medical-history', 'common']);

	if (!row) {
		return (<div className='w-full flex flex-col'>
				<strong>{t('common:NO_DATA')}</strong>
			</div>

		);
	}

	return (<div className='w-full flex flex-col'>

		<h3 className='mt-2'>{t('QuickMedicalHistoryconstantCase__INFO')}</h3>
		<Divider className='mb-16 w-3/4' />
		<Grid container className='w-100'>
			{/*<Grid item className='flex flex-col p-4' xs={12}>
				<label
					className='my-4'><strong>{`${t('common:NAME')}: `}</strong> {`${row?.name}`}
				</label>
				{row?.description &&
				<div className='w-full mt-24 flex flex-col '>
					<strong className='mb-4'>{t('common:DESCRIPTION')}</strong>
					<p>{row?.description}</p>
				</div>}

			</Grid>*/}

		</Grid>
	</div>);

};


export default QuickMedicalHistoryDetails;
