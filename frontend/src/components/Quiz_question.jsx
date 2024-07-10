import React, { useContext,useRef, useEffect, useState } from 'react'
import { Datacontext } from '../context/Datacontext'
import { Singlequestion } from './Singlequestion'
import { Result } from './Result'
import { Timer } from './Timer'

export const Quiz_question = (prop) => {
  
  const{time,setid,score,setScores}=useContext(Datacontext)
  const[ind,setind]=useState(0)
  const[finish,setfinish]=useState(false)
  const divRef = useRef({});
 const [mainarr,setmainarr]=useState([])
 const [isFullscreen, setIsFullscreen] = useState(true);
    

     const enterFullScreen = () => {
       if (divRef.current.requestFullscreen) {
         divRef.current.requestFullscreen();
       } else if (divRef.current.mozRequestFullScreen) { // Firefox
         divRef.current.mozRequestFullScreen();
       } else if (divRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
         divRef.current.webkitRequestFullscreen();
       } else if (divRef.current.msRequestFullscreen) { // IE/Edge
         divRef.current.msRequestFullscreen();
       }
     };
 

     const checkFullscreen = () => {
       const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
       setIsFullscreen(!!fullscreenElement);
     };
   
     useEffect(() => {
       document.addEventListener('fullscreenchange', checkFullscreen);
       document.addEventListener('webkitfullscreenchange', checkFullscreen);
       document.addEventListener('mozfullscreenchange', checkFullscreen);
       document.addEventListener('MSFullscreenChange', checkFullscreen);
   
       // Cleanup event listeners on component unmount
       return () => {
         document.removeEventListener('fullscreenchange', checkFullscreen);
         document.removeEventListener('webkitfullscreenchange', checkFullscreen);
         document.removeEventListener('mozfullscreenchange', checkFullscreen);
         document.removeEventListener('MSFullscreenChange', checkFullscreen);
       };
     }, []);
   



   if(!isFullscreen||finish||time){
    return <Result></Result>
   }
   else{
    enterFullScreen()
   }

    const fechdata=async()=>{
        const res = await fetch(`${window.location.origin}/fetchquestion_byid`, {
            method: "POST",
            body: JSON.stringify({idofquize:prop.id}), // Add the correct data in the body
            headers: {
              "Content-Type": "application/json"
            }
          });

          const ans= await res.json()
   
        setmainarr(ans.message)

        
        if(score.length==0)
      {
        const array = new Array(mainarr.length).fill(0);
          setScores(array)
        }

    }

    fechdata()

  

  return (
<div ref={divRef} className="flex flex-col w-screen h-screen  items-center gap-5">
<div className="flex justify-around w-screen bg-gray-400">
<div className="  w-[40%] flex text-[25px] font-bold">Question - {ind+1}/{mainarr.length}</div>
<Timer className=" w-[40%]"></Timer>
</div>

<div>
  {
    // filter se repleace karna hai
   mainarr.map((data,index)=>{
   if(index==ind)
   {
    return <Singlequestion key={index} index={index} question={data.question} options={data.options} answer={data.answer}></Singlequestion>
   }}
  )
  }
</div> 

<div className="flex justify-around w-[500px] h-[50px]">
  
 
{
ind>0?
(<button 
  className="flex justify-center items-center text-[2 font-bold 0px] w-[100px] h-[50px] bg-slate-300 hover:bg-slate-700 hover:text-white"
  onClick={()=>{
  setind((prev)=>prev-1)
 }}>Previous</button>)
 :
 (<button></button>)
}

{
 ind<mainarr.length-1?
( <button 
  className="flex justify-center items-center text-[2 font-bold 0px] w-[100px] h-[50px] bg-blue-400 hover:bg-blue-700 hover:text-white"
  onClick={()=>{
  setind((prev)=>prev+1)
 }}>Next</button>)
:(<button
className="flex justify-center items-center text-[2 font-bold 0px] w-[100px] h-[50px] bg-red-400 hover:bg-red-700 hover:text-white"
onClick={()=>{
  setfinish(true)
}}
>FINISH</button>)

}
</div>

</div>
)
}
