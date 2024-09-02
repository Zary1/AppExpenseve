
import express from 'express'
import  UtenteController from "../controlles/Utente.Controles.js"
const router=express()


router.post("/create",UtenteController.UtenteCreateControle)
router.get("/",UtenteController.FindAllUtente)
router.get("/:id",UtenteController.BuscarId)
router.patch("/:id",UtenteController.UpdateUtente)

export default router

