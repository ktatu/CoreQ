// https://stackoverflow.com/questions/57344694/create-a-tree-from-a-list-of-strings-containing-paths-of-files-javascript
const constructFileTreeData = (filePaths) => {
    let result = []
    let level = { result }

    filePaths.forEach(path => {
        path.split('/').reduce((r, name, i, a) => {
            if(!r[name]) {
                    r[name] = {result: []}
                    r.result.push({ name, children: r[name].result })
                }
            return r[name]
        }, level)
    })

    let tree = { ...result[0] }
    removeEmptyChildArrays(tree)

    return tree
}

// seems inefficient, reducer could probably be modified to do this
const removeEmptyChildArrays = (tree) => {
    if (tree.children.length === 0) {
        delete tree.children
        return
    }
    tree.children.forEach(child => {
        removeEmptyChildArrays(child)
    })
}

export default constructFileTreeData