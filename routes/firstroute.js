const express=require("express")

const route=express.Router()

const{question}=require("../controllers/question")

const{fetchquestion,fetchquestion_byid}=require("../controllers/fetchquestion")
const{titlesave}=require("../controllers/createquize")
const{fetchquiz}=require("../controllers/fetchquiz")

route.post("/addquestion",question)
route.get("/try",(req,res)=>{res.json({success:true,message:"pass"})})

route.get("/fetchquestion",fetchquestion)

route.post("/createtitle",titlesave)

route.get("/fetchquiz",fetchquiz)

route.post("/fetchquestion_byid",fetchquestion_byid)

module.exports=route