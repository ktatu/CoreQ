const constructFileData = (fileData) => {
    return Object
        .keys(fileData)
        .reduce((array, key) => {
            const fileStr = Buffer.from(fileData[key].data).toString()
            return array.concat({ name: key, fileStr: fileStr })
        }, [])
}

export default constructFileData