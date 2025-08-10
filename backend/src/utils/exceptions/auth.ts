import ApiCustomError, { ErrorOptions } from "./base.exception";

export class CredentialsAlreadyExistException extends ApiCustomError {
    constructor(message?: string, options: ErrorOptions = {}) {
        super(message || "one-of-email-username-phone-exists", {
            isValidationError: options.isValidationError,
            field: options.field,
            code: options.code || 'CREDENTIALS_EXIST',
            statusCode: options.statusCode || 409,
        });
        this.name = 'CredentialsAlreadyExistException';
    }
}

export class InvalidCredentialsException extends ApiCustomError {
    constructor(message?: string, options: ErrorOptions = {}) {
        super(message || "invalid-credentials", {
            isValidationError: options.isValidationError,
            field: options.field,
            code: options.code || 'INVALID_CREDENTIALS',
            statusCode: options.statusCode || 401,
        });
        this.name = 'InvalidCredentialsException';
    }
}

export class AccountDeactivatedException extends ApiCustomError {
    constructor(message?: string, options: ErrorOptions = {}) {
        super(message || "account-deactivated", {
            isValidationError: options.isValidationError,
            field: options.field,
            code: options.code || 'ACCOUNT_DEACTIVATED',
            statusCode: options.statusCode || 403,
        });
        this.name = 'AccountDeactivatedException';
    }
}

export class InvalidOrExpiredRefreshTokenException extends ApiCustomError {
    constructor(message?: string, options: ErrorOptions = {}) {
        super(message || "invalid-or-expired-refresh-token", {
            isValidationError: options.isValidationError,
            field: options.field,
            code: options.code || 'INVALID_OR_EXPIRED_REFRESH_TOKEN',
            statusCode: options.statusCode || 401,
        });
        this.name = 'InvalidOrExpiredRefreshTokenException';
    }
}

export class UserNotFoundException extends ApiCustomError {
    constructor(message?: string, options: ErrorOptions = {}) {
        super(message || "user-not-found", {
            isValidationError: options.isValidationError,
            field: options.field,
            code: options.code || 'USER_NOT_FOUND',
            statusCode: options.statusCode || 404,
        });
        this.name = 'UserNotFoundException';
    }
}

export class InvalidCurrentPasswordException extends ApiCustomError {
    constructor(message?: string, options: ErrorOptions = {}) {
        super(message || "invalid-current-password", {
            isValidationError: options.isValidationError,
            field: options.field,
            code: options.code || 'INVALID_CURRENT_PASSWORD',
            statusCode: options.statusCode || 401,
        });
        this.name = 'InvalidCurrentPasswordException';
    }
}

export class InvalidOrExpiredResetTokenException extends ApiCustomError {
    constructor(message?: string, options: ErrorOptions = {}) {
        super(message || "invalid-or-expired-reset-token", {
            isValidationError: options.isValidationError,
            field: options.field,
            code: options.code || 'INVALID_OR_EXPIRED_RESET_TOKEN',
            statusCode: options.statusCode || 401,
        });
        this.name = 'InvalidOrExpiredResetTokenException';
    }
}