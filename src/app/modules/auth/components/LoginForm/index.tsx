import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import useAuth from 'app/modules/auth/hooks/use-auth';
import ButtonLoader from 'app/modules/common/components/ButtonLoader';

type AuthFormFields = {
	unique: string;
	password: string;
	remember?: boolean;
}


type Props = {}
const LoginForm: React.FC<Props> = (props: Props) => {
	const { t } = useTranslation('auth');
	const [showPassword, setShowPassword] = React.useState<boolean>(false);
	const { login, state } = useAuth();

	const { loading } = state;

	const schema = yup.object().shape({
		unique: yup.string().required(t('IDENTIFIER_REQUIRED')),
		password: yup.string().required(t('PASSWORD_REQUIRED'))
	});

	const { register, handleSubmit, formState: { errors, dirtyFields, isValid } } = useForm<AuthFormFields>({
		// @ts-ignore

	});

	const onSubmit = (data: AuthFormFields) => {
		login(data.unique, data.password);
	};

	return (


		<form
			name="loginForm"
			noValidate
			className="flex flex-col justify-center w-full"
			onSubmit={handleSubmit(onSubmit)}
		>
			<TextField
				{...register('unique')}
				className="mb-32"
				size='small'
				label={t('IDENTIFIER')}
				autoFocus
				variant="outlined"
				fullWidth
				error={!!errors.unique}
				helperText={errors?.unique?.message}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Icon className="m-2" color="action">
								mail
							</Icon>
						</InputAdornment>
					)
				}}
				required
			/>

			<TextField
				className="mb-32"
				size='small'
				label={t('PASSWORD')}
				type="password"
				{...register('password')}
				variant="outlined"
				fullWidth
				error={!!errors.password}
				helperText={errors?.password?.message}
				required
				InputProps={{
					type: showPassword ? 'text' : 'password',
					endAdornment: (
						<InputAdornment position="end">
							<Icon className="m-2 cursor-pointer" color="action"
								  onClick={() => setShowPassword(!showPassword)}>
								{showPassword ? 'visibility' : 'visibility_off'}
							</Icon>
						</InputAdornment>
					)
				}}
			/>

			<div
				className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
				<FormControl>
					<FormControlLabel
						control={
							<Checkbox
								{...register('remember')}
							/>
						}
						label={t('REMEMBER')}
					/>
				</FormControl>

				<Link className="font-medium" to="/auth/forgot-password">
					{t('FORGOT_PASSWORD')}
				</Link>
			</div>

			<Button
				variant="contained"
				color="primary"
				className="sm:w-224 mx-auto mt-16"
				type="submit"
				disabled={loading.login}>
				{loading.login ? <ButtonLoader /> : t('LOGIN')}
			</Button>
		</form>


	);
};

export default LoginForm;
