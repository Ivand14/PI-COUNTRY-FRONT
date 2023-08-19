import './index.css'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import store from './redux/store/store'

axios.defaults.baseURL = 'https://pi-back-production-e9b7.up.railway.app/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
