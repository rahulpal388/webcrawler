import { overviewTempData } from "@repo/contract/constant/responseConstant/pages/overviewTempdata";
import { OverviewResponseType } from "@repo/contract/types/apiResponseType/pages.responseType";




export async function getPageOverview(projectId: string, pageId: string,): Promise<OverviewResponseType> {
    console.log("from api", projectId, pageId)
    const response = overviewTempData;
    return response;
}
