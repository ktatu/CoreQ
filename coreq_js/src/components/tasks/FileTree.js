import React from "react"
import FolderTree, { testData } from "react-folder-tree"
import 'react-folder-tree/dist/style.css'

const treeState = {
    name: 'Categories',
    checked: 0,   // half check: some children are checked
    isOpen: true,   // this folder is opened, we can see it's children
    children: [
      { name: 'Index.vue' },
      { name: "Demo.vue" },
      { name: "Flavors.vue" },
      {
        name: 'Types',
        children: [
          { name: 'Index.vue' },
          { name: 'Other.vue' },
        ],
      },
    ],
  };

const FileTree = ({ readOnly, data }) => {
    //console.log("test data ", testData)
    const onTreeStateChange = (state, event) => console.log(state, event)

    //console.log("tree state ", treeState)
    //console.log("data FileTreessä ", data)

    return (
        <FolderTree
            data={data}
            onChange={onTreeStateChange}
            indentPixels={50}
            showCheckbox={!readOnly}
        />
    )
}

export default FileTree