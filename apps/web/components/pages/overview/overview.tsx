import {
  pageOverviewURLInfoLabels,
  pageOverviewHTTPHeaderLabels,
  pageOverviewCrawlingAndIndexingLabels,
} from "../../../constant/pageOverviewLabels";
import { useQuery } from "@tanstack/react-query";
import { PageQueries } from "../../../queries/pages.queries";
import { Loader } from "@repo/ui/components/loader";
import { OverviewDropDownContents } from "./overvieDropDownContents";
import { overviewTempData } from "@repo/contracts/constant/responseConstant/pages/overviewTempdata";

export function Overview() {
  const { data } = useQuery(PageQueries.getOverview());
  if (!data) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-auto p-4 pb-24">
      <h4 className="heading-4 border-border-muted border-b-2 pb-4 font-semibold">
        Overview
      </h4>
      <div className="divide-border-muted flex flex-col gap-6 divide-y-2">
        <OverviewDropDownContents
          title="URL Info"
          sideText={null}
          data={overviewTempData.urlInfo}
          fields={pageOverviewURLInfoLabels}
        />
        <OverviewDropDownContents
          title="HTTP Header"
          sideText={null}
          data={overviewTempData.httpHeaders}
          fields={pageOverviewHTTPHeaderLabels}
        />
        <OverviewDropDownContents
          title="Crawling and Indexing"
          sideText={null}
          data={overviewTempData.crawlingAndIndexing}
          fields={pageOverviewCrawlingAndIndexingLabels}
        />
      </div>
    </div>
  );
}
