
"use client"
import { cn } from "../../../packages/ui/src/utils"
import "../lib/chart"
import { Bar } from "react-chartjs-2"


export default function CrawlStatusChart({ className }: { className?: string }) {
    const data = {
        labels: ["200", "300", "400", "500"],
        datasets: [
            {
                label: "Crawl status",
                data: [10, 20, 15, 25],
                borderColor: "blue",
            },
        ],
    }



    const options = {
        responsive: true,
        maintainAspectRatio: false,
    }

    return <div className="h-[16rem] ">
        <Bar data={data} className={cn("w-full h-full mt-2 ", className)} options={options} />
    </div>
}