import express  from "express";
import cors from 'cors'
import helmet from "helmet";
import winston from "winston";
import morgan from 'morgan'
import cookieParser from "cookie-parser";

import Logger from "../helpers/logger";

const logger = new Logger(winston)

const middlewares = {
    apiLogger: morgan('combined', { stream: logger.stream }),
    urlIncoded: express.urlencoded({extended:true}),
    cookie:cookieParser(),
    json:express.json,
    secuirty:helmet(),
    connect:cors()
}

export default middlewares
export {logger}