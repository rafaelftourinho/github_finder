import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Repos from './components/Repos'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages 
import Home from './routes/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { path: '/users/:username/repos',
        element: <Repos />
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
