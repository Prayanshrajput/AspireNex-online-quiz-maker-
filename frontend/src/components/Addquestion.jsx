import React, { useContext, useState } from 'react'
import { Datacontext } from '../context/Datacontext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Addquestion = () => {

const[inp,setinp]=useState("")
const[quecount,setquecount]=useState(0)
const{obj,setobj}=useContext(Datacontext)

const changehandler=(e)=>{
setinp(e.target.value)
}



const postdata = async () => {
  try {
  
    const res = await fetch(`${window.location.origin}/addquestion`, {
      method: "POST",
      body: JSON.stringify(obj), // Add the correct data in the body
      headers: {
        "Content-Type": "application/json"
      }
    });
    const result = await res.json();
    setobj((prev)=>{return {...prev,question:"",options:[],answer:""}})
    setquecount((prev)=>prev+1)
    toast.success("Question Successfull Added")
  } catch (error) {
    console.log("Error fetching data from the server:", error.message);
  }
};

const submithandler= (e)=>{
//  setmainarr(prev=>[...prev,obj])
 obj.idofquize&&obj.question&&obj.options.length>1&&obj.answer?postdata():toast.error("Please complete all the entry")
 obj({question:"",options:[],answer:"",idofquize:obj.idofquize})
 console.log(obj)
}


const maininputhandler=(e)=>{
setobj((prev)=>{return {...prev,[e.target.name]:e.target.value}})
console.log(obj)
}



  return (
 <div className="flex justify-center items-center  h-screen w-screen bg-blue-300">
      <div className="flex flex-col border w-[50%] h-screen border-black gap-5">

<div className="flex justify-around text-[20px] font-bold">
  <div>NUMBER OF QUESTION</div>
  <div>{quecount}</div>
</div>

{/* questions */}
<div className="flex flex-col">
<label className="text-[20px] font-bold" htmlFor="">Question</label>
<input className=" text-[20px] font-semibold text-black  border border-black bg-slate-300 " type="text" name="question" value={obj.question} id="" onChange={maininputhandler} />
</div>

{/* option for  */}
<label className="text-[20px] font-bold" htmlFor="options">Options( Minimum 2 )</label>
<div>
<input className="border border-black" type="text" name="options" value={inp} onChange={changehandler} />
<button className="font-bold bg-gray-500 hover:bg-green-400" onClick={()=>{
  setobj((prev)=>{return {...prev,options:[...obj.options,inp]}})
  setinp("")
}}>ADD</button>
</div>

<label className="text-[20px] font-bold" htmlFor="">Answer( Present in Options)</label>
<input className="border border-black" type="text" name="answer" id="" value={obj.answer} onChange={maininputhandler} />
<div className="flex justify-center">
<button className="font-extrabold text-[20px] bg-red-500 hover:bg-green-600" onClick={submithandler}>Add question</button>
</div>

</div>

<div className="flex flex-col border w-[50%] h-screen border-black gap-5">
<div className="flex flex-col border  h-[60%] border-black gap-5">
  <h1 className="text-[20px] font-bold">Current question</h1>
  <h3 className="text-[18px] font-semibold" >{obj.question||"None"}</h3>
  {
   obj.options.length>0&&obj.options.map((data,index)=>{return <li key={index} className="text-[15px] font-semibold" >{data}</li>})
  }
  <div className="flex gap-5">
  <label className="text-[20px] font-bold" htmlFor="">Answer --&gt; </label>
  <h4 className=" text-green-600 font-bold text-[20px]">{obj.answer||"None"}</h4>
  </div>
</div>

<div className="flex justify-center gap-5">

<div className="flex justify-center items-center text-[2 font-bold 0px] w-[100px] h-[50px] bg-blue-500 hover:bg-blue-800 hover:text-white"
onClick={()=>{
  toast.success("Only working question is reset")
  setobj({question:"",options:[],answer:"",idofquize:obj.idofquize})
}}
>
  Reset
</div>

<div className="flex justify-center items-center text-[2 font-bold 0px] w-[100px] h-[50px] bg-red-400 hover:bg-red-700 hover:text-white"
onClick={()=>{
  setobj({question:"",options:[],answer:"",idofquize:""})
}}
>
  FINISH
</div>

</div>
</div>

<ToastContainer />
 </div>
  )
}
