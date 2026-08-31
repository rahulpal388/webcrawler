
import { crawlStateStore } from "@repo/redis/stores/crawlState/crawlState";
import { crawlPublisherConfig } from "@repo/redis/streams/publishers/crawlPublisher";
import { emailPublisherConfig } from "@repo/redis/streams/publishers/emailPublisher";
import { urlDeDuplication } from "@repo/redis/stores/deduplication/urlDeDuplication";
import { HashStoreConfig } from "@repo/redis/stores/hashStore";
import { sortedSetStoreConfig } from "@repo/redis/stores/sortedSetStore";
import { RedisClientType } from "redis";



export function initilizeRedisStores(redisClient: RedisClientType) {
    return {

        crawlStateSt: crawlStateStore(redisClient),

        crawlPublisher: crawlPublisherConfig(redisClient),

        emailPublisher: emailPublisherConfig(redisClient),

        urlDeDuplicationStore:
            urlDeDuplication(redisClient),


        sortedSetStore:
            sortedSetStoreConfig(redisClient),

        hashStore:
            HashStoreConfig(redisClient),
    }

}