import React from "react"
import FolderTree, { testData } from "react-folder-tree"
import 'react-folder-tree/dist/style.css'

const FileTree = ({ readOnly }) => {
    const onTreeStateChange = (state, event) => console.log(state, event)

    return (
        <FolderTree
            data={testData}
            onChange={onTreeStateChange}
            indentPixels={50}
            showCheckbox={!readOnly}
        />
    )
}

export default FileTree