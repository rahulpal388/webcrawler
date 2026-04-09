import { NetworkTimingsType } from "@/types/requestData.type";
import { performance } from "perf_hooks"
import https from "https"


export async function getNetworkTimings(url: string): Promise<NetworkTimingsType> {

    return await new Promise<NetworkTimingsType>((resolve, reject) => {
        let timings: NetworkTimingsType = {
            dnsLookupTime: 0,
            tcpConnectionTime: 0,
            sslHandshakeTime: 0,
            timeToFirstByte: 0,
            totalResponseTime: 0,
        }
        const start = performance.now();
        const req = https.get(url)

        req.on("socket", (socket) => {
            socket.on("lookup", () => {
                timings.dnsLookupTime = performance.now() - start;
            })
            socket.on("connection", () => {
                timings.tcpConnectionTime = performance.now() - start;

            })

            socket.on("secureConnect", () => {
                timings.sslHandshakeTime = performance.now() - start;
            })

        })


        req.on("response", (res) => {
            timings.timeToFirstByte = performance.now() - start;

            res.on("end", () => {
                timings.totalResponseTime = performance.now() - start;
            })
            res.resume();
            resolve(timings);
        })

        req.on("error", () => {
            reject(timings);
        })
    })

}