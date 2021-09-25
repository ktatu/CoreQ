require('dotenv').config()

const SENTRY_KEY = process.env.SENTRY_KEY
const MONGODB_URI = process.env.MONGODB_URI

export { SENTRY_KEY, MONGODB_URI }