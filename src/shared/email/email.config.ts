import * as dotenv from 'dotenv'
dotenv.config()
export const emailConfig = {
    host: process.env.MAIL_HOST,
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        password: process.env.MAIL_PASSWORD,
    }
}