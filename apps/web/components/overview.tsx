import { InfoCard } from "@repo/ui/components/infoCard";
import CrawlStatusChart from "./crawlStatusChart";
import { IssuesDistributionChart } from "./issuesDistrubutionChart";
import { IssuesOverview } from "./issuesOverview";


type CardInfo = {
    title: string;
    description: number;
}
const cardInfo: CardInfo[] = [
    {
        title: "SEO Score",
        description: 76
    },
    {
        title: "Page Crawled",
        description: 12
    },
    {
        title: "Issues",
        description: 20
    },
    {
        title: "Broken links",
        description: 10
    },
    {
        title: "Site health",
        description: 90
    },
    // {
    //     title: "Site Performance",
    //     description: 80
    // }
]

export function Overview() {
    return <>
        <div className=" mt-8 px-8 py-4  flex flex-col gap-4 ">
            <div className=" flex gap-4 justify-between items-center  ">

                {
                    cardInfo.map(items => (
                        <InfoCard
                            key={items.title}
                            className=" w-full "
                            title={items.title}
                            value={items.description}
                        />
                    ))
                }
            </div>

            <div className=" w-full  flex gap-2 h-[20rem] ">
                <div className=" flex-1/2  h-full  px-4 py-2 border border-border rounded flex items-center justify-center flex-col  ">
                    <h4 className=" text-2xl font-semibold ">Crawl Status</h4>
                    <CrawlStatusChart />
                </div>
                <div className=" flex-1/2   px-4 py-2 border border-border rounded flex items-center justify-between flex-col   ">
                    <h4 className=" text-2xl font-semibold ">Issues Distribution</h4>
                    <div className=" flex  ">
                        <IssuesDistributionChart />
                        <div className=" self-end flex flex-col items-start ">
                            <div className="flex items-center justify-center gap-2 ">
                                <div className=" bg-[rgb(255,99,132)] h-2 w-8 rounded-lg " />
                                <span className=" text-sm font-semibold ">Critical</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 ">
                                <div className=" bg-[rgb(54,162,235)] h-2 w-8 rounded-lg " />
                                <span className=" text-sm font-semibold ">Warning</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 ">
                                <div className=" bg-[rgb(255,205,86)] h-2 w-8 rounded-lg " />
                                <span className=" text-sm font-semibold ">Notice</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div>
                <h4 className=" text-3xl  font-medium ">Issues</h4>
                <IssuesOverview />
            </div>
        </div>
    </>
}