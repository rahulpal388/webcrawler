import { loginController } from "@/module/auth/login/login.controller.js";
import { registerController } from "@/module/auth/register/register.controller.js";
import { verifyRegistrationOTPController } from "@/module/auth/register/verifyRegistrationOTP.controller.js";
import { logoutController } from "@/module/auth/logout/logout.controller.js";
import { Router } from "express";
import { loginRateLimit, registerRateLimit, verifyOtpRateLimit } from "@/module/auth/authRateLimit.js";
import { forgetPasswordController } from "@/module/auth/forget-password/forget-password.controller.js";
import { verifyForgetPasswordController } from "@/module/auth/forget-password/verify-forget-password.controller.js";


const authRouter = Router();




authRouter.post("/login", loginRateLimit, loginController);
authRouter.post("/register", registerRateLimit, registerController);
authRouter.post("/register/verify-otp", verifyOtpRateLimit, verifyRegistrationOTPController);

authRouter.post("/password-reset", forgetPasswordController);
authRouter.post("/password-reset/verify", verifyForgetPasswordController);


//  logout user
authRouter.get("/logout", logoutController)


export default authRouter;

