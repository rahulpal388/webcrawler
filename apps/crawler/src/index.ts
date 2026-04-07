import { linkExtractor } from "./extractor/linkExtractor";
import { seoDataExtractor } from "./extractor/seoDataExtractor";
import { fetchWebPage } from "./fetchWebPage";


const frontierQueue: string[] = [];


// storing the information temprory => eventually it goes to db
type DomainInfoType = {
    domain: string;
    pagesCrawled: number;
    issues: {
        warning: number;
        critical: number;
        notices: number;
    };


}
const domainSEOInfo = new Map<string, DomainInfoType>();



frontierQueue.push("https://www.hellointerview.com/learn/system-design/problem-breakdowns/web-crawler")
// frontierQueue.push("https://beatroom.space/")

async function crawler(url: string) {

    const { success, data } = await fetchWebPage(new URL(url));
    if (success) {
        const { externalLink, internalLink } = linkExtractor(data.html, url);
        // console.log(links)
        seoDataExtractor(data.html)
    }

}



crawler(frontierQueue[0] || "");
