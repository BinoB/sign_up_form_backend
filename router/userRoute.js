import { createSignUp, getAll } from "../controller/userController.js"
import express from "express"

const router = express.Router()

router.post('/signup',createSignUp)
router.get('/signup',getAll)

export default router;