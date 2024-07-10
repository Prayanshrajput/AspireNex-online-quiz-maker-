import React, { useContext, useEffect, useState } from 'react'
import { Datacontext } from '../context/Datacontext'


export const Result = () => {
    const{score,setScores,setid}=useContext(Datacontext)
    const[correct,setcorrect]=useState(0)
    const[incorect,setincorect]=useState(0)



   useEffect(
    ()=>{
      setScores(score)
        score.map(data=>{
            if(data==100){

              setcorrect(correct+1)
          
            }
            else if(data==-1){
            
              setincorect(incorect+1)
         
            }
             
        })
    },
    []
   )




  return (
    <div className="flex w-screen h-screen justify-center items-center bg-violet-900">
      <div className="flex flex-col justify-center items-center gap-5 w-[400px] h-[500px] border border-black bg-white">
        <div className="flex justify-center w-[400px] h-[50px]  text-[25px] font-extrabold text-black ">
            Result
        </div>
      <div className="flex gap-5">
      <div className="flex w-[150px] h-[100px]  text-[20px] font-bold justify-center items-center  bg-blue-400">
       Total  {score.length}
        </div>
        <div className="flex w-[150px] h-[100px]   text-[20px] font-bold justify-center items-center  bg-green-400">
        Correct  {correct}
        </div>
      </div>

       <div className="flex gap-5">
       <div className="flex w-[150px] h-[100px]    text-[20px] font-bold justify-center items-center  bg-red-400">
        Incorrect {incorect}
        </div>
        <div className="flex w-[150px] h-[100px]    text-[20px] font-bold justify-center items-center bg-yellow-400">
        Attempt {correct+incorect}
        </div>
       </div>

       <div className="flex gap-5 w-[300px] h-[100px] bg-lime-300 justify-center items-center text-[20px] font-bold">
        Score {correct}
       </div>

      <div className="flex justify-center items-center text-[20px] w-[70px] h-[25px] font-bold bg-black text-white hover:bg-white hover:text-black" onClick={()=>{ setid("")}}>
    Back
      </div>
      </div>
    
    </div>
  )
}
