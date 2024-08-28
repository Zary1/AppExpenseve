const UtenteServices= require("../services/Utente.Service")


const UtenteCreateControle= async(req,res)=>{
const {name,email,password,balance}=req.body
if(!name || !email || !password || !balance){
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
    password,
    balance
    
})
}

const FindAllUtente= async(req,res)=>{
    const users= await UtenteServices.FindAllUtente()
    if(!users){
        return res.status(400).send({message:"Nenhum utente encontrado"})
    }
   
   res.send(users)
}
module.exports={UtenteCreateControle,FindAllUtente}