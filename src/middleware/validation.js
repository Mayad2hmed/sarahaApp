export function validation(schema){
    return(req,res,next)=>{
        let{error}=schema.validate(req.bod,{abortaEarly:false})
        if(!error){
            next()
        }else{
            res.json({message:"error",error:error.details})
        }
    }
}