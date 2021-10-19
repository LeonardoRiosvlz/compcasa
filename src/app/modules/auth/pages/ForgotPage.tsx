import React from 'react';
import { useTranslation } from 'react-i18next';

import AuthFormContainer from 'app/modules/auth/components/AuthFormContainer';
import ForgotForm from 'app/modules/auth/components/ForgotForm';


type Props = {}
const ForgotPage: React.FC<Props> = (props: Props) => {
	const { t } = useTranslation('auth');
	return (
		<AuthFormContainer title={t('FORGOT_FORM_MSG')}>

			<ForgotForm />
		</AuthFormContainer>
	);
};

export default ForgotPage;
