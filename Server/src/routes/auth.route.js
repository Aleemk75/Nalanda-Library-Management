import express from "express";
const router = express.Router();
import  {register,login} from "../controllers/auth.controller.js";
import {validate, registerValidation, loginValidation} from "../utils/validators.js"

router.post("/register",
    registerValidation,
    validate,
    register
);
router.post("/login",
    loginValidation,
    validate,
    login
);

export default router;