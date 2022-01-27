const isEmpty = require("lodash/isEmpty")

/*
example params (after handleRequestData())
[
    { relPath: "folder/folder2/folder3/file.txt", codeStr: "---" },
    { relPath: "folder/file2.txt", codeStr: "code" }, 
    { relPath: "folder/folder2/file3.txt", codeStr: "lorem ipsum..." }
]

return value:
{ name: "folder", children: 
    [
        { name: "folder2", children: 
            [
                { name: "folder3", children: 
                    [
                        { name: "file.txt", codeStr: "---" }
                    ]
                },
                { name: "file3.txt", codeStr: "lorem impsum..." }
            ]
        },
        { name: "file2.txt", codeStr: "code" }
    ]
}
*/

const constructFolderData = (fileObjs) => {
    const dataArray = (handleRequestData(fileObjs))

    let result = { name: dataArray[0].split[0] }

    dataArray.forEach(obj => {
        addPathToRes(result, obj, 1)
    })

    console.log("result ", result)

    return result
}

const handleRequestData = (fileData) => {
    const array = Object
        .keys(fileData)
        .reduce((array, key) => {
            const fileStr = Buffer.from(fileData[key].data).toString()
            return array.concat({ relPath: key, fileStr: fileStr })
        }, [])
        .map(obj => ({ ...obj, split: obj.relPath.split("/") }))

    return array
}

/*
New paths are constructed from each files relative path.
These paths are appended to result -object, which already has the root folder
Level describes the current depth in the file obj's relative path, for ex. folder/folder2/file.txt has levels 0-2
*/
const addPathToRes = (res, obj, level) => {
    if (!res.children) {
        res.children = []
    }

    let nextChild = res.children.find(({ name }) => name === obj.split[level])

    if (isEmpty(nextChild)) {
        res.children = [...res.children, constructPath(obj, level)]
    } else {
        addPathToRes(nextChild, obj, level + 1)
    }
}

const constructPath = (obj, level) => {
    if (obj.split.length - 1 === level) {
        return { name: obj.split[level], fileStr: obj.fileStr }
    }
    return { name: obj.split[level], children: [constructPath(obj, level + 1)] }
}

module.exports = { constructFolderData }