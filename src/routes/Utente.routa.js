const express=require ("express")
const router=express()
const UtenteController=require("../controlles/Utente.Controles")

router.post("/",UtenteController.UtenteCreateControle)
router.get("/",UtenteController.FindAllUtente)
module.exports=router
