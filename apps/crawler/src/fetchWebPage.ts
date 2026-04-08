import axios from "axios";


export async function fetchWebPage(url: URL): Promise<{
    success: true,
    data: {
        response: axios.AxiosResponse<any, any, {}>
        html: string;
        responseTime: number;
    },
} | {
    success: false,
    data: null,
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
        }
    }

    return {
        success: true,
        data: {
            html: response.data,
            responseTime: end - start,
            response
        }
    }





}