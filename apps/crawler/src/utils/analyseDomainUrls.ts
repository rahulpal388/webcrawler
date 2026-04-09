import { RequestLayerReport } from "@/types/requestData.type";
import { CrawledInfo } from "..";
import { HtmlLayerReport } from "@/types/htmlData.type";

export type AnalyseDomainUrls = {
    requestLayerReport: RequestLayerReport;
    htmlLayerReport: HtmlLayerReport;
}

export function analyseDomainUrls(crawledUrl: CrawledInfo) {
    for (const info of crawledUrl.crawledUrlInfo) {

    }



}