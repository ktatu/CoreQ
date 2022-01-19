import React from "react"
import merge from "lodash.merge"
import mergeWith from "lodash.mergewith"

const constructFileTree = (filePaths) => {
    const root = filePaths[0].split("/")[0]
    console.log("root ", root)

    let tree1 = { name: "folder", children: { name: "file1" }}
    let tree2 = { name: "folder", children: { name: "file2" }}
    let tree3 = { name: "folder", children: { name: "subfol", children: { name: "file3" }}}
    let tree4 = { name: "folder", children: { name: "subfol", children: { name: "subfol2", children: { name: "file4" }}}}

    let test = merge(tree1, tree2, tree3, tree4)
    console.log("test merge ", test)

    const pathArrays = relPathArrays(filePaths)
    const trees = arraysToTreeObjects(pathArrays)
    console.log("trees ", trees)

    const merged = merge(tree1, tree4)
    console.log("children ", merged.children)
    console.log("merged ", merged)


}

//https://lodash.com/docs/4.17.15#mergeWith
//const customizer = ()

const getProps = () => (
    {
        checked: 0,
        isOpen: true
    }
)

const relPathArrays = (filePaths) => {
    // ["folder1/folder2/file.txt", "folder1/file2.txt"] => [["folder1", "folder2, "file.txt"], ["folder1", "file2.txt"]]
    return filePaths.reduce((prev, curr) => {
        prev.push(curr.split("/"))
        return prev
    }, [])
}

const arraysToTreeObjects = (pathArrays) => {
    let objArray = []
    pathArrays.forEach(pathArr => {
        objArray.push(arrToTreeObj(pathArr))
    })
    return objArray
}

// constructing object from file's relative path, starting from the file and building towards root
const arrToTreeObj = (arr) => {
    let idx = arr.length - 1
    let tree = { name: arr[idx] }
    for (let i = idx - 1; i >= 0; i--) {
        let parent = { name: arr[i], children: { tree }}
        tree = parent
    }
    return tree
}

// the distance between root folder and the file / folder farthest away from it
// for ex. if root/subfolder/subfolder2/file.txt is the longest path then maxDepth === 3
const maxDepth = (arr) => {
    let max = -1
    arr.forEach(arr => {
        if (arr.length > max) {
            max = arr.length
        }
    })
    return max
}

export default constructFileTree