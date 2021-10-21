import React from 'react';
import {useTranslation} from 'react-i18next';
import {Controller, useForm} from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import useAuth from 'app/modules/auth/hooks/use-auth';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ButtonLoader from 'app/modules/common/components/ButtonLoader';
import {FormUtils} from 'app/modules/common/utils/FormUtils';
import _ from '@lodash';
import {toast} from 'react-toastify';
import {Profile} from 'api/repositories/user/types/user.types';
import CountrySelector from 'app/modules/common/components/CountrySelector';
import GenderSelector from 'app/modules/common/components/GenderSelector';
import {UserGender} from 'api/graphql/schema/types';
import useRepository from "app/modules/common/hooks/use-repository";
import {UserRepository} from "api/repositories/user/user.repository";


export type FormFields = Omit<Profile, 'area' | 'position'> & {}


type Props = {}
const GeneralInfoForm: React.FC<Props> = (props: Props) => {


    const [loading, setLoading] = React.useState<boolean>(false);
    const {t} = useTranslation(['users', 'common']);
    const {user, myInfo} = useAuth();
    const [profileValues, setProfileValues] = React.useState<FormFields | {}>({});


    const userRepo = useRepository(UserRepository)


    const {handleSubmit, control, setValue, formState: {errors, dirtyFields, isValid}} = useForm<FormFields>({
        defaultValues: {
            city: '',
            country: '',
            gender: UserGender.NotSpecified,
            personalWeb: '',
            btcWallet: '',
            phoneNumber: '',
            aboutMe: ''


        }
    });

    React.useEffect(() => {
        userRepo.getMyProfile().then((result) => {
            const defaultValues: FormFields = {...result};
            setProfileValues(defaultValues);
            Object.keys(defaultValues).forEach((k) => {
                setValue<keyof FormFields>(k as keyof FormFields, defaultValues[k as keyof FormFields]);
            });
        }).catch((err) => {
            toast.error(err?.toString());
        });
    }, []);


    const onSubmit = (data: FormFields) => {
        setLoading(true);

        const toUpdateData: FormFields = FormUtils.toUpdateValue<FormFields, FormFields>(data, profileValues);

        userRepo.updateMe({
            input: {
                profile: {
                    ...toUpdateData
                }
            }
        }).then(() => {
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
                    name="country"
                    control={control}
                    render={({field}) => (
                        <CountrySelector
                            {...field}
                            size='small'
                            label={t('COUNTRY')}
                            variant="outlined"
                            fullWidth
                        />)}/>
            </Grid>

            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                    name="city"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('CITY')}
                            variant="outlined"
                            fullWidth

                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Icon className="text-18">apartment</Icon>
                                    </InputAdornment>
                                )
                            }}

                        />)}/>
            </Grid>

            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                    name="gender"
                    control={control}
                    render={({field}) => (
                        <GenderSelector
                            {...field}
                            size='small'
                            label={t('GENDER')}
                            variant="outlined"
                            fullWidth

                        />)}/>
            </Grid>

            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                    name="phoneNumber"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('PHONE')}
                            variant="outlined"
                            fullWidth

                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Icon className="text-18">phone</Icon>
                                    </InputAdornment>
                                )
                            }}

                        />)}/>
            </Grid>

            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                    name="personalWeb"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('WEB_SITE')}
                            variant="outlined"
                            fullWidth

                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Icon className="text-18">language</Icon>
                                    </InputAdornment>
                                )
                            }}

                        />)}/>
            </Grid>


            {/*<Grid item xs={12} md={6} className='w-full p-16'>
				<Controller
					name="birthday"
					control={control}
					render={({ field }) => (
						<DatePicker
							// onBlur={field.onBlur}
							ref={field.ref}
							value={field.value}
							onChange={e => {}}
							format="yyyy-MM-d"
							className="w-full"
							label={t('BIRTHDAY')}
							name="birthday"
							type='date'
							onAccept={(date: Moment | null ) => {
								if(date){
									console.log(date.toDate())
									setValue('birthday', date.toDate(), {shouldDirty: true, shouldValidate: true})
								}
							}}
							error={!!errors.birthday}
							helperText={errors?.birthday?.message}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon>
											cake
										</Icon>
									</InputAdornment>
								)
							}}

							inputVariant="outlined"
							size='small'

						/>
					)}
				/>
			</Grid>

            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                    name="btcWallet"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('BTC_WALLET')}
                            variant="outlined"
                            fullWidth

                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Icon className="text-18">attach_money</Icon>
                                    </InputAdornment>
                                )
                            }}

                        />)}/>
            </Grid>*/}

            <Grid item xs={12} className='w-full p-16'>
                <Controller
                    name="aboutMe"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            multiline
                            rows={4}
                            size='small'
                            label={t('ABOUT_ME')}
                            variant="outlined"
                            fullWidth
                        />)}/>
            </Grid>


            <Grid item xs={12} className='w-full p-16 flex justify-center'>
                <Button variant='contained'
                        className='sm:w-96 w-full'
                        color='secondary'
                        disabled={_.isEmpty(dirtyFields) || !isValid || loading}

                        type='submit'>{loading ? <ButtonLoader/> : t('common:SAVE')}
                </Button>
            </Grid>


        </Grid>


    </form>);


};


export default GeneralInfoForm;
