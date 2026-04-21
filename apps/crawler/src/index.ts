import { HtmlLayerDataExtactor } from "./extractor/htmlLayerDataExtractor";
import { linkExtractor } from "./extractor/linkExtractor";
import { requestLayedDataExtractor } from "./extractor/requestLayerDataExtractor";
import { fetchWebPage } from "./fetchWebPage";
import { HtmlLayerUrlData } from "./types/htmlData.type";
import { RequestLayerUrlData } from "./types/requestData.type";
import { analyseDomainUrls } from "./utils/analyseDomainUrls";
import { checkIssues } from "./utils/checkIssues";
import { checkSEO } from "./utils/checkUrlSEO";

// this store only the url, it has to crawl 
const frontierQueue = new Set<string>();


export type CrawledUrlInfo = {
    path: string;
    requestLayedData: RequestLayerUrlData;
    htmlLayedData: HtmlLayerUrlData;
}

export type CrawledInfo = {
    domain: string;
    crawledUrlInfo: CrawledUrlInfo[]
}


const crawledUrl = new Map<string, CrawledInfo>();

const MAX_CRAWL_DEPTH = 1;


// frontierQueue.add("https://www.hellointerview.com/learn/system-design/problem-breakdowns/web-crawler")
// frontierQueue.add("https://beatroom.space/")
frontierQueue.add("https://raw.githubusercontent.com/")
// frontierQueue.add("https://github.com/search?q=react")





async function crawlerHandler(crawlUrl: string) {
    console.log("starting crawling the url")
    const mainUrl = new URL(crawlUrl);
    const { internalLinks } = await crawler(mainUrl);
    console.log(`done ${crawlUrl}`)

    const urlQueue = new Set<string>(internalLinks.slice(0, 6));
    console.log(`total url to crawl is ${urlQueue.size}`)
    let i = 1;
    for (const url of urlQueue) {
        console.log(`${i} ${url}`)
        await crawler(new URL(url));
        i++;
        console.log(`done ${i - 1} ${url}`)
    }
    console.log("url has been crawled")
    console.log(JSON.stringify([...crawledUrl], null, 2));
    console.log("these are the issues")
    const origin = new URL(crawlUrl).origin;
    const pageResult = crawledUrl.get(origin);
    if (pageResult) {
        checkIssues(pageResult);
        checkSEO(pageResult);

    }

}





async function crawler(url: URL): Promise<{
    internalLinks: string[]
}> {
    const { success, data } = await fetchWebPage(url);
    if (!success) {
        return {
            internalLinks: []
        };
    }


    const requestLayedData = await requestLayedDataExtractor({
        response: data.response,
        responseTime: data.responseTime,
        url
    })

    const htmlLayedData = HtmlLayerDataExtactor(data.html, url);
    if (crawledUrl.has(url.origin)) {
        crawledUrl.get(url.origin)?.crawledUrlInfo.push({
            path: url.pathname,
            requestLayedData,
            htmlLayedData
        })
    } else {
        crawledUrl.set(url.origin, {
            domain: url.origin,
            crawledUrlInfo: [{
                path: url.pathname,
                requestLayedData,
                htmlLayedData
            }]
        })
    }
    return {
        internalLinks: htmlLayedData.links.internal
    }
}


const urlToCrawl = frontierQueue.values().next().value
if (urlToCrawl) {
    crawlerHandler(urlToCrawl)
}
