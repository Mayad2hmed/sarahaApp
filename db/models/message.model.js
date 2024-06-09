import { Schema, Types, model } from "mongoose";

const meassageSchema=new Schema({
    msgText:{
        type:String,
        minLength:[3,"message is too short"],
        required:true
    },
    receivedId:{
        type:Types.ObjectId,
        ref:"User"
    }
},
{
    timestamps:true
})
export const messageModel=model("Msg",meassageSchema)