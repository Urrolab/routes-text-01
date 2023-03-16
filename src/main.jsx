import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/tailwind.css'
import { ToastContainer, toast } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <App/>
  <ToastContainer/>
  </>
)
