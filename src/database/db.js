const moogose=require("mongoose")
require("dotenv").config()

const db= async()=>{

    try{
        await moogose.connect(process.env.MONGO_URL)
        console.log("mongo conectado");

    }catch(err){
        console.log("erro ao conectar com o banco de dados ",err);
    }

}

module.exports=db



