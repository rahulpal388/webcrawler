import { Drawer } from "@repo/ui/components/overlay/drawer";
import { useModalStore } from "../../../store/modalStore";
import { issuesInfoTempData } from "@repo/config/constant/responseConstant/issues/issuesInfoTempData";
import { SeverityBadges } from "../../badges/severityBadges";
import { CategoryBadges } from "../../badges/categoryBages";
import { CodeSnippet } from "../../codeSnippet";
import { HowToFixComponent } from "./howToFixComponent";
import { AffectedPages } from "./affectedPages";
import { Calendar, CircleDot } from "lucide-react";
import { formateDate } from "../../../lib/formateDate";

export function FixIssueModal() {
  const onClose = useModalStore((s) => s.closeModal);
  const issuesInfo = issuesInfoTempData[3];

  if (!issuesInfo) {
    return (
      <Drawer
        onClose={onClose}
        className="h-full w-2xl"
        containerClassName=" h-full"
      >
        <div className="flex h-full items-center justify-center">
          Loading........
        </div>
      </Drawer>
    );
  }

  return (
    <>
      <Drawer onClose={onClose} className="w-2xl" containerClassName=" h-full">
        <div className="space-y-8 pb-8">
          <div className="space-y-2">
            <h4 className="heading-4">{issuesInfo.title}</h4>
            <div className="flex items-center gap-4">
              <SeverityBadges severity={issuesInfo.severity} />
              <CategoryBadges category={issuesInfo.category} />
            </div>
          </div>
          <div className="space-y-2">
            <h5 className="body font-bold">Description</h5>
            <p className="caption-xs">{issuesInfo.description}</p>
          </div>
          <div className="space-y-2">
            <h5 className="body font-bold">Why it matters</h5>
            <p className="caption-xs">{issuesInfo.whyItMatters}</p>
          </div>
          <div className="space-y-2">
            <h5 className="body font-bold">Recommendation</h5>
            <p className="caption-xs">{issuesInfo.recommended.description}</p>
            {issuesInfo.recommended.steps && (
              <ul className="list-inside list-disc space-y-1">
                {issuesInfo.recommended.steps.map((step, index) => (
                  <li key={index} className="caption-xs">
                    {step}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <HowToFixComponent howToFix={issuesInfo.howToFix} />
          <AffectedPages affectedPages={issuesInfo.affectedPages} />
          <div className="space-y-4">
            <div>
              <p className="caption-md">Detected</p>
              <p className="caption flex items-center gap-2">
                <Calendar size={16} />
                {formateDate(issuesInfo.detected)}
              </p>
            </div>
            <div>
              <p className="caption-md">Crawl</p>
              <p className="caption flex items-center gap-2">
                <CircleDot size={16} />#{issuesInfo.crawlCount}
              </p>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
