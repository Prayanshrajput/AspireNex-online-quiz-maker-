import React from 'react'

import { NavLink,Link } from 'react-router-dom' 

export const Navbar = () => {
 
  return (
    <div className="flex justify-evenly items-center w-screen h-[40px] bg-black font-extrabold text-[20px]">
 
 <NavLink to="/home" className=" text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl  ">
    Home
    </NavLink>

 <NavLink to="/createquiz" className=" text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl  ">
 Createquize
    </NavLink>

    <NavLink to="/quiz" className=" text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl  ">
    Quiz
    </NavLink>

   

    </div>
  )
}
