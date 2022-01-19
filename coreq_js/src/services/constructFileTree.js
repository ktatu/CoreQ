const constructFileTreeData = (filePaths) => {
    let result = [];
    let level = {result};

    // https://stackoverflow.com/questions/57344694/create-a-tree-from-a-list-of-strings-containing-paths-of-files-javascript
    filePaths.forEach(path => {
        path.split('/').reduce((r, name, i, a) => {
            if(!r[name]) {
                r[name] = {result: []};
                r.result.push({name, children: r[name].result})
                }
            
            return r[name];
        }, level)
    })

    let tree = result[0]
    tree.isOpen = true
    tree.checked = 0

    return tree
}