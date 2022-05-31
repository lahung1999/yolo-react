import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter } from "react-router-dom"

import { store } from './redux/store'
import { Provider } from 'react-redux'


import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './sass/index.scss'

import Layout from './components/Layout'

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <Layout />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
