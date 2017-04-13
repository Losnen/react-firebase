import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

const config = {
    apiKey: "AIzaSyB_tTzdj5MiBRFrOpOC4yomJ5BM2f_qh5c",
    authDomain: "reactgram-216ab.firebaseapp.com",
    databaseURL: "https://reactgram-216ab.firebaseio.com",
    projectId: "reactgram-216ab",
    storageBucket: "reactgram-216ab.appspot.com",
    messagingSenderId: "766232945691"
};
firebase.initializeApp(config);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
