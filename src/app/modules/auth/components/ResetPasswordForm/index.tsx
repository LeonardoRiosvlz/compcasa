import React from 'react';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';

import { Link, useHistory, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import qs from 'query-string';

import ButtonLoader from 'app/modules/common/components/ButtonLoader';

import _ from '@lodash';
import { LaunchGqlClient } from 'app/modules/common/services/LaunchGqlClient';
import { appLocalStorage } from 'app/modules/common/services/AppLocalStorageService';
import { toast } from 'react-toastify';
import useRepository from "../../../common/hooks/use-repository";
import {AuthRepository} from "api/repositories/user/auth.repository";

type FormFields = {
	password: string;
	password2: string;
}

type RPasswordUrlParams = { jwt?: string, tenant?: string }
type Props = {}
const loginPath = '/auth/login';
const ResetPasswordForm: React.FC<Props> = (props: Props) => {
	const { t } = useTranslation(['auth', 'common']);
	const [loading, setLoading] = React.useState<boolean>(false);
	const location = useLocation();
	const history = useHistory();

	const authRepo = useRepository(AuthRepository)

	const schema = yup.object().shape({
		password: yup
			.string()
			.required(t('NEW_PASSWORD_FIELD_ERROR_REQUIRED'))
			.min(8, t('NEW_PASSWORD_FIELD_ERROR_VALID')),
		password2: yup
			.string()
			.oneOf([yup.ref('password'), null], t('PASSWORD_CONFIRM_FIELD_ERROR_VALID'))
	});

	React.useEffect(() => {

		if (location && location.search) {
			const params: RPasswordUrlParams = qs.parse(location.search);
			if (params.jwt) {
				appLocalStorage.setToken(params.jwt);
				if (params.tenant) {
					appLocalStorage.setTenant(params.tenant);
				} else {
					appLocalStorage.unSetTenant();
				}

				LaunchGqlClient.rebuildLink();


			} else {
				history.push(loginPath);
			}

		} else {
			history.push(loginPath);
		}


	}, [location]);

	const { register, handleSubmit, control, reset, formState: { errors, dirtyFields, isValid } } = useForm<FormFields>({
		mode: 'onChange',
		// @ts-ignore
resolver: yupResolver(schema),
		defaultValues: {
			password: '',
			password2: ''
		}
	});

	const onSubmit = (data: FormFields) => {
		setLoading(true);
		authRepo.resetPassword(data.password).then(() => {
			toast.info(t('PASSWORD_CHANGED'));
			setLoading(false);
			history.push(loginPath);
		}).catch((err: any) => {
			toast.error(err?.toString);
			setLoading(false);
			reset();
		});
	};

	return (

		<form
			name="resetPasswordForm"
			noValidate
			className="flex flex-col justify-center w-full"
			onSubmit={handleSubmit(onSubmit)}
		>

			<div className='w-full mb-32'>
				<Controller
					name="password"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							size='small'
							label={t('NEW_PASSWORD_FIELD_NAME')}
							variant="outlined"
							type='password'
							fullWidth
							error={!!errors.password}
							helperText={errors?.password?.message}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon className="text-18">password</Icon>
									</InputAdornment>
								)
							}}

						/>)} />
			</div>

			<div className='w-full mb-32'>
				<Controller
					name="password2"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							size='small'
							label={t('PASSWORD_CONFIRM_FIELD_NAME')}
							variant="outlined"
							type='password'
							fullWidth
							error={!!errors.password2}
							helperText={errors?.password2?.message}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon className="text-18">password</Icon>
									</InputAdornment>
								)
							}}

						/>)} />
			</div>


			<div
				className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">

				<label>{t('HAVE_CREDENTIALS')}</label>

				<Link className="font-medium" to="/auth/login">
					{t('LOGIN')}
				</Link>
			</div>

			<Button
				variant="contained"
				color="primary"
				className="sm:w-224 mx-auto mt-16"
				type="submit"
				disabled={_.isEmpty(dirtyFields) || !isValid || loading}>
				{loading ? <ButtonLoader /> : t('common:RESET')}
			</Button>
		</form>


	);
};

export default ResetPasswordForm;
