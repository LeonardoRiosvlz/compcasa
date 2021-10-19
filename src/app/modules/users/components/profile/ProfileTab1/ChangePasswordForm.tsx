import React from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import ButtonLoader from 'app/modules/common/components/ButtonLoader';
import _ from '@lodash';
import { toast } from 'react-toastify';
import useRepository from "../../../../common/hooks/use-repository";
import {AuthRepository} from "api/repositories/user/auth.repository";


export type FormFields = {
	newPassword: string;
	newPassword2: string;
	oldPassword: string;

}


type Props = {}
const ChangePasswordForm: React.FC<Props> = (props: Props) => {


	const [loading, setLoading] = React.useState<boolean>(false);
	const { t } = useTranslation(['auth', 'common']);

    const authRepo = useRepository(AuthRepository)

	const schema = yup.object().shape({
		oldPassword: yup
			.string()
			.required(t('OLD_PASSWORD_FIELD_ERROR_REQUIRED')),
		newPassword: yup
			.string()
			.required(t('NEW_PASSWORD_FIELD_ERROR_REQUIRED'))
			.min(8, t('NEW_PASSWORD_FIELD_ERROR_VALID')),
		newPassword2: yup
			.string()
			.oneOf([yup.ref('newPassword'), null], t('PASSWORD_CONFIRM_FIELD_ERROR_VALID'))
	});

const defaultValues: FormFields = {
	newPassword: '',
	newPassword2: '',
	oldPassword: ''
}

	const { handleSubmit, control, reset, formState: { errors, dirtyFields, isValid } } = useForm<FormFields>({
		mode: 'onChange',
		// @ts-ignore
resolver: yupResolver(schema),
		defaultValues

	});


	const onSubmit = ({ newPassword, oldPassword }: FormFields) => {
		setLoading(true);


		authRepo.changePassword(newPassword, oldPassword ).then(() => {
			setLoading(false);
			toast.info(t('PASSWORD_CHANGED'));
			reset()
		}).catch((err) => {
			setLoading(false);
			reset()
			toast.error(err?.toString());
		});
	};

	return (<form
		className='w-full flex flex-col p-2'
		onSubmit={handleSubmit(onSubmit)}>
		<Grid container>

			<Grid item xs={12} className='w-full p-16'>
				<Controller
					name="oldPassword"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							size='small'
							label={t('OLD_PASSWORD_FIELD_NAME')}
							variant="outlined"
							type='password'
							fullWidth
							error={!!errors.oldPassword}
							helperText={errors?.oldPassword?.message}
							required
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon className="text-18">password</Icon>
									</InputAdornment>
								)
							}}
						/>)} />
			</Grid>

			<Grid item xs={12} md={6} className='w-full p-16'>
				<Controller
					name="newPassword"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							size='small'
							label={t('NEW_PASSWORD_FIELD_NAME')}
							variant="outlined"
							type='password'
							fullWidth
							error={!!errors.newPassword}
							helperText={errors?.newPassword?.message}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon className="text-18">password</Icon>
									</InputAdornment>
								)
							}}

						/>)} />
			</Grid>

			<Grid item xs={12} md={6} className='w-full p-16'>
				<Controller
					name="newPassword2"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							size='small'
							label={t('PASSWORD_CONFIRM_FIELD_NAME')}
							variant="outlined"
							type='password'
							fullWidth
							error={!!errors.newPassword2}
							helperText={errors?.newPassword2?.message}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon className="text-18">password</Icon>
									</InputAdornment>
								)
							}}

						/>)} />
			</Grid>



			<Grid item xs={12} className='w-full p-16 flex justify-center'>
				<Button variant='contained'
						className='sm:w-96 w-full'
						color='secondary'
						disabled={_.isEmpty(dirtyFields) || !isValid || loading}

						type='submit'>{loading ? <ButtonLoader /> : t('common:CHANGE')}
				</Button>
			</Grid>


		</Grid>


	</form>);


};


export default ChangePasswordForm;
