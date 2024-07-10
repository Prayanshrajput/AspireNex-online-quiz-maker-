const title=require("../models/titleofquize")

exports.fetchquiz=async (req,res)=>{
    try{
const data=await title.find({})

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