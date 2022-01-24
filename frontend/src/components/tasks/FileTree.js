import { CollectionsOutlined } from "@mui/icons-material"
import { useState } from "react"
import FolderTree from "react-folder-tree"
import 'react-folder-tree/dist/style.css'


const onNameClick = ({ defaultOnClick, nodeData }) => { 
    console.log("default on click ", defaultOnClick)
    defaultOnClick()
    // täällä klikkauksella kyseinen tiedosto näkyville oikealle
    console.log("click")
    const {
      path, name, checked, isOpen, 
    } = nodeData
  
    console.log("node data ", nodeData)
}

const FileTree = ({ readOnly, data }) => {
    //console.log("test data ", testData)
    const onTreeStateChange = (state, event) => console.log(state, event)

    //console.log("tree state ", treeState)
    //console.log("data FileTreessä ", data)

    const handleTreeStateChange = (state, event) => {
        console.log(state, event)
    }

    return (
        <FolderTree
            data={data}
            onChange={handleTreeStateChange}
            indentPixels={50}
            showCheckbox={false}
            onNameClick={onNameClick}
            readOnly

        />
    )
}

export default FileTree