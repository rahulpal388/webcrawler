import { HeadersType } from "@/types/requestData.type";
import axios from "axios";



export function getHeaders(response: axios.AxiosResponse<any, any, {}>): HeadersType {
    const contentType = response.headers["content-type"]?.toString();
    const cacheControl = response.headers["cache-control"]?.toString();
    const server = response.headers["server"]?.toString();
    const contentLength =
        response.headers["content-length"] ||
        Buffer.byteLength(JSON.stringify(response.data));
    const xRobotsTag = response.headers["x-robots-tag"];

    return {
        contentType: contentType || null,
        cacheControl: cacheControl || null,
        contentLength: contentLength || null,
        server: server || null,
        xRobotsTag: xRobotsTag || null,
    }
}