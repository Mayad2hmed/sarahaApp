import { Schema, model } from "mongoose";

const userSchema=new Schema({
    name:{
        type:String,
        minLength:[3,"name is too short"],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minLength:[3,"password is too short"],
        maxLength:[100,"password is too long"],

    },
    verfied:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
})
export const userModel= model("User",userSchema)