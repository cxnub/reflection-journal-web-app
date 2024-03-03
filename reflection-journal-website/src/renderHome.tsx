import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import './main.css';
import Home from './home/presentation/View/home.tsx';

ReactDOM.createRoot(document.getElementById("home")!).render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);