const title=require("../models/titleofquize")

exports.titlesave= async(req,res)=>{
    try{
const{quizetitle,time}=req.body

const ct= new title({nameofquize:quizetitle,idofquize:Date.now(),time})

const savetitle=ct.save()

res.json({
    success:true,
    message:ct
})
    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}