
import  UtenteModel from "../models/Utente.Model.js"

const loginServices=(email)=>{
    return UtenteModel.findOne({email:email}).select("+password")

}

export { loginServices }