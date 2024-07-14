import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/scss/setting.scss";
import "./assets/scss/custom.scss";
import Login from './publish/loginPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
reportWebVitals();
