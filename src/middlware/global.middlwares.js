const UtenteServices= require("../services/Utente.Service")
const moongose=require("mongoose")

const validId=(req,res,next)=>{
    const id = req.params.id
    if(!moongose.Types.ObjectId.isValid(id)){
    return  res.status(400).json("nao encontrado")
    }
    next()
}
const validUser= async(req,res,next)=>{
    const id = req.params.id
    const user= await UtenteServices.FindById(id)
    if(!user){
       return res.status(400).send({message:"not found user "})
   }
   req.id=id
   req.user=user
   next()
}
module.exports={validId,validUser}