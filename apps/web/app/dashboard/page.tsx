import { Button } from "@repo/ui/button";
import { InfoCard } from "@repo/ui/infoCard";
import { ProjectTable } from "../../components/projectTable";

const value: { title: string; value: number }[] = [
  {
    title: "Total Pages",
    value: 120,
  },
  {
    title: "Pages Crawled",
    value: 200,
  },
  {
    title: "Total Issues",
    value: 10,
  },
  {
    title: "Broken Links",
    value: 10,
  },
];

export default function DashboardPage() {
  return (
    <>
      <div className="h-full w-full  px-8 py-12 ">
        <div className="w-full  flex items-center justify-between gap-8 ">
          {value.map((x, idx) => (
            <InfoCard
              key={idx}
              title={x.title}
              value={x.value}
              className="w-full"
            />
          ))}
        </div>
        <div className=" mt-8 w-full border border-neutral-200/40 rounded-lg shadow-2xl ">
          <div className=" flex items-center justify-between px-4 ">
            <h2 className=" text-3xl font-semibold ">Project</h2>
            <Button appName="">Create new Project</Button>
          </div>
          <div>
            <ProjectTable />
          </div>
        </div>
      </div>
    </>
  );
}
