

export type PageMetaType = {
    title: {
        value: string | null
        length: number
        duplicate: boolean
    }

    description: {
        value: string | null
        length: number
        duplicate: boolean
    }

    robots: {
        raw: string | null
        indexAllowed: boolean
        followAllowed: boolean
    }
}


export type CanonicalType = {
    value: string | null
    selfCanonical: boolean
    valid: boolean
    multiple: boolean
}

export type HtmlLayerUrlData = {

    meta: PageMetaType;

    canonical: CanonicalType

    headings: {
        h1: string[]
        h2: string[]
        h3: string[]

        h1Count: number
        h2Count: number
        h3Count: number
    }

    content: {
        wordCount: number
        thinContent: boolean
    }

    images: {
        total: number
        missingAlt: number
        largeImages: number
    }

    links: {
        internal: string[]
        external: string[]

        internalCount: number
        externalCount: number
    }

    structuredData: {
        present: boolean
        types: string[]
    }

}


export type HtmlLayerReport = {
    metaTags: {
        missingTitles: number;
        duplicateTitles: number;
        longTitles: number;
        shortTitles: number;

        missingDescriptions: number;
        duplicateDescriptions: number;
        longDescriptions: number;
        shortDescriptions: number;
    }

    canonical: {
        missingCanonical: number;
        multipleCanonicals: number;
        invalidCanonical: number;
        nonSelfCanonical: number;
    }

    headings: {
        pagesWithoutH1: number;
        pagesWithMultipleH1: number;
        pagesWithoutH2: number;
    }

    contentQuality: {
        averageWordCount: number;
        thinContentPages: number;
        duplicateContentPages: number;
    }

    images: {
        totalImages: number;
        imagesMissingAlt: number;
        largeImages: number;
    }

    internalLinks: {
        totalInternalLinks: number;
        orphanPages: number;
        avgInternalLinksPerPage: number;
    }

    externalLinks: {
        totalExternalLinks: number;
        pagesWithExternalLinks: number;
    }

    brokenLinks: {
        internalBrokenLinks: number;
        externalBrokenLinks: number;
        pagesWithBrokenLinks: number;
    }

    structuredData: {
        pagesWithSchema: number;
        schemaTypes: string[]
    }
}
