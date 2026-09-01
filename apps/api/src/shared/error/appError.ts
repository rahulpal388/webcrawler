export type AppErrorOptions = {
    errorMessage: string;
    details?: Record<string, unknown>;
};

export class AppError extends Error {
    public readonly statusCode: number;
    public readonly errorMessage: string;
    public readonly details?: Record<string, unknown>;

    constructor(
        message: string,
        statusCode: number,
        options: AppErrorOptions = {
            errorMessage: "An unexpected error occurred"
        },
    ) {
        super(message,);

        this.name = "AppError";
        this.statusCode = statusCode;
        this.errorMessage = options.errorMessage;
        this.details = options.details;

        Error.captureStackTrace(this, AppError);
    }
}

