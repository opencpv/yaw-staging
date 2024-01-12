import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

function withErrorHandler(fn: any) {
    const resource_exist_error = "The resource already exists";

    return async function (request: any, ...args: any) {
        try {
            return await fn(request, ...args);
        } catch (error: any) {
            // Log the error to a logging system
            log({ error }); // Log the error to a logging system
            // Extract error message and status code
            let errorMessage = error.message || "Internal Server Error";
            errorMessage == resource_exist_error
                ? (errorMessage = "File with same name exists")
                : null;
            const statusCode = error.statusCode || 500;
            console.log(statusCode);
            return NextResponse.json(
                {
                    error: {
                        code: statusCode,
                        message: errorMessage,
                    },
                },
                { status: statusCode }
            );
        }
    };
}

export default withErrorHandler;
