import { loginController } from "@/module/auth/login/login.controller.js";
import { registerController } from "@/module/auth/register/register.controller.js";
import { verifyRegistrationOTPController } from "@/module/auth/register/verifyRegistrationOTP.controller.js";
import { logoutController } from "@/module/auth/logout/logout.controller.js";
import { Router } from "express";
import { loginRateLimit, registerRateLimit, verifyOtpRateLimit } from "@/module/auth/authRateLimit.js";
import { slidingWindowRateLimit } from "@/app/server.js";



const authRouter = Router();




authRouter.post("/login", loginRateLimit, loginController);
authRouter.post("/register", registerRateLimit, registerController);
authRouter.post("/register/verify-otp", verifyOtpRateLimit, verifyRegistrationOTPController);


//  logout user
authRouter.get("/logout", logoutController)


export default authRouter;

