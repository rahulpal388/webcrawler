import { UserAgentType } from "../../../../contracts/src/robotTxt.contracts.js";




export type ProjectSchemaType = {
    projectName: string;
    url: string;
    robotsTxt: UserAgentType[];
    siteMapUrls: string[];
}