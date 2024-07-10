const que=require("../models/question")

exports.question=async(req,res)=>{
try{
 const{question,answer,options,idofquize}=req.body

 const newquestion=new que({question,answer,options,idofquize})

  const savequestion=newquestion.save()

res.json({
    success:true,
    message:savequestion
})
}
catch(error){
res.json({
    success:false,
    message:error.message
})
}
}