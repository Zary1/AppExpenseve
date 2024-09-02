import express from 'express';
import cors from 'cors';
import db from './src/database/db.js'; // Import database connection function
import userrouter from './src/routes/Utente.routa.js';
import authrouter from './src/routes/Auth.rota.js';
import dotenv from 'dotenv'
dotenv.config()
const PORTA=4005
const app=express()
app.use(express.json())
app.use(cors())
app.use("/user",userrouter)
app.use("/auth",authrouter)

app.listen(PORTA,()=>{
    console.log("conectado na porta",PORTA);
    db()
})