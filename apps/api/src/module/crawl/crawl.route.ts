import { Router } from "express";

import { emailPublisher } from "@/app/server.js";


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

crawlRouter.post("/test", async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({
            message: "email is required"
        })
    }

    try {

        // send welcome email
        await emailPublisher.enqueue({
            eventId: crypto.randomUUID(),
            type: "password_reset",
            payload: {
                email,
                name: "Test User",
                expireIn: 2,
                otp: "123456"
            }
        })
    } catch {
        return res.status(500).json({
            message: "failed to send password reset email"
        })
    }

    res.status(200).json({
        message: "password reset email sent"
    })
})


export default crawlRouter;