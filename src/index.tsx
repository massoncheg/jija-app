import React from 'react';
import {BrowserRouter, HashRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './Store/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <HashRouter>
  <Provider store = {store}>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </Provider>
  </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();
