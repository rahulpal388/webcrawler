import { IssuesInfoResponseType } from "@repo/config/types/apiResponseType/issuesTypes";
import { apiClient } from "../apiClient";
import { issuesInfoTempData } from "@repo/config/constant/responseConstant/issues/issuesInfoTempData";




export async function getIssuesDetail(id: string): Promise<IssuesInfoResponseType | null> {
    // const response = await apiClient.get(`/issues/${id}`);
    const response = issuesInfoTempData.filter(issues => issues.id === id)[0];
    return response ? response : null;
}