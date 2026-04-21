import { InfoCard } from "@repo/ui/components/infoCard";
import { CrawledPagesTable } from "./crawledPagesTable";



type IssuesCardInfo = {
    title: string;
    description: number;
}
const issuesCardInfo: IssuesCardInfo[] = [
    {
        title: "Total Pages",
        description: 76
    },
    {
        title: "Indexed Pages",
        description: 12
    },
    {
        title: "Redirected Pages",
        description: 20
    },
    {
        title: "Broken links",
        description: 10
    }
]

export function CrawledPages() {
    return <>
        <div className=" mt-8 px-8 py-4  ">
            <div className=" flex gap-4 justify-between items-center  ">

                {
                    issuesCardInfo.map(items => (
                        <InfoCard
                            key={items.title}
                            className=" w-full "
                            title={items.title}
                            value={items.description}
                        />
                    ))
                }
            </div>
            <div className=" mt-4 ">
                <h4 className=" text-2xl  font-medium ">Crawled Pages</h4>

                <CrawledPagesTable />
            </div>
        </div>
    </>
}