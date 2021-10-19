import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es';
import en from './locales/en';


const resources = {
	en: {
		translation: {
			'Welcome to React': 'Welcome to React and react-i18next',
			...en
		}
	},
	es: {
		translation: {
			'Welcome to React': 'Bienvenido a React y react-i18next',
			...es
		}
	}
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: localStorage.getItem('i18n') ?? 'es',

		keySeparator: false, // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;
