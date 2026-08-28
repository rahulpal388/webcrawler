import { Router } from "express";
import authRouter from "@/module/auth/auth.route.js";




const apiRouter = Router();


apiRouter.use("/auth", authRouter);


export default apiRouter;