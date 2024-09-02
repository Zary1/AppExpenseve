import {Router} from "express"
import {login} from "../controlles/authControler.js"
const router= Router()
router.post("/login",login)

export default router