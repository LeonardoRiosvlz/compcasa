import React  from 'react';
import { useTranslation } from 'react-i18next';

import AuthFormContainer from 'app/modules/auth/components/AuthFormContainer';
import LoginForm from 'app/modules/auth/components/LoginForm';


type Props = {}
const LoginPage: React.FC<Props> = (props: Props) => {
	const { t } = useTranslation('auth');
	return (
		  <AuthFormContainer title={t('LOGIN_FORM_MSG')}>

			  <br/>
			  <LoginForm />
		  </AuthFormContainer>
	);
};

export default LoginPage;
