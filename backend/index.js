const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const fileUploadRouter = require('./controllers/file_upload')

const app = express()

morgan.token('body', function (req) { return JSON.stringify(req.body) })

app.use(cors())
app.use(fileUpload({
    limits: { fileSize: 1000000 },
    useTempFiles: true,
    abortOnLimit: true
}))
app.use(express.json())
app.use(morgan(':method :url :status :body'))

app.use('/api/file', fileUploadRouter)

app.get('/', (req, res) => {
    let test = {'hello': 'world'}
    res.json(test)
})

/*
app.post('/api/file', (req, res) => {
    console.log('ollaan file uploadin controllerissa')
    if (!req.files) {
        return res.status(400).send('No files were uploaded')
    }
    // uploady's default inputFieldName is "file"
    let file = req.files.file
    console.log("file mimetype "+ file.mimetype)
    
    res.status(200).send('File uploaded')
})
*/

const PORT = 3001
app.listen(PORT, () => {
    console.log("Running on port " + PORT)
})