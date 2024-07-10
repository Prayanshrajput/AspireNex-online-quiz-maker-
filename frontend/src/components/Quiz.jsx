import React, { useContext, useState } from 'react'
import { Datacontext } from '../context/Datacontext'
import { Quiz_question } from './Quiz_question'

export const Quiz = () => {

    const{quiz,setquiz,num,id,setid}=useContext(Datacontext)
   

if(id.id){
return <Quiz_question  id={id.id} time={id.time}></Quiz_question>
}

  return (
<div  className="flex flex-col flex-wrap h-screen w-screen gap-16">
  
    <div className="flex w-screen   justify-center items-center flex-wrap gap-5">
    <div className=" flex w-screen justify-center items-center text-[25px] font-bold text-red-500">
      IF YOU WANT TO ATTEMPT ANY QUIZ SO JUST CLICK 
    </div>
      {
        quiz.map((data,index)=>{
            return   <div  key={index} name="start"  onClick={(e)=>{
                setid({id:e.target.id,time:e.target.getAttribute('time') }) 
            }}  className="flex  text-[25px] rounded-md font-bold flex-col justify-center items-center hover:bg-green-400 bg-slate-200 h-[200px] w-[250px] " id={data.idofquize} time={data.time}>
           {data.nameofquize} <br />
         Time - {data.time}
        </div>
        })
      }
    </div>
</div>
  )

   
}
