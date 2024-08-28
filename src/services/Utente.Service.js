const UtenteModel=require("../models/Utente.Model")

const createUtente=(body)=>{
return UtenteModel.create(body)
}
const FindAllUtente=()=>{
    return UtenteModel.find()
    }
module.exports={createUtente,FindAllUtente}