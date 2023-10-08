import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './planet.css'

import App from './App.jsx'
import NavBar from './pages/NavBar.jsx'
import Footer from './pages/Footer.jsx'

import { BrowserRouter } from 'react-router-dom'
import Sections from './pages/Sections'
import GetStart from './pages/GetStart'
import Consider from './pages/Consider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      <App/>
      <GetStart/>
      <Consider/>
      <Sections/>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
