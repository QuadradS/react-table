import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import rootReducer from './state/reducers';
import './assets/css/core-style.css';
import 'react-select/dist/react-select.css';


const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);