

import React , {Children} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MenuA from './menus/MenuA.jsx'
import MenuB from './menus/MenuB.jsx'
import MenuC from './menus/MenuC.jsx'
import MenuD from './menus/MenuD.jsx'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/mena",
        element: <MenuA/>
      },
      {
        path: "/menb",
        element: <MenuB/>
      },
      {
        path: "/menc",
        element: <MenuC/>
      },
      {
        path: "/mend",
        element: <MenuD/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
