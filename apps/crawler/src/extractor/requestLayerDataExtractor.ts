import { RequestLayerUrlData } from "@/types/requestData.type";
import { getHeaders } from "@/utils/getHeaders";
import { getNetworkTimings } from "@/utils/getNetworkTimings";
import axios from "axios";
import https from "https"
import tls from "tls"

export async function requestLayedDataExtractor({ response, responseTime, url }: { response: axios.AxiosResponse<any, any, {}>, responseTime: number, url: URL }): Promise<RequestLayerUrlData> {

    const headers = getHeaders(response);
    const networkTimings = await getNetworkTimings(url.toString());
    const protocol = response.config.url ? url.protocol.replace(":", "") : "http"
    const hsts = response.headers["strict-transport-security"]
    const sslValid = url.protocol === "https:"


    return {
        url: response.config.url || "",
        statusCode: response.status,
        networkTimings,
        protocol: protocol as "http" || "https",
        security: {
            sslValid,
            hstsEnabled: Boolean(hsts),
        },
        headers: headers,



        // not completed
        redirect: {
            count: 12,
            chain: []
        },
        // not completed
        crawlability: {
            blockedByRobots: false,
            canonicalRedirect: false,
            duplicateURL: false,
        }
    }

}