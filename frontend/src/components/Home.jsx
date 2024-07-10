import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Datacontext } from '../context/Datacontext'

export const Home = () => {

  const{id,setid}=useContext(Datacontext)

  if(id){
    setid(" ")
  }
  return (
    
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-gray-400">

       <div className="flex gap-5">
       <NavLink to="/quiz" className="flex bg-red-500 w-[250px] h-[100px] justify-center items-center text-[30px] font-bold">Attemp Quiz</NavLink>
       <NavLink to="/createquiz" className="flex bg-green-500 w-[250px] h-[100px] justify-center items-center text-[30px] font-bold">Create Quiz</NavLink>
       </div>
        
    </div>
  )
}
