import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDom from 'react-dom/protofolio/src/index.js';
import './index.css';
import "animate.css";

import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "./context/ThemeContext";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
 <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
