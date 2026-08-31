import { Router } from "express";
import authRouter from "@/module/auth/auth.route.js";
import crawlRouter from "@/module/crawl/crawl.route.js";



const apiRouter = Router();


apiRouter.use("/auth", authRouter);
apiRouter.use("/crawl", crawlRouter);


export default apiRouter;

