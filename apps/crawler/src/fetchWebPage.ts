import axios from "axios";



export async function fetchWebPage(url: URL): Promise<{
    success: true,
    data: {
        domain: string;
        path: string;
        status: number;
        responseTime: number;
        size: number;
        html: string;
    }
} | {
    success: false,
    data: null
}> {



    const start = Date.now();
    const response = await axios.get(url.toString(), {
        headers: {
            "User-Agent": "crawler/1.0"
        }
    });
    const end = Date.now();
    const contentType = response.headers["content-type"] as string;
    if (!contentType.includes("text/html")) {
        return {
            success: false,
            data: null
        }
    }
    const size =
        response.headers["content-length"] ||
        Buffer.byteLength(JSON.stringify(response.data));
    return {
        success: true,
        data: {
            domain: url.origin,
            path: url.pathname,
            status: response.status,
            responseTime: end - start,
            size,
            html: response.data as string
        }
    }



}