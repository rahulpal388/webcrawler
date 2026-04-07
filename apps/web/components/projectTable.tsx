import { ExternalLink } from "lucide-react";
import Link from "next/link";

type Project = {
  domain: string;
  pages: number;
  brokenLinks: number;
  issues: number;
  seoScore: number;
  lastCrawled: string;
};
const projects: Project[] = [
  {
    domain: "example.com",
    pages: 120,
    brokenLinks: 3,
    issues: 15,
    seoScore: 82,
    lastCrawled: "2026-04-07",
  },
  {
    domain: "myblog.com",
    pages: 45,
    brokenLinks: 1,
    issues: 6,
    seoScore: 91,
    lastCrawled: "2026-04-06",
  },
  {
    domain: "store.com",
    pages: 320,
    brokenLinks: 12,
    issues: 34,
    seoScore: 67,
    lastCrawled: "2026-04-05",
  },
  {
    domain: "example.com",
    pages: 120,
    brokenLinks: 3,
    issues: 15,
    seoScore: 82,
    lastCrawled: "2026-04-07",
  },
  {
    domain: "myblog.com",
    pages: 45,
    brokenLinks: 1,
    issues: 6,
    seoScore: 91,
    lastCrawled: "2026-04-06",
  },
  {
    domain: "store.com",
    pages: 320,
    brokenLinks: 12,
    issues: 34,
    seoScore: 67,
    lastCrawled: "2026-04-05",
  },
  {
    domain: "example.com",
    pages: 120,
    brokenLinks: 3,
    issues: 15,
    seoScore: 82,
    lastCrawled: "2026-04-07",
  },
  {
    domain: "myblog.com",
    pages: 45,
    brokenLinks: 1,
    issues: 6,
    seoScore: 91,
    lastCrawled: "2026-04-06",
  },
  {
    domain: "store.com",
    pages: 320,
    brokenLinks: 12,
    issues: 34,
    seoScore: 67,
    lastCrawled: "2026-04-05",
  },
  {
    domain: "example.com",
    pages: 120,
    brokenLinks: 3,
    issues: 15,
    seoScore: 82,
    lastCrawled: "2026-04-07",
  },
  {
    domain: "myblog.com",
    pages: 45,
    brokenLinks: 1,
    issues: 6,
    seoScore: 91,
    lastCrawled: "2026-04-06",
  },
  {
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
      <div className="mt-4 px-8 py-8 ">
        <table className=" w-full border-collapse  ">
          <thead className="  bg-neutral-500  ">
            <tr>
              <th className="p-3 text-left">S.No</th>
              <th className="p-3 text-left">Domain</th>
              <th className="p-3 text-left">Pages</th>
              <th className="p-3 text-left">Issues</th>
              <th className="p-3 text-left">SEO Scores</th>
              <th className="p-3 text-left">Broken Links</th>
              <th className="p-3 text-left">Last Crawled</th>
            </tr>
          </thead>
          {projects.map((x, idx) => (
            <tbody
              key={idx + 1}
              className=" border-b bg-neutral-200  hover:bg-neutral-50 "
            >
              <tr>
                <td className="p-3">{idx + 1}</td>
                <td className="p-3">
                  <Link
                    href={`/project/${x.domain}`}
                    className=" flex gap-2 items-center "
                  >
                    {x.domain}
                    <ExternalLink size={12} />
                  </Link>
                </td>
                <td className="p-3">{x.pages}</td>
                <td className="p-3">{x.issues}</td>
                <td className="p-3">{x.seoScore}</td>
                <td className="p-3">{x.brokenLinks}</td>
                <td className="p-3">{x.lastCrawled}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
