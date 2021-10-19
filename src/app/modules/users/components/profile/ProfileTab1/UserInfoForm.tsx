import React from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useAuth from 'app/modules/auth/hooks/use-auth';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import ButtonLoader from 'app/modules/common/components/ButtonLoader';
import { FormUtils } from 'app/modules/common/utils/FormUtils';
import _ from '@lodash';
import { toast } from 'react-toastify';
import { AuthUser } from 'api/repositories/user/types/auth.types';
import useRepository from "app/modules/common/hooks/use-repository";
import {UserRepository} from "api/repositories/user/user.repository";


export type FormFields = Pick<AuthUser, 'firstname' | 'lastname' | 'username'>

type Props = {}
const UserInfoForm: React.FC<Props> = (props: Props) => {


	const [loading, setLoading] = React.useState<boolean>(false);
	const { t } = useTranslation(['users', 'common']);
	const { user, myInfo } = useAuth();

	const userRepo = useRepository(UserRepository);



	const initialData: FormFields = {
		username: user?.username ?? '',
		firstname: user?.firstname ?? '',
		lastname: user?.lastname ?? ''
	};

	const schema = yup.object().shape({
		firstname: yup.string().required(t('FIRSTNAME_REQUIRED')),
		lastname: yup.string(),
		username: yup.string().required(t('USERNAME'))
	});

	const defaultValues: FormFields | {} = initialData ? {
		...initialData
	} : {};

	const { handleSubmit, control, formState: { errors, dirtyFields, isValid } } = useForm<FormFields>({
		// @ts-ignore
resolver: yupResolver(schema),
		defaultValues

	});


	const onSubmit = (data: FormFields) => {
		setLoading(true);

		const toUpdateData = FormUtils.toUpdateValue<FormFields, FormFields>(data, defaultValues as any);

		userRepo.updateMe({ input: { ...toUpdateData } }).then(() => {
			setLoading(false);
			toast.info(t('common:PROFILE_UPDATED'));
			myInfo();
		}).catch((err) => {
			setLoading(false);
			toast.error(err?.toString());
		});
	};

	return (<form
		className='w-full flex flex-col p-2'
		onSubmit={handleSubmit(onSubmit)}>
		<Grid container>

			<Grid item xs={12} md={6} className='w-full p-16'>
				<Controller
					name="firstname"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							size='small'
							label={t('FIRSTNAME')}
							variant="outlined"
							fullWidth
							error={!!errors.firstname}
							helperText={errors?.firstname?.message}
							required
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon className="text-18">account_circle</Icon>
									</InputAdornment>
								)
							}}
						/>)} />
			</Grid>

			<Grid item xs={12} md={6} className='w-full p-16'>
				<Controller
					name="lastname"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							size='small'
							label={t('LASTNAME')}
							variant="outlined"
							fullWidth
							error={!!errors.lastname}
							helperText={errors?.lastname?.message}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon className="text-18">account_circle</Icon>
									</InputAdornment>
								)
							}}

						/>)} />
			</Grid>

			<Grid item xs={12} md={6} className='w-full p-16'>
				<Controller
					name="username"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							size='small'
							label={t('USERNAME')}
							variant="outlined"
							fullWidth
							error={!!errors.username}
							helperText={errors?.username?.message}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon className="text-18">account_circle</Icon>
									</InputAdornment>
								)
							}}

						/>)} />
			</Grid>

			<Grid item xs={12} md={6} className='w-full p-16'>
				<TextField
					size='small'
					label={t('EMAIL')}
					value={user?.email ?? ''}
					variant="outlined"
					fullWidth
					disabled
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-18">email</Icon>
							</InputAdornment>
						)
					}}
				/>
			</Grid>

			<Grid item xs={12} className='w-full p-16 flex justify-center'>
				<Button variant='contained'
						className='sm:w-96 w-full'
						color='secondary'
						disabled={_.isEmpty(dirtyFields) || !isValid || loading}

						type='submit'>{loading ? <ButtonLoader /> : t('common:SAVE')}
				</Button>
			</Grid>


		</Grid>


	</form>);


};


export default UserInfoForm;
