import { RobotsTxtType } from "@repo/contract/types/robotsTxtType";

export type CrawlStreamMessageType = {
  _id: string;
  storeId: string;
  deDuplicateId: string;
  seedUrl: string;
  url: string;
  maxDepth: string;
  depth: string;
};

