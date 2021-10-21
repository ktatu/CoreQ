const fileUploadRouter = require('express').Router()
const path = require('path')

const allowedExtensions = ['.java', '.js', '.py']

fileUploadRouter.post('/', (req, res) => {
    if (!req.files) {
        return res.status(400).send('No files were uploaded')
    }
    // uploady's default inputFieldName is "file"
    let file = req.files.file
    const ext = path.extname(file.name)
    if (!allowedExtensions.includes(ext)) {
        return res.status(400).send('Extension type ' + ext + ' not allowed')
    }
    
    res.status(200).send('File uploaded')
})

module.exports = fileUploadRouter