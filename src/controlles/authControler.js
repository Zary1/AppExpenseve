import   {loginServices}  from "../services/auth.Services.js"
import   bcrypt   from "bcrypt"

const login=async(req,res)=>{
   const {email,password}=req.body
   try{
    const user= await loginServices(email)
  if(!user){
    return res.status(404).send({message:"User or password not found"})
  }

    const passwordIsValid= await bcrypt.compare(password,user.password)
    if(!passwordIsValid ){
        return res.status(404).send({message:"User or password not found "})
      }



   res.send({message:"Login ok"})

   }catch(err){
    res.status(500).send({message:err.message})
   }


}

export {login} 