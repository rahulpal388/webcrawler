

type IssuesOverviewType = {
    path: string;
    status: number;
    title: boolean;
    wordCount: number;
    issues: number;
};

export const issuesOverviewData: IssuesOverviewType[] = [
    {
        path: "/",
        status: 200,
        title: true,
        wordCount: 850,
        issues: 2,
    },
    {
        path: "/about",
        status: 200,
        title: true,
        wordCount: 620,
        issues: 1,
    },
    {
        path: "/blog/seo-guide",
        status: 200,
        title: false,
        wordCount: 1200,
        issues: 4,
    },
    {
        path: "/contact",
        status: 404,
        title: false,
        wordCount: 0,
        issues: 3,
    },
    {
        path: "/products",
        status: 200,
        title: true,
        wordCount: 430,
        issues: 2,
    },
    {
        path: "/services",
        status: 301,
        title: true,
        wordCount: 300,
        issues: 1,
    },
    {
        path: "/",
        status: 200,
        title: true,
        wordCount: 850,
        issues: 2,
    },
    {
        path: "/about",
        status: 200,
        title: true,
        wordCount: 620,
        issues: 1,
    },
    {
        path: "/blog/seo-guide",
        status: 200,
        title: false,
        wordCount: 1200,
        issues: 4,
    },
    {
        path: "/contact",
        status: 404,
        title: false,
        wordCount: 0,
        issues: 3,
    },
    {
        path: "/products",
        status: 200,
        title: true,
        wordCount: 430,
        issues: 2,
    },
    {
        path: "/services",
        status: 301,
        title: true,
        wordCount: 300,
        issues: 1,
    },
];

export function CrawledPagesTable() {
    return <>

        <div className=" mt-4 border border-border rounded-lg overflow-hidden shadow-md ">
            <table className=" w-full border-collapse border border-border rounded-lg overflow-hidden ">
                <thead className="  bg-background-light   ">
                    <th className=" p-3 text-left ">URL</th>
                    <th className=" p-3 text-left ">Status</th>
                    <th className=" p-3 text-left ">Title</th>
                    <th className=" p-3 text-left ">Word Counts</th>
                    <th className=" p-3 text-left ">Issues</th>
                </thead>
                {
                    issuesOverviewData.map((items, idx) => (
                        <tbody key={idx}>
                            <tr className=" border-b border-border ">
                                <td className=" p-3 text-left ">{items.path}</td>
                                <td className=" p-3 text-left ">{items.status}</td>
                                <td className=" p-3 text-left ">{items.title ? "Yes" : "No"}</td>
                                <td className=" p-3 text-left ">{items.wordCount}</td>
                                <td className=" p-3 text-left ">{items.issues}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    </>
}