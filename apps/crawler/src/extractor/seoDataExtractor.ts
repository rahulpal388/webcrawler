import * as Cheerio from "cheerio";
import { linkExtractor } from "./linkExtractor";





export type PageHTMLData = {
    robots: string | null;
    hasNoIndex: boolean;
    canonical: string | null;
    canonicalValid: boolean;
    title: string | null;
    description: string | null;
    h1: string[];
    h2: string[];
    wordCount: number;
    imagesTotal: number;
    imagesMissingAlt: number;
};

export function seoDataExtractor(html: string, baseUrl: string): PageHTMLData {

    const $ = Cheerio.load(html);

    const title = $("title").text().trim() || null
    const description = $("meta[name=description]").attr("content") || null

    let h1: string[] = [];
    let h2: string[] = [];

    $("h1").each((_, el) => {
        h1.push($(el).text());
    })
    $("h2").each((_, el) => {
        h2.push($(el).text());
    })
    let totalImage = 0;
    let missingAlt = 0;

    $("img").each((_, el) => {
        totalImage++;
        const alt = $(el).attr("alt");
        if (!alt || alt.trim() === "") {
            missingAlt++;
        }
    })
    console.log(totalImage, missingAlt);
    // find the external and internal links
    $("script, style, noscript").remove();
    const text = $("body").text();
    const wordsCount = text
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .length


    const robots = $('meta[name="robots"]').attr("content") || null;

    const hasNoIndex =
        robots !== null && robots.toLowerCase().includes("noindex");

    const canonical = $('link[rel="canonical"]').attr("href") || null;

    let canonicalValid = false;

    if (canonical) {
        try {
            new URL(canonical, baseUrl);
            canonicalValid = true;
        } catch {
            canonicalValid = false;
        }
    }

    const response: PageHTMLData = {
        robots,
        hasNoIndex,
        canonical,
        canonicalValid,
        title,
        description,
        h1,
        h2,
        wordCount: wordsCount,
        imagesTotal: totalImage,
        imagesMissingAlt: missingAlt
    }


    return response;
}