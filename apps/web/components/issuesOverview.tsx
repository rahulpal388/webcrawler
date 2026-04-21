

type IssuesOverviewType = {
    title: string;
    severity: "Critical" | "Warning" | "Notices";
    pages: number;
};

export const issuesOverview: IssuesOverviewType[] = [
    {
        title: "Missing Meta Description",
        severity: "Warning",
        pages: 24,
    },
    {
        title: "Broken Internal Links",
        severity: "Critical",
        pages: 12,
    },
    {
        title: "Duplicate Title Tags",
        severity: "Warning",
        pages: 18,
    },
    {
        title: "Missing Alt Attributes",
        severity: "Notices",
        pages: 35,
    },
    {
        title: "Large Page Size",
        severity: "Critical",
        pages: 9,
    },
    {
        title: "Redirect Chains",
        severity: "Notices",
        pages: 6,
    },
];


export function IssuesOverview() {
    return <>

        <div className=" mt-4 border border-border rounded-lg overflow-hidden shadow-md ">
            <table className=" w-full border-collapse border border-border rounded-lg overflow-hidden ">
                <thead className="  bg-background-light   ">
                    <th className=" p-3 text-left ">Title</th>
                    <th className=" p-3 text-left ">Severity</th>
                    <th className=" p-3 text-left ">Pages</th>
                </thead>
                {
                    issuesOverview.map((items, idx) => (
                        <tbody key={idx}>
                            <tr className=" border-b border-border ">
                                <td className=" p-3 text-left ">{items.title}</td>
                                <td className=" p-3 text-left ">{items.severity}</td>
                                <td className=" p-3 text-left ">{items.pages}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    </>
}