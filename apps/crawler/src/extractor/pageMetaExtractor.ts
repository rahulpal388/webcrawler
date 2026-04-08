import { CanonicalType, PageMetaType } from "@/types/htmlData.type";
import * as  Cheerio from "cheerio";



export function pageMetaExtractor(html: string, url: URL): { meta: PageMetaType, canonical: CanonicalType } {
    const $ = Cheerio.load(html);
    const title = $("title");
    const description = $('meta[name="description"]')
    const robots = $('meta[name="robots"]')
    const robotsContent = robots.attr("content")?.trim().toLowerCase() || null;
    const canonical = $('link[rel="canonical"]');
    const canonicalContent = canonical.first().attr("href")?.trim() || null
    let selfCanonical = false;
    let valid = false;
    if (canonicalContent) {
        try {

            const resolveUrl = new URL(canonicalContent, url);
            selfCanonical = resolveUrl === url;
            valid = true
        } catch {
            valid = false;
        }
    }
    return {
        meta: {

            title: {
                value: title.first().text().trim(),
                length: title.first().next().length,
                duplicate: title.length > 1
            },

            description: {
                value: description.first().attr("content")?.trim() || null,
                length: description.first().attr("content")?.trim().length || 0,
                duplicate: description.length > 1
            },

            robots: {
                raw: robotsContent,
                indexAllowed: robotsContent ? !robotsContent.includes("noindex") : true,
                followAllowed: robotsContent ? !robotsContent.includes("nofollow") : true

            }
        },
        canonical: {
            value: canonicalContent,
            selfCanonical,
            valid,
            multiple: canonical.length > 1
        }
    }


}