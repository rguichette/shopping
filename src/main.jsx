import React, {useEffect} from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import * as ReactDOM from 'react-dom';

import App from './App'
import './index.css'


import {ContextProvider} from './contexts/ContextProvider'

ReactDOM.render(<React.StrictMode>
  <ContextProvider>

    <App />
  </ContextProvider>
  </React.StrictMode>, document.getElementById('root'))