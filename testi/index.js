import _ from "lodash"

/*
example parameters for constructFileTreeData:
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

const constructFileTreeData = (fileObjs) => {
    // each relative path is split into an array for easier and more readable handling
    const splitArray = fileObjs.map(obj => ({ ...obj, split: obj.relPath.split("/") }))    

    let result = { name: splitArray[0].split[0] }

    splitArray.forEach(obj => {
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

    let nextChild = res.children.find(({ name }) => name === obj.split[level])

    if (_.isEmpty(nextChild)) {
        res.children = [...res.children, constructPath(obj, level)]
    } else {
        addPathToRes(nextChild, obj, level + 1)
    }
}

const constructPath = (obj, level) => {
    if (obj.split.length - 1 === level) {
        return { name: obj.split[level], codeStr: obj.codeStr }
    }
    return { name: obj.split[level], children: [constructPath(obj, level + 1)] }
}

constructFileTreeData()