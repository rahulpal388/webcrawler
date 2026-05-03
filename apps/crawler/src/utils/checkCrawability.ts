import { CrawlabilityType } from "@/types/requestData.type";



export function CheckCrawability(): CrawlabilityType {


    return {
        isCrawlable: true,
        blockedByRobots: false,
        hasNoIndex: false,
        headerNoIndex: false,
        canonicalMatches: true,
        isDuplicate: false
    }
}