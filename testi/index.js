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

//const filePaths = ["folder/folder2/file1.txt", "folder/file2.txt", "folder/subfolder/file3.txt", "folder/subfolder/subfolder2/file4.txt"]

//const paramArray = [{ relPath: "folder/folder2/file1.txt", codeStr: "---" }, { relPath: "folder/file2.txt", codeStr: "code code code" }]

const constructFileTreeData = (fileObjs) => {
    const splitArray = fileObjs.map(obj => ({ ...obj, split: obj.relPath.split("/") }))    

    let result = { name: splitArray[0].split[0] }

    splitArray.forEach(obj => {
        addPathToRes(result, obj, 1)
    })

    //let testRes = { name: "folder", children: [{ name: "folder2", children: [{ name: "folder3", children: [{ name: "file.txt" }]} ]}]}
    //let testParam = { relPath: "folder/folder2/folder3/file2.txt", codeStr: "code", split: ["folder", "folder2", "folder3", "file2.txt"] }

    //addPathToRes(paramArray, testParam, 1)

    //addPathToRes(result, splitArray[0], 1)

    console.log("result ", result)

    return result
}


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