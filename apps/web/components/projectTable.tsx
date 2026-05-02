import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { DataTable } from "@repo/ui/components/table"

type Project = {
  id: number;
  domain: string;
  pages: number;
  brokenLinks: number;
  issues: number;
  seoScore: number;
  lastCrawled: string;
};

const columns: Array<{
  key: keyof Project;
  heading: string;
  render?: (value: Project[keyof Project]) => React.ReactNode
}> = [
    { key: "domain", heading: "Domain", render: (value) => <Link href={`/project/${value}`} className=" flex gap-3 items-center ">{value} <ExternalLink size={12} /></Link> },
    { key: "pages", heading: "Pages" },
    { key: "issues", heading: "Issues" },
    { key: "brokenLinks", heading: "Broken Links" },
    { key: "seoScore", heading: "SEO Score" },
    { key: "lastCrawled", heading: "Last Crawled" },
  ]

const projects: Project[] = [
  {
    id: 1,
    domain: "example.com",
    pages: 120,
    brokenLinks: 3,
    issues: 15,
    seoScore: 82,
    lastCrawled: "2026-04-07",
  },
  {
    id: 2,
    domain: "myblog.com",
    pages: 45,
    brokenLinks: 1,
    issues: 6,
    seoScore: 91,
    lastCrawled: "2026-04-06",
  },
  {
    id: 3,
    domain: "store.com",
    pages: 320,
    brokenLinks: 12,
    issues: 34,
    seoScore: 67,
    lastCrawled: "2026-04-05",
  },
  {
    id: 4,
    domain: "example.com",
    pages: 120,
    brokenLinks: 3,
    issues: 15,
    seoScore: 82,
    lastCrawled: "2026-04-07",
  },
  {
    id: 5,
    domain: "myblog.com",
    pages: 45,
    brokenLinks: 1,
    issues: 6,
    seoScore: 91,
    lastCrawled: "2026-04-06",
  },
  {
    id: 6,
    domain: "store.com",
    pages: 320,
    brokenLinks: 12,
    issues: 34,
    seoScore: 67,
    lastCrawled: "2026-04-05",
  },
  {
    id: 7,
    domain: "example.com",
    pages: 120,
    brokenLinks: 3,
    issues: 15,
    seoScore: 82,
    lastCrawled: "2026-04-07",
  },
  {
    id: 8,
    domain: "myblog.com",
    pages: 45,
    brokenLinks: 1,
    issues: 6,
    seoScore: 91,
    lastCrawled: "2026-04-06",
  },
  {
    id: 9,
    domain: "store.com",
    pages: 320,
    brokenLinks: 12,
    issues: 34,
    seoScore: 67,
    lastCrawled: "2026-04-05",
  },
  {
    id: 10,

    domain: "example.com",
    pages: 120,
    brokenLinks: 3,
    issues: 15,
    seoScore: 82,
    lastCrawled: "2026-04-07",
  },
  {
    id: 11,
    domain: "myblog.com",
    pages: 45,
    brokenLinks: 1,
    issues: 6,
    seoScore: 91,
    lastCrawled: "2026-04-06",
  },
  {
    id: 12,
    domain: "store.com",
    pages: 320,
    brokenLinks: 12,
    issues: 34,
    seoScore: 67,
    lastCrawled: "2026-04-05",
  },
];




export function ProjectTable() {
  return (
    <>
      <div className="px-4 py-8  ">
        <DataTable data={projects} columns={columns} />
      </div>
    </>
  );
}
