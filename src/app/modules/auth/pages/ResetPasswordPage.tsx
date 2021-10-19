import React from 'react';
import { useTranslation } from 'react-i18next';
import AuthFormContainer from 'app/modules/auth/components/AuthFormContainer';
import ResetPasswordForm from 'app/modules/auth/components/ResetPasswordForm';


type Props = {}
const ResetPasswordPage: React.FC<Props> = (props: Props) => {
	const { t } = useTranslation('auth');
	return (
		<AuthFormContainer title={t('RESET_PASSWORD_FORM_MSG')}>
			<ResetPasswordForm />
		</AuthFormContainer>
	);
};

export default ResetPasswordPage;
