import { HtmlLayerUrlData } from "@/types/htmlData.type";



type SEORulesType = {
    name: string;
    point: number;
    check: (data: HtmlLayerUrlData) => boolean
}


// const SEORules: SEORulesType[] = [

//     // Technical SEO

//     {
//         name: "HTTPS enabled",
//         point: 5,
//         check: (data) => data.protocol === "https"
//     },

//     {
//         name: "Valid status code",
//         point: 5,
//         check: (data) => data.statusCode === 200
//     },

//     {
//         name: "Canonical tag present",
//         point: 3,
//         check: (data) => !!data.canonical
//     },

//     {
//         name: "Robots not blocking indexing",
//         point: 3,
//         check: (data) => data.robots !== "noindex"
//     },

//     {
//         name: "Page size acceptable",
//         point: 2,
//         check: (data) => data.pageSize < 1000000
//     },

//     {
//         name: "Response time acceptable",
//         point: 2,
//         check: (data) => data.responseTime < 2000
//     },


//     // On-Page SEO

//     {
//         name: "Title exists",
//         point: 6,
//         check: (data) => !!data.title
//     },

//     {
//         name: "Title length valid",
//         point: 3,
//         check: (data) =>
//             !!data.title && data.title.length >= 30 && data.title.length <= 60
//     },

//     {
//         name: "Meta description exists",
//         point: 5,
//         check: (data) => !!data.description
//     },

//     {
//         name: "Meta description length valid",
//         point: 2,
//         check: (data) =>
//             !!data.description &&
//             data.description.length >= 50 &&
//             data.description.length <= 160
//     },

//     {
//         name: "Single H1 tag",
//         point: 6,
//         check: (data) => data.h1.length === 1
//     },

//     {
//         name: "Has H2 headings",
//         point: 2,
//         check: (data) => data.h2.length > 0
//     },


//     // Content Quality

//     {
//         name: "Content length sufficient",
//         point: 6,
//         check: (data) => data.wordCount >= 300
//     },

//     {
//         name: "Strong content depth",
//         point: 4,
//         check: (data) => data.wordCount >= 800
//     },


//     // Images

//     {
//         name: "Images have alt attributes",
//         point: 4,
//         check: (data) =>
//             data.imagesTotal === 0 ||
//             data.imagesMissingAlt / data.imagesTotal < 0.3
//     },


//     // Internal Linking

//     // {
//     //     name: "Internal links exist",
//     //     point: 4,
//     //     check: (data) => data.internalLinks > 0
//     // },

//     // {
//     //     name: "Balanced internal links",
//     //     point: 2,
//     //     check: (data) => data.internalLinks >= 3
//     // },

//     // {
//     //     name: "External links present",
//     //     point: 1,
//     //     check: (data) => data.externalLinks > 0
//     // },


//     // URL Structure

//     {
//         name: "URL length acceptable",
//         point: 2,
//         check: (data) => data.urlLength < 100
//     },



//     // Crawl Structure

//     {
//         name: "Crawl depth acceptable",
//         point: 2,
//         check: (data) => data.crawlDepth <= 3
//     }
// ];



