import mongoose from "mongoose"
import bcrypt from "bcrypt"

const Utente = new  mongoose.Schema({
   name:{type:String,required:true,},
   email:{type:String,required:true, unique:true},
   password:{ type:String,required:true, select:false },// o select permite que ao retorna as informacoes o pass nao seja retornado
   data:{type: Date,default:Date.now, }
})
Utente.pre("save", async function(next){
   this.password= await bcrypt.hash(this.password,10)
   next()

})
const Utilizateur= mongoose.model("Utente",Utente)
export default Utilizateur