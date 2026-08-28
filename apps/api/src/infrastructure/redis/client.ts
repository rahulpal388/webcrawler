import { env } from "@/app/app.js";
import { createRedisConnection } from "@repo/queue/client/client";




const redisClient = await createRedisConnection({
    url: env.REDIS_URL,
    password: env.REDIS_PASSWORD,
    username: env.REDIS_USERNAME,
});


export default redisClient;
