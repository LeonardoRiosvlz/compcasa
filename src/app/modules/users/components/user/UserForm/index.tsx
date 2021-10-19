import React from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import UserAvatar from 'app/modules/users/components/UserAvatar';

import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import { CloudFile } from 'api/types/cloud-file.type';
import GenericSelector from 'app/modules/common/components/GenericSelector';

import { Switch } from '@material-ui/core';

import { UserArea } from 'api/repositories/user-area/types/user-area.types';
import { UserPosition } from 'api/repositories/user-position/types/user-position.types';
import { Role } from 'api/repositories/roles/types/roles.types';
import BooleanSelector from 'app/modules/common/components/BooleanSelector';
import useRepository from "../../../../common/hooks/use-repository";
import { UserAreaRepository } from "api/repositories/user-area/user-area.repository";
import { UserPositionRepository } from "api/repositories/user-position/user-position.repository";
import { RolesRepository } from "api/repositories/roles/role.repository";
import { UserRepository } from "api/repositories/user/user.repository";


export type UserFormField = {
	firstname: string;
	email: string;
	username: string;
	roles: Array<string>
	password: string;
	password2: string
	lastname: string;
	avatarFile?: CloudFile;
	isAdmin: boolean;
	isActive: boolean;
	area?: string;
	position?: string;
}

type Props = {
	submitAction: (data: UserFormField) => unknown
	formId: string
	initialData?: Omit<UserFormField, 'password' | 'password2'>
	processFile?: (file: File) => void,
	userId?: string

}
const UserForm: React.FC<Props> = ({ submitAction, formId, userId, initialData, processFile }: Props) => {

	const { t } = useTranslation(['users', 'common', 'auth']);


	const userAreaRepo = useRepository(UserAreaRepository)
	const userPositionRepo = useRepository(UserPositionRepository)
	const rolesRepository = useRepository(RolesRepository)
	const userRepo = useRepository(UserRepository)




	const editMode = Boolean(initialData);

	const shape: any = {
		firstname: yup.string().required(t('FIRSTNAME_REQUIRED')),
		email: yup.string().required(t('FIRSTNAME_REQUIRED')).email(t('INVALID_EMAIL')),
		lastname: yup.string().required(t('LASTNAME_REQUIRED')),
		username: yup.string().required(t('USERNAME_REQUIRED')),
		roles: yup.array().required(t('ROLE_REQUIRED')),
		isActive: yup.boolean(),
		isAdmin: yup.boolean(),
	};

	if (!editMode) {
		shape.password = yup
			.string()
			.required(t('auth:NEW_PASSWORD_FIELD_ERROR_REQUIRED'))
			.min(8, t('auth:NEW_PASSWORD_FIELD_ERROR_VALID'));
		shape.password2 = yup
			.string()
			.oneOf([yup.ref('password'), null], t('auth:PASSWORD_CONFIRM_FIELD_ERROR_VALID'));
	}

	const schema = yup.object().shape({ ...shape });

	const { handleSubmit, control, setValue, formState: { errors } } = useForm<UserFormField>({
		// @ts-ignore
		resolver: yupResolver(schema),
		mode: 'onChange',
		defaultValues: {
			username: '',
			email: '',
			firstname: '',
			lastname: '',
			roles: [],
			area: '',
			position: '',
			isActive: true,
			isAdmin: false
		}
	});

	React.useEffect(() => {
		if (userId) {
			userRepo.getUserProfile(userId).then((result) => {
				setValue('area', result?.area?.id);
				setValue('position', result?.position?.id);
			});
		}
	}, [initialData]);


	React.useEffect(() => {
		if (initialData) {
			setValue('username', initialData.username);
			setValue('firstname', initialData.firstname);
			setValue('lastname', initialData.lastname);
			setValue('email', initialData.email);
			setValue('roles', initialData.roles);
		}
	}, [initialData]);




	const onSubmit = (data: UserFormField) => {
		submitAction(data);
	};


	return (<form id={formId}
		className='w-full flex flex-col p-2'
		onSubmit={handleSubmit(onSubmit)}>

		<div className='w-full p-16 flex justify-center'>
			<UserAvatar className='w-96 h-96' firstname={'U'} avatar={initialData?.avatarFile} callBack={processFile} />
		</div>

		<Grid container className='w-100'>

			<Grid item xs={12} className='w-full p-16 flex justify-end'>

				<Controller
					// @ts-ignore
					name={'isActive'}
					// @ts-ignore
					defaultValue={true}
					control={control}
					render={({ field: { onChange, onBlur, value, name, ref } }) => (
						<div className='flex items-center'>
							<Switch
								size='small'
								onBlur={onBlur}
								onChange={onChange}
								checked={Boolean(value)}
								inputRef={ref}
							/><label>{t('common:ACTIVE')}</label> </div>)} />
			</Grid>
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
							required
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
							required
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
				<Controller
					name="email"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							size='small'
							label={t('EMAIL')}
							variant="outlined"
							fullWidth
							required
							disabled={editMode}
							error={!!errors.email}
							helperText={errors?.email?.message}
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
					name="isAdmin"
					defaultValue={false}
					control={control}
					render={({ field }) => (
						<BooleanSelector
							{...field}
							size='small'
							label={t('IS_ADMIN')}
							variant="outlined"
							fullWidth
							required
						/>)} />
			</Grid>

			<Grid item xs={12} md={6} className='w-full p-16'>
				<Controller
					name="roles"
					control={control}
					render={({ field }) => (
						<GenericSelector<Role>
							{...field}
							multiple
							param={'id'}
							displayField={'name'}
							loadFunction={async () => {
								return await rolesRepository.findAll({ input: { where: {} } });
							}}
							render={(item) => <label>{item.name}</label>}
							size='small'
							label={t('common:USER_ROLES')}
							variant="outlined"
							fullWidth
						/>
					)} />
			</Grid>




			{/*<Grid item xs={12} md={6} className='w-full p-16'>
				<Controller
					name="area"
					control={control}
					render={({ field }) => (
						<GenericSelector<UserArea>
							{...field}
							param={'id'}
							displayField={'name'}
							loadFunction={async () => {
								return await userAreaRepo.findAll({ input: { where: {} } });
							}}
							render={(item) => <label>{item.name}</label>}
							size='small'
							label={t('common:AREA')}
							variant="outlined"
							fullWidth
						/>
					)} />
			</Grid>

			<Grid item xs={12} md={6} className='w-full p-16'>
				<Controller
					name="position"
					control={control}
					render={({ field }) => (
						<GenericSelector<UserPosition>
							{...field}
							param={'id'}
							displayField={'name'}
							loadFunction={async () => {
								return await userPositionRepo.findAll({ input: { where: { } } });
							}}
							render={(item) => <label>{item.name}</label>}

							size='small'
							label={t('common:Position')}
							variant="outlined"
							fullWidth
						/>
					)} />
						</Grid>*/}

		</Grid>


		{!editMode && <Grid container className='w-100'>
			<Grid item xs={12} md={6} className='w-full p-16'>
				<Controller
					name="password"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							size='small'
							label={t('auth:NEW_PASSWORD_FIELD_NAME')}
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
			</Grid>

			<Grid item xs={12} md={6} className='w-full p-16'>
				<Controller
					name="password2"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							size='small'
							label={t('auth:PASSWORD_CONFIRM_FIELD_NAME')}
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
			</Grid>


		</Grid>}

	</form>);


};


export default UserForm;
