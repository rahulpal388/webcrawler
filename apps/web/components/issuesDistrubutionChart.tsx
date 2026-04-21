
import { cn } from "../../../packages/ui/src/utils";
import "../lib/chart"
import { Doughnut } from "react-chartjs-2";

export function IssuesDistributionChart({ className }: { className?: string }) {
    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    }

    return (
        <div className="h-[16rem] ">
            <Doughnut data={data} options={options} className={cn(className)} />
        </div>
    )

}