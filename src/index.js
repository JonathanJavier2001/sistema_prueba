import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/styles/layouts/index.css';
import Admin from 'layouts/Admin.js';
import reportWebVitals from 'reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Admin />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
