
import  UtenteModel from "../models/Utente.Model.js"

const createUtente=(body)=>{
return UtenteModel.create(body)
}
const FindAllUtente=()=>{
    return UtenteModel.find()
    }

    const FindById=(id)=>{
        return UtenteModel.findById(id)
    
    }

const UpdateService=(id,name,email,password)=>{
    return UtenteModel.findOneAndUpdate({_id:id},{ name,email,password})
}
 export default{createUtente,FindAllUtente,FindById,UpdateService}