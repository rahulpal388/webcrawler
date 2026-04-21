"use client"
import { ReactNode, useState } from "react";

import {
    LayoutDashboard,
    Globe,
    AlertTriangle,
    Link,
    Layers,
    FileText,
    Wrench,
    Network,
    BarChart3
} from "lucide-react";

export type ActiveSidebar =
    | "Overview"
    | "Crawled Pages"
    | "Issues"
    | "Internal Links"
    | "Crawl depth"
    | "Content SEO"
    | "Technical SEO"
    | "Site structure"
    | "Report";

type SidebarType = {
    title: ActiveSidebar;
    icon: ReactNode;
}
const sideBar: SidebarType[] = [
    {
        title: "Overview",
        icon: <LayoutDashboard size={20} className=" stroke-[1px] " />,
    },
    {
        title: "Crawled Pages",
        icon: <Globe size={20} className=" stroke-[1px] " />,
    },
    {
        title: "Issues",
        icon: <AlertTriangle size={20} className=" stroke-[1px] " />,
    },
    {
        title: "Internal Links",
        icon: <Link size={20} className=" stroke-[1px] " />,
    },
    {
        title: "Crawl depth",
        icon: <Layers size={20} className=" stroke-[1px] " />,
    },
    {
        title: "Content SEO",
        icon: <FileText size={20} className=" stroke-[1px] " />,
    },
    {
        title: "Technical SEO",
        icon: <Wrench size={20} className=" stroke-[1px] " />,
    },
    {
        title: "Site structure",
        icon: <Network size={20} className=" stroke-[1px] " />,
    },
    {
        title: "Report",
        icon: <BarChart3 size={20} className=" stroke-[1px] " />,
    }
];



export function SideBar({ active, setActive }: {
    active: ActiveSidebar;
    setActive: React.Dispatch<React.SetStateAction<ActiveSidebar>>
}) {
    return <>
        <div className=" h-full w-full  px-4 py-8  flex flex-col gap-2 ">

            {
                sideBar.map(items => (
                    <div key={items.title} className={` ${active === items.title ? "bg-primary/80 text-background-light" : " hover:bg-neutral-200"} cursor-pointer  rounded px-2 py-2 flex items-center justify-start gap-2  `}
                        onClick={() => {
                            setActive(items.title)
                        }}
                    >
                        {items.icon}
                        <h4>{items.title}</h4>
                    </div>
                ))
            }
        </div>
    </>
}