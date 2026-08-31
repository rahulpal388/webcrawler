import { Router } from "express";




const crawlRouter = Router();



// for test only, to check if the user is authenticated and the user object is attached to the request
crawlRouter.get("/", async (req, res) => {
    const user = req.user;

    if (!user) {
        return res.status(401).json({
            message: "un-authenticated user"
        })
    }

    res.status(200).json(user);

})


export default crawlRouter;