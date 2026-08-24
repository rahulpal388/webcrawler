import { overviewTempData } from "@repo/config/constant/responseConstant/pages/overviewTempdata";
import { OverviewResponseType } from "@repo/config/types/apiResponseType/pages.responseType";




export async function getPageOverview(projectId: string, pageId: string,): Promise<OverviewResponseType> {
    console.log("from api", projectId, pageId)
    const response = overviewTempData;
    return response;
}