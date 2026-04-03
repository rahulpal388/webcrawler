import axios from "axios";



export async function fetchWebPage(url: string): Promise<{
    success: true,
    data: string
} | {
    success: false,
    data: null
}> {

    try {

        console.log(url);
        const response = await axios.get(url, {
            headers: {
                "User-Agent": "crawler/1.0"
            }
        });
        const contentType = response.headers["content-type"] as string;
        if (!contentType.includes("text/html")) {
            return {
                success: false,
                data: null
            }
        }
        return {
            success: true,
            data: response.data as string
        }

    } catch (error) {
        console.log(`Error fetching webpage `)
        console.log(error)
        return {
            success: false,
            data: null
        }

    }

}