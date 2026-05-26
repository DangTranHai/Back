import { statusCodes } from "./status-code.helper.js";

//Bad request (400)

export class badRequestError extends Error {   
    statusCode = statusCodes.BAD_REQUEST;
    name = "BadRequestError";
    constructor(message = "Bad Request Error") {
        super(message);
    }
}



//Unauthorized (401)

export class unauthorizedError extends Error {
    statusCode = statusCodes.UNAUTHORIZED;
    name = "UnauthorizedError";
    constructor(message = "Unauthorized Error") {
        super(message);
    }
}

// 403 Forbidden

export class forbiddenError extends Error { 
    statusCode = statusCodes.FORBIDDEN;
    name = "ForbiddenError" ;
    constructor(message = "Forbidden Error") {
        super(message);
    }       
}

// 404 Not Found    
export class notFoundError extends Error {
    statusCode = statusCodes.NOT_FOUND;
    name = "NotFoundError";
    constructor(message = "Not Found Error") {
        super(message);
    }   
}

// 500 Internal Server Error
export class internalServerError extends Error {
    statusCode = statusCodes.INTERNAL_SERVER_ERROR;
    name = "InternalServerError";
    constructor(message = "Internal Server Error") {
        super(message);
    }   
}
