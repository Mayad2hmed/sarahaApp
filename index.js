import express from "express"
import dotenv from "dotenv"
dotenv.config({})
import { connection } from "./db/connection/connection.js"
import userRoutes from "./src/modules/user/user.router.js"
import messageRouter from "./src/modules/msg/message.router.js"
import cors from 'cors'
const app=express()
const port=3000
app.use(cors())
app.use(express.json())
connection()
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/msg",messageRouter)

app.get('/',(req,res)=>res.send('hello world'))
app.use("*",(req,res,next)=>{
next(new Error(`invalid url ${req.originalUrl}`))
})
app.use((err,req,res,next)=>{
   process.env.MODE=="dev"?res.json({err:err.message,stack:err.stack}):res.json({err:err.message})
})
app.listen(port,()=>console.log(`Example app listening on port ${port}`))