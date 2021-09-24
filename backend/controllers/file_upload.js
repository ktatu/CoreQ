const fileUploadRouter = require('express').Router()

fileUploadRouter.post('/', (req, res) => {
    console.log('ollaan file uploadin controllerissa')
    if (!req.files) {
        return res.status(400).send('No files were uploaded')
    }
    // uploady's default inputFieldName is "file"
    let file = req.files.file
    console.log("file mimetype "+ file.mimetype)
    
    res.status(200).send('File uploaded')
})

module.exports = fileUploadRouter