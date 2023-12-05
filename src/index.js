import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //note:Strict Mode: React provides a "strict mode" that helps you catch potential problems in
  //your application. When you wrap your app with <React.StrictMode>, it intentionally invokes certain
  //functions twice to detect side-effects. This is a debugging feature and should not happen in the production
  //build.To stop this behavior, you can remove the <React.StrictMode> wrapper in your app's entry point 
  //or development configuration.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
