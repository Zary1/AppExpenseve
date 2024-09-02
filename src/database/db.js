import mongoose from "mongoose"


const db= async()=>{

    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongo conectado");

    }catch(err){
        console.log("erro ao conectar com o banco de dados ",err);
    }

}

export default db



