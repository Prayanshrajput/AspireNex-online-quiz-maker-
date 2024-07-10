const que=require("../models/question")

exports.fetchquestion=async (req,res)=>{
    try{
const data=await que.find({})

res.json({
    success:true,
    message:data
})
    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

exports.fetchquestion_byid=async (req,res)=>{
    try{
const{idofquize}=req.body

const data=await que.find({idofquize})

res.json({
    success:true,
    message:data
})
    }
    catch(error){
        res.json({
            success:true,
            message:error.message
        })
    }
}