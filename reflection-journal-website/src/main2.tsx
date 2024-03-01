import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.tsx'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('login')!).render(
    <React.StrictMode>
      <Login />
    </React.StrictMode>,
  )