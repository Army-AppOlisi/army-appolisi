import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import DatesContextProvider from './store/dates-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DatesContextProvider>    
      <App />
    </DatesContextProvider>
  </React.StrictMode>,
)
