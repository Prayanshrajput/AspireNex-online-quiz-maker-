const mongoose=require("mongoose")

const question=new mongoose.Schema({
    question:{
        type:String,
        require:true
    },
    options:[
        {
            type:String
        }
    ]
    ,
    answer:{
        type:String,
        require:true
    },
    idofquize:{
        type:String,
        require:true,
        
    }
})

module.exports=mongoose.model("question",question)