import { HtmlLayerUrlData } from "@/types/htmlData.type";
import { RequestLayerUrlData } from "@/types/requestData.type";


export type IssueSeverityLevel =
    | "Critical"
    | "Error"
    | "Warning"
    | "Notice"

export type PageIssueInfo = {
    name: string;
    description: string;
    severity: IssueSeverityLevel;
}
export type PageIssueRules = PageIssueInfo & {
    check: (data: HtmlLayerUrlData) => boolean;
}

export const pageIssueRules: PageIssueRules[] = [

    // -------------------
    // META TAG ISSUES
    // -------------------

    {
        name: "Missing title tag",
        description: "Title tag is missing",
        severity: "Error",
        check: (d) => !d.meta.title.value
    },

    {
        name: "Title too short",
        description: "Title length less than 20 characters",
        severity: "Warning",
        check: (d) => d.meta.title.length > 0 && d.meta.title.length < 20
    },

    {
        name: "Title too long",
        description: "Title length greater than 60 characters",
        severity: "Warning",
        check: (d) => d.meta.title.length > 60
    },

    {
        name: "Duplicate title",
        description: "Multiple pages share the same title",
        severity: "Error",
        check: (d) => d.meta.title.duplicate
    },

    {
        name: "Missing meta description",
        description: "Meta description is missing",
        severity: "Error",
        check: (d) => !d.meta.description.value
    },

    {
        name: "Meta description too long",
        description: "Description longer than 160 characters",
        severity: "Warning",
        check: (d) => d.meta.description.length > 160
    },

    {
        name: "Duplicate meta description",
        description: "Meta description duplicated across pages",
        severity: "Error",
        check: (d) => d.meta.description.duplicate
    },

    {
        name: "Page blocked from indexing",
        description: "Robots meta tag contains noindex",
        severity: "Critical",
        check: (d) => !d.meta.robots.indexAllowed
    },

    // -------------------
    // CANONICAL
    // -------------------

    {
        name: "Missing canonical",
        description: "Canonical tag missing",
        severity: "Error",
        check: (d) => !d.canonical.value
    },

    {
        name: "Multiple canonical tags",
        description: "More than one canonical tag found",
        severity: "Error",
        check: (d) => d.canonical.multiple
    },

    {
        name: "Invalid canonical URL",
        description: "Canonical URL is invalid",
        severity: "Error",
        check: (d) => !d.canonical.valid
    },

    {
        name: "Canonical pointing to another page",
        description: "Canonical is not self-referencing",
        severity: "Warning",
        check: (d) => d.canonical.value !== null && !d.canonical.selfCanonical
    },

    // -------------------
    // HEADINGS
    // -------------------

    {
        name: "Missing H1",
        description: "Page does not contain an H1 tag",
        severity: "Error",
        check: (d) => d.headings.h1Count === 0
    },

    {
        name: "Multiple H1 tags",
        description: "Page contains more than one H1",
        severity: "Warning",
        check: (d) => d.headings.h1Count > 1
    },

    // -------------------
    // CONTENT
    // -------------------

    {
        name: "Thin content",
        description: "Content less than 300 words",
        severity: "Notice",
        check: (d) => d.content.thinContent
    },

    // -------------------
    // IMAGES
    // -------------------

    {
        name: "Images missing alt text",
        description: "Some images do not have alt attributes",
        severity: "Warning",
        check: (d) => d.images.missingAlt > 0
    },

    {
        name: "Large images",
        description: "Images too large in size",
        severity: "Notice",
        check: (d) => d.images.largeImages > 0
    },

    // -------------------
    // LINKS
    // -------------------

    {
        name: "No internal links",
        description: "Page has no internal links",
        severity: "Warning",
        check: (d) => d.links.internalCount === 0
    },

    {
        name: "Too many external links",
        description: "External links exceed recommended count",
        severity: "Notice",
        check: (d) => d.links.externalCount > 50
    },

    // -------------------
    // STRUCTURED DATA
    // -------------------

    {
        name: "Missing structured data",
        description: "Page has no schema markup",
        severity: "Notice",
        check: (d) => !d.structuredData.present
    }

];