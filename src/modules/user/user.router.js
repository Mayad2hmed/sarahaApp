import express from"express"
import { signIn, signUp, verfyEmail } from "./user.controller.js"
import {signinSchema, signupSchema} from "./use.validation.js"
import {validation} from '../../middleware/validation.js'
const userRoutes=express.Router()
userRoutes.post("/signup",validation(signupSchema),signUp)
userRoutes.post("/signin",validation(signinSchema),signIn)
userRoutes.get("/verfiy/:token",verfyEmail)




export default userRoutes