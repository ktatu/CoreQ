const express =  require("express")
const cors = require("cors")
const fileUpload = require("express-fileupload")

const folderConstruct = require("./utils/folderData")
const fileConstruct = require("./utils/fileData")

const app = express()

app.use(cors())
app.use(fileUpload())
app.use(express.json())

app.post("/api/files", (req, res) => {

    const isIndividualFiles = req.query.isIndividualFiles

    if (isIndividualFiles === "true") {
        console.log("files")
        res.json(fileConstruct.constructFileData(req.files))
    } else {
        console.log("folder")
        res.json(folderConstruct.constructFolderData(req.files))
    }
})


const PORT = 3001
app.listen(PORT, () => {
    console.log("Running on port " + PORT)
})