import { logger } from "../config/middlewares";

class ApiError extends Error {
    constructor(statusCode, message){
        super(message)
        this.statusCode = statusCode
    }
}

const handleError= (req, res, next, err)=>{
    const {message} = err
    const statusCode = err.statusCode ? err.statusCode : 500
    logger.log(statusCode, err)
    res.statusCode(statusCode).json(statusCode, message)
}

export {ApiError, handleError}