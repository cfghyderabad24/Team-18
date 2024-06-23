import React from 'react'
import ReactDOM from 'react-dom/client'
// import GridExample from './GridExample.jsx'
import Cards from './Cards.jsx'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
