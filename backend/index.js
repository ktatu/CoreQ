const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const app = express()

morgan.token('body', function (req) { return JSON.stringify(req.body) })

app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(morgan(':method :url :status :body'))

app.get('/', (req, res) => {
    let test = {'hello': 'world'}
    res.json(test)
})

app.post('/api/file', (req, res) => {
    console.log('ollaan file uploadin controllerissa')
    // uploadyssa default inputFieldName on "file"
    let file = req.files.file
    file ? res.status(200) : res.status(404)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log("Running on port " + PORT)
})