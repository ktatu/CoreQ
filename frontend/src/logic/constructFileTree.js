// https://stackoverflow.com/questions/57344694/create-a-tree-from-a-list-of-strings-containing-paths-of-files-javascript
/*
const constructFileTreeData = (filePaths, isFiles) => {
    let result = []
    let level = { result }

    filePaths.forEach(path => {
        path.split("/").reduce((r, name) => {
            if(!r[name]) {
                    r[name] = {result: []}
                    r.result.push({ name, children: r[name].result })
                }
            return r[name]
        }, level)
    })

    if (isFiles) {
        result.forEach(file => removeEmptyChildArrays(file))
        return result
    }

    let tree = { ...result[0] }
    removeEmptyChildArrays(tree)

    return tree
}

// reducer could probably be modified to do this
const removeEmptyChildArrays = (tree) => {
    if (tree.children.length === 0) {
        delete tree.children
        return
    }
    tree.children.forEach(child => {
        removeEmptyChildArrays(child)
    })
}*/

const test = (fileStringArray, isFiles) => {


    fileStringArray.forEach(obj => {
        console.log("obj ", obj)
    })
}

const constructFileTreeData = () => {
    let result = []
    let level = { result }

    const filePaths = ["folder/file1.txt", "folder/file2.txt", "folder/subfolder/file3.txt", "folder/subfolder/subfolder2/file4.txt"]

    filePaths.forEach(path => {
        path.split("/").reduce((r, name, i, a) => {
            console.log("r ", r)
            console.log("result ", result)
            console.log("level ", level)
            if(!r[name]) {
                    r[name] = {result: []}
                    r.result.push({ name, children: r[name].result })
                }
            return r[name]
        }, level)
    })

    console.log("result ", result)

}
constructFileTreeData()

export default constructFileTreeData