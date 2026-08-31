import { EachUrlNetworkResultTypes } from "../../../contracts/src/types/urlInformationType/eachUrlNetworkTypes.js";
import { HTMLHeaderType } from "../../../contracts/src/types/urlInformationType/htmlHeaderResponseTypes.js";
import { HTMLLinkType } from "../../../contracts/src/types/urlInformationType/htmlLinksTypes.js";
import { HTMLStructureDataType } from "../../../contracts/src/types/urlInformationType/htmlStructureDataTypes.js";
import { HTMLDocumentType } from "../../../contracts/src/types/urlInformationType/htmlDocumentTypes.js";
import { UrlAnalysesType } from "../../../contracts/src/types/urlInformationType/urlAnalysesTypes.js";
import { PerformanceSignalType } from "../../../contracts/src/types/urlInformationType/performanceSignalTypes.js";
import { AccessibilityType } from "../../../contracts/src/types/urlInformationType/accessibilityTypes.js";
import { Schema } from "mongoose";
import { MobileHtmlDataType } from "../../../contracts/src/types/urlInformationType/HTMLMobileType.js";
import { HTMLMediaTypes } from "../../../contracts/src/types/urlInformationType/HTMLMediaTypes/htmlMediaTypes.js";
import { HTMLHeadingContentType } from "../../../contracts/src/types/urlInformationType/htmlHeadingContentsTypes.js";
import mongoose from "mongoose";

export type UrlCrawledType = {
  projectId: mongoose.Types.ObjectId;
  networkInfo: EachUrlNetworkResultTypes;
  htmlHeader: HTMLHeaderType;
  htmlHeadingContent: HTMLHeadingContentType;
  links: HTMLLinkType[];
  media: HTMLMediaTypes;
  structureData: HTMLStructureDataType;
  mobileUIUX: MobileHtmlDataType;
  urlAnalyses: UrlAnalysesType;
  performanceSignals: PerformanceSignalType;
  htmlDocument: HTMLDocumentType;
  accessibility: AccessibilityType;
};

