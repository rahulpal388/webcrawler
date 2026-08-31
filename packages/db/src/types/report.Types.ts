import mongoose from "mongoose";




export enum ReportType {
    SEO_AUDIT = "seo_audit"
}

export enum ReportFormat {
    PDF = "pdf",
    CSV = "csv"
}

export enum ReportStatus {
    PENDING = "pending",
    PROCESSING = "processing",
    COMPLETED = "completed",
    FAILED = "failed"
}

export type ReportSchemaType = {
    projectId: mongoose.Types.ObjectId;
    crawlId: mongoose.Types.ObjectId;
    requestedBy: mongoose.Types.ObjectId;

    type: ReportType;

    format: ReportFormat;

    status: ReportStatus;

    objectKey: string | null;

    fileName: string | null;

    fileSize: number | null;

    errorMessage: string | null;

    createdAt: Date;
    completedAt: Date | null;
}
