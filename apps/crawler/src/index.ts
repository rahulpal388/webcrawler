import { linkExtractor } from "./extractor/linkExtractor";
import { fetchWebPage } from "./fetchWebPage";


const frontierQueue: string[] = [];


frontierQueue.push("https://www.hellointerview.com/learn/system-design/problem-breakdowns/web-crawler")

async function crawler(url: string) {

    const { success, data } = await fetchWebPage(url);
    if (success) {
        const links = linkExtractor(data, url);

    }

}



crawler(frontierQueue[0] || "");
