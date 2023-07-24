import { Router } from "express"
import * as controllers from "../controllers/weapons.js"

const router = Router()

router.get("/", controllers.getWeapons)

export default router