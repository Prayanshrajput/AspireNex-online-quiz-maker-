const { config } = require("dotenv");
const express=require("express")
const app=express();
const cors=require("cors")
const path=require("path")
require("dotenv").config()
PORT=process.env.PORT||1111


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin: '*',
  methods: 'GET,POST,PUT,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  optionsSuccessStatus: 204
}))

const route=require("./routes/firstroute")
app.use(route)

const database=require("./config/database")
database()

app.get('/',(req,res)=>{
  app.use(express.static(path.resolve(__dirname,"frontend" , "dist")));
  res.sendFile(path.resolve(__dirname, "frontend","dist","index.html"))
})

app.listen(PORT,()=>{console.log(`ram ram port--> ${PORT}`)})