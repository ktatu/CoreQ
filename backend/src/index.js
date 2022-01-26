const express =  require("express")
const cors = require("cors")
const fileUpload = require("express-fileupload")

const constructFileTreeData = require("./constructFileTreeData").default

const app = express()

app.use(cors())
app.use(fileUpload())
app.use(express.json())

app.post("/api/files", (req, res) => {

    const test = constructFileTreeData(req.files)

    console.log("test ", test)

    return res.json(test)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log("Running on port " + PORT)
})