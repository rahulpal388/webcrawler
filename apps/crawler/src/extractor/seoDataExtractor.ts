import * as Cheerio from "cheerio";





type SEODataType = {
    meta: {
        title: string | null;
        metaDescription: string | null;
        canonicalDescription: string | null;
    };
    headings: string[];
    content: {
        wordCount: number;
    },

    images: {
        total: number;
        missingAlt: number;
    },



}


export function seoDataExtractor(html: string): SEODataType {

    const $ = Cheerio.load(html);

    const meta = {
        title: $("title").text().trim() || null,
        metaDescription: $("meta[name=description]").attr("content") || null,
        canonicalDescription: $('link[rel="canonical"]').attr("href") || null
    }

    let headings: string[] = [];

    $("h1").each((_, el) => {
        headings.push($(el).text());
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
    const words = text
        .replace(/\s+/g, " ")
        .trim()
        .split(" ");

    console.log(words.length)
    return {
        meta,
        headings,
        content: {
            wordCount: words.length,
        },

        images: {
            total: totalImage,
            missingAlt: missingAlt
        },


    }


}