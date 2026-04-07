import * as cheerio from "cheerio"


export function linkExtractor(html: string, url: string): {
    internalLink: Set<string>;
    externalLink: Set<string>
} {
    const urlOrigin = new URL(url).origin;
    const $ = cheerio.load(html)
    const externalLink = new Set<string>()
    const internalLink = new Set<string>()
    $("a").each((_, el) => {
        const href = $(el).attr("href");
        if (!href) return;
        const newUrl = new URL(href, urlOrigin);
        const includeProtocol = ["http:", "https:"]
        if (!includeProtocol.includes(newUrl.protocol)) return;
        if (newUrl.origin === urlOrigin) {
            internalLink.add(newUrl.href)
            newUrl.hash = "" // remove fragment
        } else {
            externalLink.add(newUrl.href);
        }
    });
    return {
        internalLink,
        externalLink
    };
}