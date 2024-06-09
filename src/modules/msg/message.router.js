import express from"express"
import { addMsg, getMessages } from "./message.controller.js"
import { auth } from "../../middleware/auth.js"

const messageRouter=express.Router()
messageRouter.post("/addMsg",addMsg)
messageRouter.get("/",auth,getMessages)




export default messageRouter