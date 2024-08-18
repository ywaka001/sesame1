import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js/stable';
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
