const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

morgan.token('body', function (req) { return JSON.stringify(req.body) })

app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :body'))

app.get('/', (req, res) => {
    let test = {"hello": "world"}
    res.json(test)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log("Running on port " + PORT)
})