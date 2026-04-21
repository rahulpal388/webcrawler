import { SEORules } from "@/rules/seoScoreRule";
import { CrawledInfo, CrawledUrlInfo } from "..";


export function checkUrlSEO(data: CrawledUrlInfo): number {
    let score = 0;

    for (const rule of SEORules) {
        if (rule.check(data)) {
            score += rule.point;
        }
    }

    return score;
}


export function checkSEO(data: CrawledInfo) {
    const urlInfo = data.crawledUrlInfo;
    for (const info of urlInfo) {
        const score = checkUrlSEO(info);
        console.log(`URL: ${info.path} - SEO Score: ${score}`);
    }
}