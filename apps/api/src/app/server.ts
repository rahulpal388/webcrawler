import "dotenv/config";

import { app, env } from "./app.js";

import { connectDB } from "@repo/db/index";
import redisClient from "@/infrastructure/redis/client.js";

import { logger } from "@repo/lib/logger";

const startServer = async () => {
    try {
        /*
        *   connect to the database
        */

        const dbClient = await connectDB(env.DATABASE_URL);

        if (!dbClient.success) {
            throw new Error("Failed to connect to database");
        }


        // -------------------------
        // HTTP server
        // -------------------------

        const server = app.listen(env.PORT, () => {
            console.log(`API server is running on port ${env.PORT}`)
        });

        // -------------------------
        // Graceful shutdown
        // -------------------------

        const shutdown = async (signal: string) => {
            console.log(`${signal} received. Shutting down server...`)

            server.close(async () => {
                /*
                * Closing resources before exiting the process
                * */
                console.log("Closing resources...")
                await redisClient.quit();
                await dbClient.connection.disconnect();

                process.exit(0);
            });
        };

        process.on("SIGTERM", () => shutdown("SIGTERM"));
        process.on("SIGINT", () => shutdown("SIGINT"));
    } catch (error) {
        logger.fatal({
            message: "Failed to start server",
            path: "",
            metaData: {
                error,
            },
        });

        process.exit(1);
    }
};

startServer();