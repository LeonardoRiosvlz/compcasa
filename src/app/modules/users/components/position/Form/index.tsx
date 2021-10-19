import React from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Switch } from '@material-ui/core';


 export type UserPositionFormField = {
	name: string;
	description?: string;
	isActive: boolean;
}

type Props = {
	submitAction: (data: UserPositionFormField) => unknown
	formId: string
	initialData?: UserPositionFormField
}
const UserPositionForm: React.FC<Props> = ({ submitAction, formId, initialData }: Props) => {

	const { t } = useTranslation(['user', 'common']);

	const schema = yup.object().shape({
		name: yup.string().required(t('common:NAME_REQUIRED')),
		isActive: yup.boolean(),
	});

	const defaultValues: UserPositionFormField | {} = initialData ? {
		description: initialData.description,
		name: initialData.name,
	} : {};

	const { handleSubmit, control, formState: { errors, dirtyFields, isValid } } = useForm<UserPositionFormField>({
		mode:'onChange',
		// @ts-ignore
resolver: yupResolver(schema),
		defaultValues

	});

	const onSubmit = (data:  UserPositionFormField) => {
			submitAction(data)
	};

	return (<form id={formId}
				  className='w-full flex flex-col p-2'
				  onSubmit={handleSubmit(onSubmit)}>
		<Grid container spacing={2}>



			<Grid item xs={12} className='w-full p-16 flex justify-end'>

				<Controller
					// @ts-ignore
					name={'isActive'}
					// @ts-ignore
					defaultValue={true}
					control={control}
					render={({ field:{onChange, onBlur, value, name, ref } }) => (
						<div className='flex items-center'>
							<Switch
								size='small'
								onBlur={onBlur}
								onChange={onChange}
								checked={Boolean(value)}
								inputRef={ref}
							/><label>{t('common:ACTIVE')}</label> </div>)} />
			</Grid>

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

		</Grid>


	</form>);


};


export default UserPositionForm;
