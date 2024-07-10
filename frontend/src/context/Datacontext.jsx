import { Children, createContext, useEffect, useRef, useState } from "react";

export const Datacontext=createContext()

export default function DatacontextProvider({children}){
const[idofquize,setidofquize]=useState("")
const[obj,setobj]=useState({question:"",options:[],answer:""})
const[quiz,setquiz]=useState([])
const[id,setid]=useState({})
const[score,setScores]=useState([])
const[time,settime]=useState(false)
const num=true;

const fetchquize=async()=>{
    try{
const response= await fetch(`${window.location.origin}/fetchquiz`)
const data= await response.json();
 setquiz(data.message)
    }
    catch(error){
        console.log(error)
    }
}

fetchquize()
const value={
    idofquize,setidofquize,
    time,settime,
    score,setScores,
    obj,setobj,
    quiz,setquiz,
    id,setid,
    num
}

return <Datacontext.Provider value={value}>
    {children}
</Datacontext.Provider>
}

