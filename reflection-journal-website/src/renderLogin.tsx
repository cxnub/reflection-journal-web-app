import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import './main.css';
import App from './App';
import Login from './login/presentation/View/Login.tsx';

ReactDOM.createRoot(document.getElementById("login")!).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);