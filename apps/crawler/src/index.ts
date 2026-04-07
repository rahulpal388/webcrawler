import { linkExtractor } from "./extractor/linkExtractor";
import { PageHTMLData, seoDataExtractor } from "./extractor/seoDataExtractor";
import { fetchWebPage, PageResponseData } from "./fetchWebPage";
import { IssueSeverityLevel } from "./rules/issueRules";


const frontierQueue: string[] = [];


// storing the information temprory => eventually it goes to db
type DomainInfoType = {
    domain: string;
    lastCrawled: Date;
    // siteHealth: number;
    // sitePerformance: number;
    duplicateTitle: false,  // this is site level comparision
    duplicateMetaDescription: false, // this is site level comparision
    crawledPages: {
        path: string;
        status: number;
        wordCount: number;
        externalLink: number;
        internalLink: number;
        issue: {
            name: string;
            description: string;
            sereverity: IssueSeverityLevel;
        }
        title: string;
        brokenLink: number;
        SEOSCore: number
    },
}

// imagesBroken: 0, // broken image require htttp check later
// imagesUnoptimized: 0, // unoptimized image require size check
// internalLinks: 0, // other function should extract
// externalLinks: 0, // other function should extract

export const domainSEOInfo = new Map<string, DomainInfoType>();



frontierQueue.push("https://www.hellointerview.com/learn/system-design/problem-breakdowns/web-crawler")
// frontierQueue.push("https://beatroom.space/")


export type PageData = PageHTMLData & PageResponseData

async function crawler(url: string) {
    const newUrl = new URL(url)
    const { success, data, html } = await fetchWebPage(newUrl);
    if (success) {
        const { externalLink, internalLink } = linkExtractor(html, url);
        const seoData = seoDataExtractor(html, newUrl.origin)
    }

}



crawler(frontierQueue[0] || "");
