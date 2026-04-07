import { PageData } from "..";


export type IssueSeverityLevel =
    | "Critical"
    | "Error"
    | "Warning"
    | "Notice"


export type IssueRules = {
    name: string;
    description: string;
    severity: IssueSeverityLevel;
    check: (data: PageData) => boolean;
}


const issueRules: IssueRules[] = [

    // -----------------
    // CRITICAL
    // -----------------

    {
        name: "Broken internal links (404)",
        description: "Internal links pointing to non-existing pages",
        severity: "Critical",
        check: (d) => d.statusCode === 404
    },

    {
        name: "5xx server error",
        description: "Server failing to respond",
        severity: "Critical",
        check: (d) => d.statusCode >= 500 && d.statusCode < 600
    },

    {
        name: "No HTTPS",
        description: "Site not using secure protocol",
        severity: "Critical",
        check: (d) => d.protocol !== "https"
    },

    {
        name: "Robots.txt blocking important pages",
        description: "Prevents crawling",
        severity: "Critical",
        check: (d) => d.robotsTxtBlocked === true
    },

    {
        name: "Noindex on important pages",
        description: "Pages cannot be indexed",
        severity: "Critical",
        check: (d) => d.hasNoIndex === true
    },

    {
        name: "Missing canonical with duplicates",
        description: "Duplicate pages competing in ranking",
        severity: "Critical",
        check: (d) => d.canonicalValid === false
    },

    // {
    //     name: "Redirect chains",
    //     description: "Multiple redirects before reaching final page",
    //     severity: "Critical",
    //     check: (d) => (d.redirectChainLength ?? 0) > 2
    // },

    // {
    //     name: "Redirect loops",
    //     description: "Infinite redirect cycle",
    //     severity: "Critical",
    //     check: (d) => d.redirectLoop === true
    // },

    {
        name: "Sitemap returning 4xx/5xx",
        description: "Invalid sitemap URLs",
        severity: "Critical",
        check: (d) => (d.sitemapStatus ?? 200) >= 400
    },

    {
        name: "Mixed content",
        description: "HTTP assets on HTTPS page",
        severity: "Critical",
        check: (d) => d.mixedContent === true
    },

    // -----------------
    // HIGH SEO ISSUES
    // -----------------

    // {
    //     name: "Duplicate title tags",
    //     description: "Multiple pages share same title",
    //     severity: "Error",
    //     check: (d) => d.duplicateTitle === true
    // },

    // {
    //     name: "Duplicate meta descriptions",
    //     description: "Meta descriptions duplicated",
    //     severity: "Error",
    //     check: (d) => d.duplicateMetaDescription === true
    // },

    {
        name: "Multiple H1 tags",
        description: "Page contains more than one H1",
        severity: "Error",
        check: (d) => (d.h1.length ?? 0) > 1
    },

    {
        name: "Missing title tag",
        description: "Title tag missing",
        severity: "Error",
        check: (d) => !d.title
    },

    {
        name: "Missing meta description",
        description: "Meta description missing",
        severity: "Error",
        check: (d) => !d.description
    },

    {
        name: "Canonical pointing to non-existent page",
        description: "Invalid canonical reference",
        severity: "Error",
        check: (d) => d.canonicalValid === false
    },

    {
        name: "Large page size",
        description: "Page size exceeds 3MB",
        severity: "Error",
        check: (d) => (d.pageSize ?? 0) > 3000000
    },

    {
        name: "Pages deeper than crawl depth 4",
        description: "Hard for search engines to discover",
        severity: "Error",
        check: (d) => (d.crawlDepth ?? 0) > 4
    },

    // {
    //     name: "Orphan pages",
    //     description: "Pages without internal links",
    //     severity: "Error",
    //     check: (d) => (d.incomingInternalLinks ?? 0) === 0
    // },

    // {
    //     name: "Broken images",
    //     description: "Images returning 404",
    //     severity: "Error",
    //     check: (d) => (d.imagesBroken ?? 0) > 0
    // },

    // -----------------
    // WARNINGS
    // -----------------

    {
        name: "Title too long",
        description: "Title longer than 60 characters",
        severity: "Warning",
        check: (d) => (d.title?.length ?? 0) > 60
    },

    {
        name: "Title too short",
        description: "Title shorter than 20 characters",
        severity: "Warning",
        check: (d) => (d.title?.length ?? 0) < 20
    },

    {
        name: "Meta description too long",
        description: "Meta description truncated in SERP",
        severity: "Warning",
        check: (d) => (d.description?.length ?? 0) > 160
    },

    {
        name: "Images missing alt text",
        description: "Images missing alt attributes",
        severity: "Warning",
        check: (d) => (d.imagesMissingAlt ?? 0) > 0
    },

    // {
    //     name: "Too many internal links",
    //     description: "More than 100 internal links",
    //     severity: "Warning",
    //     check: (d) => (d.internalLinks ?? 0) > 100
    // },

    {
        name: "URL too long",
        description: "URL longer than 115 characters",
        severity: "Warning",
        check: (d) => (d.url?.length ?? 0) > 115
    },

    // {
    //     name: "URL parameters excessive",
    //     description: "Too many URL parameters",
    //     severity: "Warning",
    //     check: (d) => (d.urlParameterCount ?? 0) > 4
    // },

    {
        name: "Missing security headers",
        description: "Security headers not found",
        severity: "Warning",
        check: (d) => d.securityHeaders === false
    },

    {
        name: "Slow TTFB",
        description: "Time to first byte is slow",
        severity: "Warning",
        check: (d) => (d.ttfb ?? 0) > 600
    },

    {
        name: "Large JavaScript bundle",
        description: "JavaScript bundle size too large",
        severity: "Warning",
        check: (d) => (d.jsBundleSize ?? 0) > 1000000
    },

    {
        name: "Render blocking resources",
        description: "CSS or JS blocking rendering",
        severity: "Warning",
        check: (d) => d.renderBlockingResources === true
    },

    // -----------------
    // NOTICES
    // -----------------

    // {
    //     name: "Missing favicon",
    //     description: "Website missing favicon",
    //     severity: "Notice",
    //     check: (d) => d.hasFavicon === false
    // },

    // {
    //     name: "Missing OpenGraph tags",
    //     description: "OpenGraph tags not present",
    //     severity: "Notice",
    //     check: (d) => d.hasOpenGraph === false
    // },

    // {
    //     name: "Missing Twitter card",
    //     description: "Twitter preview tags missing",
    //     severity: "Notice",
    //     check: (d) => d.hasTwitterCard === false
    // },

    // {
    //     name: "No structured data",
    //     description: "Schema markup missing",
    //     severity: "Notice",
    //     check: (d) => d.hasStructuredData === false
    // },

    {
        name: "Thin content",
        description: "Content less than 300 words",
        severity: "Notice",
        check: (d) => (d.wordCount ?? 0) < 300
    },

    // {
    //     name: "Generic anchor text",
    //     description: "Anchor text like 'click here'",
    //     severity: "Notice",
    //     check: (d) => d.genericAnchorText === true
    // },

    // {
    //     name: "Image not compressed",
    //     description: "Unoptimized images",
    //     severity: "Notice",
    //     check: (d) => (d.imagesUnoptimized ?? 0) > 0
    // },

    // {
    //     name: "No lazy loading images",
    //     description: "Images not using lazy loading",
    //     severity: "Notice",
    //     check: (d) => d.lazyLoadingImages === false
    // }

]