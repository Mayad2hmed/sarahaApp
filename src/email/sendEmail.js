import nodemailer from "nodemailer"
import  {emailtemplet}  from "./emailTemplet.js";
export default async function sendEmail(options){
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'eng.mayada.ahmed.elnagar@gmail.com',
           pass: 'rthb myqq cypn jrhf'
       }
   });
  
    const info=await transport.sendMail({
       
            from: 'Rout cycle 40', // sender address
            to: options.email, // list of receivers
            subject: 'verfication', // Subject line
            html:emailtemplet(options.api) // plain text  
      
    })
    console.log("message sent",info.messageId);
   }
