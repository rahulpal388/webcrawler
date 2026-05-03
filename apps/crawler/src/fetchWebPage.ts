import axios from "axios";
import { RequestLayerUrlData } from "./types/requestData.type";


export async function fetchWebPage(url: URL): Promise<{
    success: true,
    data: {
        html: string;
        info: RequestLayerUrlData;
    },
} | {
    success: false,
    data: null,
}> {

    try {


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
            }
        }

        return {
            success: true,
            data: {
                html: response.data,
                info: {
                    url: url.toString(),
                    method: "GET",
                    statusCode: response.status,
                    requestTime: end - start,
                    protocol: response.request?.protocol || "",
                    type: "html",
                    domain: url.hostname,
                    size: response.data.length,
                    headers: {
                        contentType: response.headers["content-type"] as string | null,
                        cacheControl: response.headers["cache-control"] as string | null,
                        contentLength: parseInt(response.headers["content-length"] as string) || null,
                        server: response.headers["server"] as string | null,
                        xRobotsTag: response.headers["x-robots-tag"] as string | null
                    },
                    security: {
                        sslValid: url.protocol === "https:",
                        hstsEnabled: !!response.headers["strict-transport-security"],
                    }
                }
            }
        }
    } catch (error) {
        return {
            success: false,
            data: null
        };
    }





}