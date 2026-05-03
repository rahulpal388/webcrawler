import { HtmlLayerUrlData } from "@/types/htmlData.type";
import { CrawledUrlInfo } from "..";



type SEORulesType = {
    name: string;
    point: number;
    check: (data: CrawledUrlInfo) => boolean
}


export const SEORules: SEORulesType[] = [

    // Technical SEO

    {
        name: "HTTPS enabled",
        point: 5,
        check: (data) => data.networkResult.info.protocol === "https"
    },

    {
        name: "Valid status code",
        point: 5,
        check: (data) => data.networkResult.info.statusCode === 200
    },

    {
        name: "Canonical tag present",
        point: 3,
        check: (data) => data.htmlLayedData.canonical.valid
    },

    {
        name: "Robots not blocking indexing",
        point: 3,
        check: (data) => data.htmlLayedData.meta.robots.indexAllowed
    },

    // {
    //     name: "Page size acceptable",
    //     point: 2,
    //     check: (data) => data.requestLayedData. < 1000000
    // },

    {
        name: "Response time acceptable",
        point: 2,
        check: (data) => data.networkResult.info.requestTime < 2000
    },


    // On-Page SEO

    {
        name: "Title exists",
        point: 6,
        check: (data) => !!data.htmlLayedData.meta.title.value
    },

    {
        name: "Title length valid",
        point: 3,
        check: (data) =>
            !!data.htmlLayedData.meta.title.value && data.htmlLayedData.meta.title.value.length >= 30 && data.htmlLayedData.meta.title.value.length <= 60
    },

    {
        name: "Meta description exists",
        point: 5,
        check: (data) => !!data.htmlLayedData.meta.description.value
    },

    {
        name: "Meta description length valid",
        point: 2,
        check: (data) =>
            !!data.htmlLayedData.meta.description.value &&
            data.htmlLayedData.meta.description.value.length >= 50 &&
            data.htmlLayedData.meta.description.value.length <= 160
    },

    {
        name: "Single H1 tag",
        point: 6,
        check: (data) => data.htmlLayedData.headings.h1.length === 1
    },

    {
        name: "Has H2 headings",
        point: 2,
        check: (data) => data.htmlLayedData.headings.h2.length > 0
    },


    // Content Quality

    {
        name: "Content length sufficient",
        point: 6,
        check: (data) => data.htmlLayedData.content.wordCount >= 300
    },

    {
        name: "Strong content depth",
        point: 4,
        check: (data) => data.htmlLayedData.content.wordCount >= 800
    },


    // Images

    {
        name: "Images have alt attributes",
        point: 4,
        check: (data) =>
            data.htmlLayedData.images.total === 0 ||
            data.htmlLayedData.images.missingAlt / data.htmlLayedData.images.total < 0.3
    },


    // Internal Linking

    {
        name: "Internal links exist",
        point: 4,
        check: (data) => data.htmlLayedData.links.externalCount > 0
    },

    {
        name: "Balanced internal links",
        point: 2,
        check: (data) => data.htmlLayedData.links.internalCount >= 3
    },

    {
        name: "External links present",
        point: 1,
        check: (data) => data.htmlLayedData.links.externalCount > 0
    },


    // URL Structure

    {
        name: "URL length acceptable",
        point: 2,
        check: (data) => data.networkResult.info.url.length < 100
    },



    // Crawl Structure

    // {
    //     name: "Crawl depth acceptable",
    //     point: 2,
    //     check: (data) => data.htmlLayedData.crawlDepth <= 3
    // }
];



