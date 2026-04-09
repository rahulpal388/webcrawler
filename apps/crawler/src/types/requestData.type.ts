
export type NetworkTimingsType = {
    dnsLookupTime: number
    tcpConnectionTime: number
    sslHandshakeTime: number
    timeToFirstByte: number
    totalResponseTime: number
}

export type HeadersType = {
    contentType: string | null
    cacheControl: string | null
    contentLength: number | null
    server: string | null
    xRobotsTag: string | null
}

export type RequestLayerUrlData = {

    url: string

    statusCode: number

    redirect: {
        count: number
        chain: string[]
    }

    networkTimings: NetworkTimingsType;

    protocol: "http" | "https"

    security: {
        sslValid: boolean
        hstsEnabled: boolean
    }

    headers: HeadersType;

    crawlability: {
        blockedByRobots: boolean
        canonicalRedirect: boolean
        duplicateURL: boolean
    }
}



export type RequestLayerReport = {

    totalPagesCrawled: number;
    uniquePages: number;
    blockedByRobots: boolean;
    dublicateURLs: number;
    canonicalRedirects: boolean;
    statusCodes: {
        status2xx: number;
        status3xx: number;
        status4xx: number;
        status5xx: number;
    },
    redirects: {
        redirectChains: number;
        maxRedirectDepth: number;
        pagesWithRedirests: number;
    },
    performance: {
        avgDnsLookupTime: number;
        avgTcpConnectionTime: number;
        avgSslHandShakeTime: number;
        avgTimeToFirstByte: number;
        avgTotalResponseTime: number;
        slowPages: number;
    },
    security: {
        httpsPages: number;
        httpPages: number;
        invalidSSL: number;
    },
    headers: {
        pagesMissingCacheControl: number;
        pagesMissingContentType: number;
        pagesWithXRobotsTagNoindex: number
    },
    crawlability: {
        blockedByRobots: number;
        noindexPages: number;
        canonicalRedirectPages: number
    }
}