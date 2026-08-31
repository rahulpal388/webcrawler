export type AppErrorOptions = {
    code?: string;
    cause?: unknown;
    details?: Record<string, unknown>;
};

export class AppError extends Error {
    public readonly statusCode: number;
    public readonly code: string;
    public readonly details?: Record<string, unknown>;

    constructor(
        message: string,
        statusCode: number,
        options: AppErrorOptions = {},
    ) {
        super(message, { cause: options.cause });

        this.name = "AppError";
        this.statusCode = statusCode;
        this.code = options.code ?? "INTERNAL_SERVER_ERROR";
        this.details = options.details;

        Error.captureStackTrace(this, AppError);
    }
}

