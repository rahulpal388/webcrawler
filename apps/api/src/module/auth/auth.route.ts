import { loginController } from "@/module/auth/login/login.controller.js";
import { Router } from "express";



const authRouter = Router();




authRouter.get("/login", loginController);


export default authRouter;