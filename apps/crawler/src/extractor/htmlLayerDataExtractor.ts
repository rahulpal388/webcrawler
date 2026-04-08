import { HtmlLayerUrlData } from "@/types/htmlData.type";
import { pageMetaExtractor } from "./pageMetaExtractor";


export function HtmlLayerDataExtactor(html: string, url: URL): HtmlLayerUrlData {
    const { meta, canonical } = pageMetaExtractor(html, url);


    return {

        meta,

        canonical: canonical,

        headings: {
            h1: [],
            h2: [],
            h3: [],

            h1Count: 12,
            h2Count: 12,
            h3Count: 12,
        },

        content: {
            wordCount: 12,
            text: "",
            thinContent: false,
        },

        images: {
            total: 12,
            missingAlt: 12,
            largeImages: 12,
        },

        links: {
            internal: [],
            external: [],
            broken: [],

            internalCount: 12,
            externalCount: 12,
            brokenCount: 12,
        },

        structuredData: {
            present: false,
            types: []
        }

    }

}