import * as dotenv from 'dotenv'

export const bullConfig = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
}