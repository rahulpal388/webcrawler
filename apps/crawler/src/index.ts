import { HtmlLayerDataExtactor } from "./extractor/htmlLayerDataExtractor";
import { linkExtractor } from "./extractor/linkExtractor";
import { requestLayedDataExtractor } from "./extractor/requestLayerDataExtractor";
import { PageHTMLData, seoDataExtractor } from "./extractor/seoDataExtractor";
import { fetchWebPage } from "./fetchWebPage";
import { HtmlLayerUrlData } from "./types/htmlData.type";
import { RequestLayerUrlData } from "./types/requestData.type";

// this store only the url, it has to crawl 
const frontierQueue = new Set<string>();

type CrawledInfo = {
    domain: string;
    crawledUrlInfo: {
        requestLayedData: RequestLayerUrlData;
        htmlLayedData: HtmlLayerUrlData;
    }[]
}


const crawledUrl = new Map<string, CrawledInfo>();




// frontierQueue.add("https://www.hellointerview.com/learn/system-design/problem-breakdowns/web-crawler")
// frontierQueue.add("https://beatroom.space/")
frontierQueue.add("https://raw.githubusercontent.com/")
// frontierQueue.add("https://github.com/search?q=react")





async function crawlerHandler(crawlUrl: string) {
    console.log("starting crawling the url")
    const mainUrl = new URL(crawlUrl);
    const urlQueue = new Set<string>();
    await crawler(mainUrl, urlQueue);
    for (const url of urlQueue) {
        await crawler(new URL(url), urlQueue);
    }
    console.log("url has been crawled")
}





async function crawler(url: URL, urlQueue: Set<string>) {
    const { success, data } = await fetchWebPage(url);
    if (success) {
        const requestLayedData = await requestLayedDataExtractor({
            response: data.response,
            responseTime: data.responseTime,
            url
        })

        console.log(requestLayedData)
        const htmlLayedData = HtmlLayerDataExtactor(data.html, url);
        console.log(htmlLayedData)
        // if (crawledUrl.has(url.origin)) {
        //     crawledUrl.get(url.origin)?.crawledUrlInfo.push({
        //         requestLayedData,
        //         htmlLayedData
        //     })
        // } else {
        //     crawledUrl.set(url.origin, {
        //         domain: url.origin,
        //         crawledUrlInfo: [{
        //             requestLayedData,
        //             htmlLayedData
        //         }]
        //     })
        // }
    }

}


const urlToCrawl = frontierQueue.values().next().value
if (urlToCrawl) {
    crawlerHandler(urlToCrawl)
}
