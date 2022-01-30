import axios from "axios"

const baseUrl = "http://localhost:3001/api/files"

const sendFiles = async (files, isIndividualFiles) => {
    const formData = new FormData()
    files.forEach(val => {
        formData.append(val.relPath, val.file)
    })

    const res = await axios.post(baseUrl, formData, { params: { isIndividualFiles: isIndividualFiles }})
    return res.data
}

export default sendFiles