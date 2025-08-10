export interface ErrorOptions {
    isValidationError?: boolean;
    field?: string;
    code?: string;
    statusCode?: number;
}

class ApiCustomError extends Error {
    public readonly isValidationError: boolean;
    public readonly field?: string;
    public readonly code: string;
    public readonly statusCode: number;

    constructor(message?: string, options: ErrorOptions = {}) {
        super(message);
        this.name = 'CustomError';
        this.isValidationError = options.isValidationError ?? false;
        this.field = options.field;
        this.code = options.code || 'Internal Server Error';
        this.statusCode = options.statusCode || 500;
    }
}

export default ApiCustomError;