import axios from "axios";



export type PageResponseData = {
    protocol: string;
    statusCode: number;
    sitemapStatus: number;
    robotsTxtBlocked: boolean;
    mixedContent: boolean;
    securityHeaders: boolean;
    pageSize: number;
    responseTime: number;
    ttfb: number;
    jsBundleSize: number;
    renderBlockingResources: boolean;
    url: string;
    urlLength: number;
    crawlDepth: number;
};




export async function fetchWebPage(url: URL): Promise<{
    success: true,
    data: PageResponseData
    html: string
} | {
    success: false,
    data: null,
    html: null
}> {



    const start = Date.now();
    const response = await axios.get(url.toString(), {
        headers: {
            "User-Agent": "crawler/1.0"
        },
    });
    const end = Date.now();
    const contentType = response.headers["content-type"] as string;
    if (!contentType.includes("text/html")) {
        return {
            success: false,
            data: null,
            html: null
        }
    }
    const pageSize =
        response.headers["content-length"] ||
        Buffer.byteLength(JSON.stringify(response.data));
    const responseTime = end - start;
    const timeToFirstByte = response.headers["request-duration"]
        ? Number(response.headers["request-duration"])
        : responseTime;
    const securityHeaders =
        !!response.headers["content-security-policy"] ||
        !!response.headers["x-frame-options"] ||
        !!response.headers["strict-transport-security"];
    return {
        success: true,
        data: {
            protocol: new URL(response.config.url).protocol.replace(":", ""),
            statusCode: response.status,
            sitemapStatus: 0, //  need to check
            robotsTxtBlocked: false, // need to check
            mixedContent: false, // need to change while parsing html
            securityHeaders: securityHeaders,
            pageSize,
            responseTime,
            ttfb: timeToFirstByte,
            jsBundleSize: 0, // need to change while parsing html
            renderBlockingResources: false, // need to change while parsing html
            url: url.toString(),
            urlLength: url.toString().length,
            crawlDepth: 0,
        },
        html: response.data as string
    }



}