import * as dotenv from 'dotenv'
dotenv.config()
export const emailConfig = {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        password: process.env.MAIL_PASSWORD,
    }
}