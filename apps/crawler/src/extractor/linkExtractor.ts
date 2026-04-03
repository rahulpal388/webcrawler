import * as cheerio from "cheerio"


export function linkExtractor(html: string, url: string): Set<string> {
    const urlOrigin = new URL(url).origin;
    const $ = cheerio.load(html)
    const links = new Set<string>()
    $("a").each((_, el) => {
        const href = $(el).attr("href");
        if (!href) return;
        const newUrl = new URL(href, urlOrigin);
        const includeProtocol = ["http:", "https:"]
        if (!includeProtocol.includes(newUrl.protocol) || urlOrigin !== newUrl.origin) return;
        if (href) {
            links.add(newUrl.href)
            newUrl.hash = "" // remove fragment
        };
    });

    return links;
}