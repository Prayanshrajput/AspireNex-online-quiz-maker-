const mongoose =require("mongoose")

require("dotenv").config()

const url = process.env.DATABASE_URL

const dbconnect=()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("database connect successfully")})
    .catch((error)=>{ console.log("error in db")
    console.log(error.message)
    process.exit(1); })
}

module.exports=dbconnect