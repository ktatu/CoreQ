import express from "express"
import cors from "cors"
import fileUpload from "express-fileupload"
import _ from "lodash"

const app = express()

app.use(cors())
app.use(fileUpload())
app.use(express.json())

app.post("/api/files", (req, res) => {

    //console.log("req files ", req.files)

    //console.log("req files keys ", Object.keys(req.files))
    console.log("-----")

    const array = Object
        .keys(req.files)
        .reduce((prevArr, key) => {
            const fileStr = Buffer.from(req.files[key].data).toString()
            return prevArr.concat({ relPath: key, fileString: fileStr})
        }, [])

    //console.log("test array ", array)

    const filesAsStrings = _.reduce(req.files, (array, file) => {
        //console.log("file ", file)
        //console.log("key ", Object.keys(file))
        const codeStr = Buffer.from(file.data).toString()
        return array.concat(codeStr)
    }, [])

    return res.json(array)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log("Running on port " + PORT)
})

