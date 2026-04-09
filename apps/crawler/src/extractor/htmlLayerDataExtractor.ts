import { HtmlLayerUrlData } from "@/types/htmlData.type";
import { pageMetaExtractor } from "./pageMetaExtractor";
import * as Cheerio from "cheerio";
import { linkExtractor } from "./linkExtractor";


export function HtmlLayerDataExtactor(html: string, url: URL): HtmlLayerUrlData {
    const { meta, canonical } = pageMetaExtractor(html, url);

    const $ = Cheerio.load(html);

    // headings
    let h1Count = 0;
    const h1: string[] = [];
    $("h1").each((_, el) => {
        h1Count++;
        h1.push($(el).text());
    })
    let h2Count = 0;
    const h2: string[] = [];
    $("h2").each((_, el) => {
        h2Count++;
        h2.push($(el).text());
    })
    let h3Count = 0;
    const h3: string[] = [];
    $("h3").each((_, el) => {
        h3Count++;
        h3.push($(el).text());
    })

    // contents
    $("script, style, noscript").remove();
    const text = $("body").text();
    const wordsCount = text
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .length

    // images
    let totalImage = 0;
    let missingAlt = 0;
    $("img").each((_, el) => {
        totalImage++;
        const alt = $(el).attr("alt");
        if (!alt || alt.trim() === "") {
            missingAlt++;
        }
    })

    // external and internal links
    const { externalLink, internalLink } = linkExtractor(html, url.toString());

    return {

        meta,
        canonical: canonical,

        headings: {
            h1: h1,
            h2: h2,
            h3: h3,

            h1Count: h1Count,
            h2Count: h2Count,
            h3Count: h3Count,
        },

        content: {
            wordCount: wordsCount,
            thinContent: false, // not completed
        },

        images: {
            total: totalImage,
            missingAlt: missingAlt,
            largeImages: 12, // not completed
        },

        links: {
            internal: [...internalLink],
            external: [...externalLink],

            internalCount: internalLink.size,
            externalCount: externalLink.size,
        },


        // not completed
        structuredData: {
            present: false,
            types: []
        }

    }

}