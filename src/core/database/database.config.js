require('dotenv').config()
console.log(process.env.DB_HOST+':'+process.env.DB_PORT)
module.exports = {
    development: {
        url: process.env.DB_URL,
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    },
    test: {
        url: process.env.DB_URL,
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    },
    production: {
        url: process.env.DB_URL,
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    }
}