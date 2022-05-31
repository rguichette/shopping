import React, {useEffect} from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import * as ReactDOM from 'react-dom';

import App from './App'
import './index.css'

ReactDOM.render(<React.StrictMode>
    <App />
  </React.StrictMode>, document.getElementById('root'))