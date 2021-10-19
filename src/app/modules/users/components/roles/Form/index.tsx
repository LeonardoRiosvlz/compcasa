import React from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Permit } from 'api/repositories/roles/types/roles.types';
import PermitsSelector from 'app/modules/users/components/roles/PermitsSelector';


export type PermitsFormField = Permit
export type RoleFormField = {
	name: string;
	description?: string;
	permits: Array<PermitsFormField>
}

type Props = {
	submitAction: (data: RoleFormField) => unknown
	formId: string
	initialData?: RoleFormField
}
const RoleForm: React.FC<Props> = ({ submitAction, formId, initialData }: Props) => {

	const { t } = useTranslation(['role', 'common']);

	const schema = yup.object().shape({
		name: yup.string().required(t('common:NAME_REQUIRED'))
	});

	const defaultValues: RoleFormField | {} = initialData ? {
		description: initialData.description,
		name: initialData.name
	} : {};

	const { handleSubmit, control, setValue, formState: { errors } } = useForm<RoleFormField>({
		mode: 'onChange',
		// @ts-ignore
resolver: yupResolver(schema),
		defaultValues

	});

	const onSubmit = (data: RoleFormField) => {
		submitAction(data);
	};

	return (<form id={formId}
				  className='w-full flex flex-col p-2'
				  onSubmit={handleSubmit(onSubmit)}>
		<Grid container spacing={2}>

			<Grid item xs={12} className='w-full p-16'>

				<Controller
					name="name"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							size='small'
							label={t('common:NAME')}
							autoFocus
							variant="outlined"
							fullWidth
							error={!!errors.name}
							helperText={errors?.name?.message}
							required
						/>)} />
			</Grid>

			<Grid item xs={12} className='w-full p-16'>
				<Controller
					name="description"
					control={control}
					render={({ field }) => (
						<TextField multiline
								   rows={4}
								   {...field}
								   size='small'
								   label={t('common:DESCRIPTION')}
								   autoFocus
								   variant="outlined"
								   fullWidth
						/>)} />
			</Grid>

			<Grid item xs={12} className='w-full p-16 overflow-x-scroll' style={{ maxHeight: 350 }}>
				<PermitsSelector initial={initialData?.permits ?? []} setPermits={(permits) => {
					setValue('permits', permits);
				}} />
			</Grid>

		</Grid>


	</form>);


};


export default RoleForm;
