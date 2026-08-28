import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import { errorHandlerMiddleware } from "@/infrastructure/middleware/errorHandler.middleware.js";

import { routeNotFoundMiddleware } from "@/infrastructure/middleware/routeNotFount.middleware.js";
import { healthCheckMiddleware } from "@/infrastructure/middleware/healthCheck.Middleware.js";
import apiRouter from "@/app/route.js";
import requestLogMiddleware from "@/infrastructure/middleware/requestLog.middleware.js";
import { ValidateEnv } from "@/lib/validateEnv.js";


export const env = ValidateEnv();
export const app = express();



app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false
}));

// logging middleware

app.use(requestLogMiddleware);

// ###################################################
// CORS config
// ###################################################

const allowedOrigins = env.CROSS_ORIGIN_URL.split(",");

app.use(
    cors({
        /*
        * Origin validation
        * This function checks if the request's origin is in the list of allowed origins.
        * If it is, the request is allowed; otherwise, an error is returned.
        */
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Origin not allowed"));
            }
        },
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    }),
);


/*     Request parsing  */
app.use(
    express.json({
        limit: "1mb",
    })
);

app.use(express.urlencoded({ extended: true }));

/* Performance  */

app.use(compression());



/*    Health check  */

app.get("/health", healthCheckMiddleware);

/*  API routes  */

app.use("/api/v1", apiRouter);


/*  Route not found handler  */
app.use(routeNotFoundMiddleware);

/*   Error handler */

app.use(errorHandlerMiddleware);

export default app;