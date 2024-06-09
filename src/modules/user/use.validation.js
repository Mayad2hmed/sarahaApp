import Joi from "joi";
export const signupSchema=Joi.object({
    name:Joi.string().min(3).max(10).required(),
    email:Joi.string().email({tlds:{allow:['com','net']}}).required(),
    password:Joi.string().pattern(/^[A-Z][a-z]{3,6}$/).required(),
    rePassword:Joi.ref('password'),
    age:Joi.number().min(18).max(80).required()
})
export const signinSchema=Joi.object({
    email:Joi.string().email({tlds:{allow:['com','net']}}).required(),
    password:Joi.string().pattern(/^[A-Z][a-z]{3,6}$/).required(),
  
})