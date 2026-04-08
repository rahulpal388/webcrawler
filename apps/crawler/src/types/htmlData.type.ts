

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
        text: string
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
        broken: string[]

        internalCount: number
        externalCount: number
        brokenCount: number
    }

    structuredData: {
        present: boolean
        types: string[]
    }

}

