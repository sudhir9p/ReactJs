import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import App from './core/app';
import './index.css';
import store from './core/state/store';



ReactDOM.render(
    <Provider store={store}>
        <App >

        </App>
    </Provider>,
    document.getElementById('root'));
