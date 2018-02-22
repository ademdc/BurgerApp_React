import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const xf = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
ReactDOM.render(xf, document.getElementById('root'));
registerServiceWorker();
