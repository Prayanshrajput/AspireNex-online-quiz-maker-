import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DatacontextProvider from './context/Datacontext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Createmain } from './components/Createmain.jsx'
import { Layout } from './components/Layout.jsx'
import { Quiz } from './components/Quiz.jsx'
import { Result } from './components/Result.jsx'
import { Home } from './components/Home.jsx'

const router=createBrowserRouter([
  {
    path: "/",
    element : <Layout/>,
  
   children:[
    {
      path: "/",
      element :<Home></Home>
    },
    {
      path: "/home",
      element :<Home></Home>
    },
    {
      path: "/createquiz",
      element : <Createmain/>
    },
    {
      path:"/quiz",
      element:<Quiz></Quiz>
    },
    {
      path:"/result",
      element:<Result></Result>
    }
  ]
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <DatacontextProvider>
  <RouterProvider router={router}>
  </RouterProvider>
  </DatacontextProvider>,
)
