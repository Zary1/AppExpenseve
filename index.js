const express= require("express")
const db= require("./src/database/db")
const router= require("./src/routes/Utente.routa")
const app=express()
app.use(express.json())
const PORTA=40005
app.use("/user",router)

app.listen(PORTA,()=>{
    console.log("conectado na porta",PORTA);
    db()
})