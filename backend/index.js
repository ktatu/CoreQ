const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const fileUploadRouter = require('./controllers/file_upload')
const sentry = require('@sentry/node')
const config = require('./utils/config')

const app = express()

sentry.init({
    dsn: config.SENTRY_KEY,
    integrations: [
      new sentry.Integrations.Http({ tracing: true }),
    ]
  })

morgan.token('body', function (req) { return JSON.stringify(req.body) })

app.use(Sentry.Handlers.requestHandler())
app.use(cors())
app.use(fileUpload({
    abortOnLimit: true,
    limits: { fileSize: 1000000 },
    safeFileNames: true,
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