import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PrimeReactProvider } from "primereact/api";
import 'primereact/resources/themes/lara-light-blue/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';                // Core CSS
import 'primeicons/primeicons.css';                              // Icons
import { ptOptions } from '/pt.config';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider value={{ pt: ptOptions, ripple: true }}>
        <App />
    </PrimeReactProvider>
  </StrictMode>,
)
