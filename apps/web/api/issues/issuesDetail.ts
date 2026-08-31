import { IssuesInfoResponseType } from "@repo/contract/types/apiResponseType/issuesTypes";
import { apiClient } from "../apiClient";
import { issuesInfoTempData } from "@repo/contract/constant/responseConstant/issues/issuesInfoTempData";




export async function getIssuesDetail(id: string): Promise<IssuesInfoResponseType | null> {
    // const response = await apiClient.get(`/issues/${id}`);
    const response = issuesInfoTempData.filter(issues => issues.id === id)[0];
    return response ? response : null;
}
