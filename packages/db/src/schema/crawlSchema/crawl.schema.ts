import { SchemaOf } from "../../types/schemaOfTypes.js";
import { UrlCrawledType } from "../../types/urlCrawledTypes.js";
import { model, Schema } from "mongoose";
import { accessibilitySchema } from "../../schema/crawlSchema/accessibilitySchema.js";
import { htmlDocumentSchema } from "../../schema/crawlSchema/htmlDocumentSchema.js";
import { urlNetworkSchema } from "../../schema/crawlSchema/networkInformation.schema.js";
import { headerInformationSchema } from "../../schema/crawlSchema/headerInformation.schema.js";
import { htmlHeadingContentsSchema } from "../../schema/crawlSchema/htmlHeadingSchema.js";
import { htmlLinksSchema } from "../../schema/crawlSchema/linkInformation.schema.js";
import { htmlStructureDataSchema } from "../../schema/crawlSchema/structureDataSchema.js";
import { performanceSignalSchema } from "../../schema/crawlSchema/performanceSignalSchema.js";
import { urlAnalysesSchema } from "../../schema/crawlSchema/urlAnalysesSchema.js";
import { htmlMediaSchema } from "../../schema/crawlSchema/mediaInformation.schema.js";
import { mobileUIUXSchema } from "../../schema/crawlSchema/mobileUIUXSchema.js";

const urlCrawledSchemaDefinitation: SchemaOf<UrlCrawledType> = {
    projectId: { type: Schema.Types.ObjectId, required: true, ref: "Project" },
    networkInfo: { type: urlNetworkSchema, required: true },
    htmlHeader: { type: headerInformationSchema, required: true },
    htmlHeadingContent: { type: htmlHeadingContentsSchema, required: true },
    links: { type: [htmlLinksSchema], required: true },
    media: { type: htmlMediaSchema, required: true },
    structureData: { type: htmlStructureDataSchema, required: true },
    mobileUIUX: { type: mobileUIUXSchema, required: true },
    urlAnalyses: { type: urlAnalysesSchema, required: true },
    performanceSignals: { type: performanceSignalSchema, required: true },
    htmlDocument: { type: htmlDocumentSchema, required: true },
    accessibility: { type: accessibilitySchema, required: true },
};

const UrlCrawledSchema = new Schema<UrlCrawledType>(urlCrawledSchemaDefinitation);

export default UrlCrawledSchema;