import express from "express"
import cors from "cors"
import fileUpload from "express-fileupload"

const app = express()

app.use(cors())
app.use(fileUpload())
app.use(express.json())

app.post("/api/files", (req, res) => {
    console.log("req files length ", req.files.length)

    return res.sendStatus(200)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log("Running on port " + PORT)
})

