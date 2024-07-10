import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'
 import {Home} from './Home'
export const Layout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
     
    </div>
  )
}
