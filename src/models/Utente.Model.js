const mongoose =require("mongoose")

const Utente = new  mongoose.Schema({
   name:{type:String,required:true,},
   email:{type:String,required:true,},
   password:{ type:String,required:true,},
   balance:{ type:Number, required:true,},
   data:{type: Date,default:Date.now, }
})
const Utilizateur= mongoose.model("Utente",Utente)

module.exports= Utilizateur