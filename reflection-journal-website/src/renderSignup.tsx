import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import './main.css';
import Signup from './signup/presentation/View/signup.tsx';

ReactDOM.createRoot(document.getElementById("signup")!).render(
    <React.StrictMode>
      <Signup />
    </React.StrictMode>
  );