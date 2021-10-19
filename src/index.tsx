import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-muli';
import './i18n';
import './react-chartjs-2-defaults';
import './styles/index.css';


import App from './app/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {LaunchGqlClient} from 'app/modules/common/services/LaunchGqlClient';

LaunchGqlClient.init()
ReactDOM.render(
    <React.StrictMode>
        <App/>
        <ToastContainer/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
