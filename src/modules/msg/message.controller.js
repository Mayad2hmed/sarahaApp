import { messageModel } from "../../../db/models/message.model.js"
import jwt from "jsonwebtoken"
import {userModel} from "../../../db/models/user.model.js"
import handelError from "../../middleware/handelAsyncError.js"

export const addMsg=handelError(async(req,res)=>{
    let{msgText,receivedId}=req.body
    let existUser=await userModel.findById(receivedId)
    if(!existUser)return res.json({message:"user not found"})
    let addMsg=await messageModel.insertMany({msgText,receivedId})
    res.json({message:"success",addMsg})

})
export const getMessages=handelError(async(req,res)=>{
   
         let allMsg= await messageModel.find({receivedId:req.userId})
        res.json({message:"success",allMsg})
    
})