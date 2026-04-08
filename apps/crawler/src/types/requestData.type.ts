
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