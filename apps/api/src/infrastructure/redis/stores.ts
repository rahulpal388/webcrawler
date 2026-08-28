
import { crawlStateStore } from "@repo/queue/stores/crawlState/crawlState";
import { crawlPublisherConfig } from "@repo/queue/streams/publishers/crawlPublisher";
import { emailPublisherConfig } from "@repo/queue/streams/publishers/emailPublisher";

import { urlDeDuplication } from "@repo/queue/stores/deduplication/urlDeDuplication";
import { oidcStatesStore } from "@repo/queue/stores/authStates/oidcStatesStore";
import { sessionStoreConfig } from "@repo/queue/stores/authStates/sessionStore";
import { userOtpStore } from "@repo/queue/stores/authStates/userOtpStore";

import { sortedSetStoreConfig } from "@repo/queue/stores/sortedSetStore";
import { HashesStoreConfig } from "@repo/queue/stores/hashesStore";
import redisClient from "@/infrastructure/redis/client.js";


export const crawlStateSt = crawlStateStore(redisClient);

export const crawlPublisher = crawlPublisherConfig(redisClient);

export const emailPublisher = emailPublisherConfig(redisClient);

export const urlDeDuplicationStore =
    urlDeDuplication(redisClient);

export const oidcStore =
    oidcStatesStore(redisClient);

export const sessionStore =
    sessionStoreConfig(redisClient);

export const OTPStore =
    userOtpStore(redisClient);

export const sortedSetStore =
    sortedSetStoreConfig(redisClient);

export const hashesStore =
    HashesStoreConfig(redisClient);