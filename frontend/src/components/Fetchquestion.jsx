import React, { useState } from 'react'

export const Fetchquestion = (prop) => {
    const [mainarr,setmainarr]=useState([])

        const fetchdata= async()=>{
try{
const response= await fetch(`${window.location.origin}/fetchquestion`)
const data = await response.json();
console.log(data.message);
setmainarr(data.message)
}
catch(error){
    console.log("some for feching data in database")
}
        }

  return (
    <>
    <button onClick={fetchdata}>Start</button>
    <div>
  {
   mainarr.map((data)=>{
   return <>
   <h1>{data.question}</h1>
  {data.options.map(data=>{
   return <li>{data}</li>
  })}

  <div>{data.answer}</div>
   </>
   })
  }
</div>
    </>
  )
}
