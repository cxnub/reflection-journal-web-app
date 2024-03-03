import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import './main.css';
import Login from './login/presentation/View/Login.tsx';

ReactDOM.createRoot(document.getElementById("login")!).render(
    <React.StrictMode>
      <Login />
    </React.StrictMode>
);