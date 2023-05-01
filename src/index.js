import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "react-image-gallery/styles/css/image-gallery.css";

import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/scss/style.scss';

import{ init } from 'emailjs-com';
init("user_8TTaCpoUxE58HagIBVcDe");

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
