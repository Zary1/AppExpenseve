import mongoose from "mongoose"
import   UtenteServices   from "../services/Utente.Service.js"




const UtenteCreateControle= async(req,res)=>{
    try{

 
const {name,email,password}=req.body
if(!name || !email || !password ){
    return res.status(400).send({message:"campos vazio"})
}
  const utenteCriado= await UtenteServices.createUtente(req.body)
  if(!utenteCriado){
   return  res.status(4001).send({message:"erro ao criar utente"})
  }
res.status(201).send({
    message:"criado utente com sucesso",
    id:utenteCriado._id,
    name,
    email,
    password
    
})
}catch(err){
    res.status(500).send({ message: err.message })
}
}
const FindAllUtente= async(req,res)=>{
  try { const users= await UtenteServices.FindAllUtente()
    if(!users){
        return res.status(400).send({message:"Nenhum utente encontrado"})
    }
   
   res.send(users)}catch(err){
    res.status(500).send({ message: err.message })
}
}
const BuscarId=async(req,res)=>{
   try{ 
    const id = req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
    return  res.status(400).json("nao encontrado")
    }
    const user= await  UtenteServices.FindById(id)
    // const user= req.user
  
    if(!user){
     return res.status(400).json("nao encontrado na tabela")
    }
  
  res.send(user)}catch(err){
    res.status(500).send({ message: err.message })
}
  }
const UpdateUtente= async(req,res)=>{
  try  {
    const {name,email,password}=req.body
    if(!name && !email && !password ){
        return res.status(400).send({message:"submit ao menos um campo "})
    }
     const id= req.params.id
     if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message:"invalid id"})

     }
     const user= await UtenteServices.FindById(id)
     if(!user){
        return res.status(400).send({message:"not found user "})
    }
    await UtenteServices.UpdateService( id, name,email,password)
res.send({message:"actualizado"})
}catch(err){
    res.status(500).send({ message: err.message })
}
}
export default {UtenteCreateControle,BuscarId,FindAllUtente,UpdateUtente}
