import express from "express";
import { registerController, loginController } from "../controllers/authController.js"

// router object
const router = express.Router();

// routing
router.post('/register', registerController);           // REGISTER
router.post('/login', loginController);                 // LOGIN

export default router;