import isEmpty from "lodash/isEmpty"

// Transforming uploaded folder into an object that can be directly put into the FileTree component
// file contents (fileStr) are placed into FileTree for easy access
const constructFolderData = (fileArray) => {
    let result = { name: fileArray[0].relPath[0] }

    fileArray.forEach(obj => {
        addPathToRes(result, obj, 1)
    })

    return result
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

    let nextChild = res.children.find(({ name }) => name === obj.relPath[level])

    if (isEmpty(nextChild)) {
        res.children = [...res.children, constructPath(obj, level)]
    } else {
        addPathToRes(nextChild, obj, level + 1)
    }
}

const constructPath = (obj, level) => {
    if (obj.relPath.length - 1 === level) {
        return { name: obj.relPath[level], fileStr: obj.fileStr }
    }
    return { name: obj.relPath[level], children: [constructPath(obj, level + 1)] }
}

export default constructFolderData