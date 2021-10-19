import React from 'react';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import ButtonLoader from 'app/modules/common/components/ButtonLoader';
import {toast} from 'react-toastify';
import useRepository from "app/modules/common/hooks/use-repository";
import {AuthRepository} from "api/repositories/user/auth.repository";

type ForgotFormFields = {
    email: string;
}


type Props = {}
const ForgotForm: React.FC<Props> = (props: Props) => {

    const authRepo = useRepository(AuthRepository)
    const {t} = useTranslation(['auth', 'common']);


    const [loading, setLoading] = React.useState<boolean>(false);
    const schema = yup.object().shape({
        email: yup.string().required(t('EMAIL_REQUIRED'))
    });

    const {register, handleSubmit, formState: {errors, dirtyFields, isValid}} = useForm<ForgotFormFields>({
        // @ts-ignore
        resolver: yupResolver(schema)
    });

    const onSubmit = ({email}: ForgotFormFields) => {
        setLoading(true);
        const redirectTo = `${window.location.origin}/auth/reset-password`;
        authRepo.forgotPassword({email, redirectTo}).then(() => {
            setLoading(false);
            toast.info(t('FORGOT_PASSWORD_SUCCESS'));

        }).catch((err) => {
            setLoading(false);
            toast.error(err?.toString());
        });
    };

    return (
        <form
            name="forgotForm"
            noValidate
            className="flex flex-col justify-center w-full"
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField
                {...register('email')}
                className="mb-32"
                size='small'
                label={t('common:EMAIL')}
                autoFocus
                variant="outlined"
                fullWidth
                error={!!errors.email}
                helperText={errors?.email?.message}
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
                disabled={loading}
            >
                {loading ? <ButtonLoader/> : t('RECOVER')}
            </Button>
        </form>


    );
};

export default ForgotForm;
