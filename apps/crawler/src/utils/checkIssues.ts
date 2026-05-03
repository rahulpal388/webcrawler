import { IssueSeverityLevel, PageIssueInfo, pageIssueRules } from "@/rules/issueRules";
import { CrawledInfo } from "..";




export type IssuesType = {
    path: string;
    status: number;
    title: boolean;
    wordCount: number;
    issues: PageIssueInfo[]
}

const issues = new Map<string, IssuesType>();

export function checkIssues(crawledUrls: CrawledInfo) {
    for (const info of crawledUrls.crawledUrlInfo) {
        const findIssues = pageIssueRules.filter(rule => rule.check(info.htmlLayedData));
        findIssues.map(issue => {
            if (issues.get(info.path)) {
                issues.get(info.path)?.issues.push({
                    name: issue.name,
                    description: issue.description,
                    severity: issue.severity
                })
            } else {
                issues.set(info.path, {
                    path: info.path,
                    status: info.networkResult.info.statusCode,
                    title: Boolean(info.htmlLayedData.meta.title),
                    wordCount: info.htmlLayedData.content.wordCount,
                    issues: [{
                        name: issue.name,
                        description: issue.description,
                        severity: issue.severity
                    }]
                })
            }
        })


    }

    // console.log(issues)
    console.log(JSON.stringify([...issues], null, 2));


}