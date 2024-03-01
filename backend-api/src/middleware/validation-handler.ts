import { Schema, checkSchema, validationResult } from "express-validator";
import express from "express";

/**
* Middleware to validate the request schema.
* @param req - The express request object
* @param res - The express response object
* @param next - The next middleware function
* @returns null
 */
function validateSchema(req: express.Request, res: express.Response, next: express.NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json(errors);
        return;
    }
    next();
}

/**
* Middleware to validate the request schema
* @param schema - The schema to validate
* @returns an array of middleware functions
* 
*/
export function validationHandler(schema: Schema) {
    return [checkSchema(schema, ['body']), validateSchema];
};