import { loginController } from "@/module/auth/login/login.controller.js";
import { registerController } from "@/module/auth/register/register.controller.js";
import { verifyRegistrationOTPController } from "@/module/auth/register/verifyRegistrationOTP.controller.js";
import { logoutController } from "@/module/auth/logout/logout.controller.js";
import { Router } from "express";



const authRouter = Router();




authRouter.post("/login", loginController);
authRouter.post("/register", registerController);
authRouter.post("/register/verify-otp", verifyRegistrationOTPController);


//  logout user
authRouter.get("/logout", logoutController)


export default authRouter;

