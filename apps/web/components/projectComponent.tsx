'use client'
import { useState } from "react";
import { ActiveSidebar, SideBar } from "./sidebar";
import { Overview } from "./overview";
import { ContentSeo } from "./contentSeo";
import { CrawledDepth } from "./crawledDepth";
import { CrawledPages } from "./crawledPages";
import { InternalLinks } from "./internalLinks";
import { Report } from "./report";
import { SiteStructure } from "./siteStruture";
import { TechnicalSeo } from "./technicalSeo";
import { Issues } from "./issues";


export function ProjectComponent() {
    const [active, setActive] = useState<ActiveSidebar>("Overview")

    return <>
        <div className="  w-[12rem] h-full border-r border-border  ">
            <SideBar active={active} setActive={setActive} />
        </div>
        <div className=" flex-1  ">
            {active === "Overview" && <Overview />}
            {active === "Content SEO" && <ContentSeo />}
            {active === "Issues" && <Issues />}
            {active === "Crawl depth" && <CrawledDepth />}
            {active === "Crawled Pages" && <CrawledPages />}
            {active === "Internal Links" && <InternalLinks />}
            {active === "Report" && <Report />}
            {active === "Site structure" && <SiteStructure />}
            {active === "Technical SEO" && <TechnicalSeo />}
        </div>
    </>
}