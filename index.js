import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';

import eventsR from './store/reducers/eventsR';
import uploadEventR from './store/reducers/uploadEventR';
import reservationR from './store/reducers/ReservationR';
import stateOfTableR from './store/reducers/stateOfTablesR';
import authR from './store/reducers/AuthR';

import * as firebase from 'firebase';

import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var config = {
    apiKey: "***",
    authDomain: "***",
    databaseURL: "***",
    projectId: "***",
    storageBucket: "***",
    messagingSenderId: "***"
  };

firebase.initializeApp(config);

const rootReducer = combineReducers({
    eventDown: eventsR,
    eventUp: uploadEventR,
    reservation: reservationR,
    stateTable: stateOfTableR,
    auth: authR

});

const store=createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
