import bcrypt from"bcrypt"
import jwt from "jsonwebtoken"
import {userModel} from "../../../db/models/user.model.js"
import sendEmail  from "../../email/sendEmail.js"
import  handelError  from "../../middleware/handelAsyncError.js"

export const signUp=handelError(async(req,res,next)=>{

        let {name,email,password}=req.body
        let existUser=await userModel.findOne({email})
        if(existUser)return res.json({message:"email already exist"})
       let hashPass= bcrypt.hashSync(password,parseInt(process.env.SALTROUNDS))  
    let addUser=  await userModel.insertMany({name,email,password:hashPass})
  //  console.log(addUser);
    let verifyToken=jwt.sign({id:addUser[0]._id},process.env.VERFIY_SCRET)

    sendEmail({email,api:`http://localhost:3000/api/v1/user/verfiy/${verifyToken}`})
        res.json({message:"success",addUser})
   
  
})
export const signIn=handelError(async(req,res)=>{
   
        let {email,password}=req.body
        let existUser=await userModel.findOne({email})
        if(existUser){
            
            let matched=bcrypt.compareSync(password,existUser.password)
            if(matched){
             let token=jwt.sign({id:existUser._id},process.env.SECRET_KEY)
                res.json({meassage:"welcome",token})
            }else{
                res.json({meassage:"wrong password"})

            }
        }else{
            res.json({meassage:" you have to register first"})

        }})
    

    


export const verfyEmail=handelError((req,res)=>{
    let {token}=req.params
    jwt.verify(token,process.env.VERFIY_SCRET,async(err,decoded)=>{
        if(err)return res.json({message:"invalid token",err})
            let updateUser=await userModel.findByIdAndUpdate(decoded.id,{verfied:true},{new:true})
            res.json({message:"success",updateUser})
})
})