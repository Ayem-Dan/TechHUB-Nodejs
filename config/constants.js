require("dotenv").config()

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbHost = process.env.DB_HOST
const dbName = process.env.DATABASE

module.exports = {
    dbHost,
    dbPass,
    dbUser,
    dbName
}