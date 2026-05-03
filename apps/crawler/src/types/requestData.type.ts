type ResourceType =
    | "html"
    | "css"
    | "js"
    | "image"
    | "font"
    | "media"
    | "xhr"
    | "other";

export type NetworkTimingsType = {
    dnsLookupTime: number;
    tcpConnectionTime: number;
    sslHandshakeTime: number;
    timeToFirstByte: number;
    downloadTime: number;
    totalResponseTime: number;
};

export type HeadersType = {
    contentType: string | null;
    cacheControl: string | null;
    contentLength: number | null;
    server: string | null;
    xRobotsTag: string | null;

    contentEncoding?: string | null;
    expires?: string | null;
    etag?: string | null;
};

export type CrawlabilityType = {
    isCrawlable: boolean
    blockedByRobots: boolean
    hasNoIndex: boolean
    headerNoIndex: boolean
    canonicalMatches: boolean
    isDuplicate: boolean
}

export type RequestLayerUrlData = {
    url: string;
    method: string;
    statusCode: number;
    protocol: string;
    requestTime: number;
    type: string;
    domain: string;

    size: number;

    redirectTo?: string;

    headers: HeadersType;


    security: {
        sslValid: boolean;
        hstsEnabled: boolean;
    };

    error?: string;
};

export type NetworkSummaryType = {
    totalRequests: number;
    totalSize: number;

    jsSize: number;
    cssSize: number;
    imageSize: number;

    avgTTFB: number;
    maxTTFB: number;

    slowestRequest: string;

    redirects: number;
    redirectChains: number;

    failedRequests: number;

    thirdPartyCount: number;

    renderBlockingCount: number;
};

export type CrawlNetworkResult = {
    info: RequestLayerUrlData,
    crawlability: CrawlabilityType;
};
