const mongoose=require("mongoose")

const title=new mongoose.Schema({
    nameofquize:{
        type:String,
        require:true
    },
    idofquize:{
        type:String,
    },
    numberofque:{
        type:String,
    },
    time:{
        type:String
    }
})

module.exports=mongoose.model("title",title)