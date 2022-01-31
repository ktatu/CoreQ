import constructFolderData from "./folderData"

const handleInputFiles = async (fileList, isIndividualFiles) => {
    // event.target.files returns FileList, needs to be transformed into an array for functions
    const fileArray = await Promise.all(
        Array
            .from(fileList)
            .map(async (file) =>  {
                return { name: file.name, relPath: getFileRelativePath(file), fileStr: await fileContentToString(file) } 
            })
    )
    
    if (isIndividualFiles) {
        return fileArray
    }

    return constructFolderData(fileArray)
}

const fileContentToString = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()

        fileReader.onload = () => {
            resolve(fileReader.result)
        }

        fileReader.onerror = reject

        fileReader.readAsBinaryString(file)
    })
}

const getFileRelativePath = (file, isIndividualFile) =>  isIndividualFile ? file.name : file.webkitRelativePath.split("/")

export default handleInputFiles