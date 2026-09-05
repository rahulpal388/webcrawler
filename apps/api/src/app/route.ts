import { Router } from "express";
import authRouter from "@/module/auth/auth.route.js";
import projectRouter from "@/module/project/project.route.js";



const apiRouter = Router();


apiRouter.use("/auth", authRouter);
apiRouter.use("/project", projectRouter)


export default apiRouter;

