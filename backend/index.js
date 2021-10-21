const cors = require('cors')
const express = require('express')
const fileUpload = require('express-fileupload')
const morgan = require('morgan')
const mongoose = require('mongoose')
const fileUploadRouter = require('./controllers/fileUploadRouter')
const config = require('./utils/config')
const sentry = require('@sentry/node')

const app = express()

sentry.init({
    dsn: config.SENTRY_KEY
})

mongoose.connect(config.MONGODB_URI)

morgan.token('body', function (req) { return JSON.stringify(req.body) })

app.use(sentry.Handlers.requestHandler())
app.use(cors())
app.use(fileUpload({
    abortOnLimit: true,
    limits: { fileSize: 100000 },
    useTempFiles: true
}))
app.use(express.json())
app.use(morgan(':method :url :status :body'))
app.use('/api/file', fileUploadRouter)

app.get('/', (req, res) => {
    let test = {'hello': 'world'}
    res.json(test)
})

app.get("/debug-sentry", (req, res) => {
    throw new Error("My nth Sentry error!");
})

app.use(sentry.Handlers.errorHandler())

const PORT = 3001
app.listen(PORT, () => {
    console.log("Running on port " + PORT)
})