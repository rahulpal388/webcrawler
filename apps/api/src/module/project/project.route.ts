import { CrawlProjectController } from "@/module/project/crawl/crawl.controller.js";
import { CreateProject } from "@/module/project/create-project.controller.js";
import { DeleteProject } from "@/module/project/delete-project.controller.js";
import { Router } from "express";





const projectRouter = Router();




projectRouter.post("/create", CreateProject);
projectRouter.delete("/delete", DeleteProject);

projectRouter.get("/crawl/:projectId", CrawlProjectController);



export default projectRouter;