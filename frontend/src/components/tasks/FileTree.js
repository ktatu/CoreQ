import { CollectionsOutlined } from "@mui/icons-material"
import { useState } from "react"
import FolderTree from "react-folder-tree"
import 'react-folder-tree/dist/style.css'

const FileTree = ({ readOnly, data, setCode }) => {
    //console.log("test data ", testData)
    const onTreeStateChange = (state, event) => console.log(state, event)


    const handleTreeStateChange = (state, event) => {
        //console.log(state, event)
    }

    const onNameClick = ({ defaultOnClick, nodeData }) => { 
        defaultOnClick()

        if (nodeData.fileStr) {
            setCode(nodeData.fileStr)
        }
    }

    return (
        <FolderTree
            data={data}
            onChange={handleTreeStateChange}
            indentPixels={50}
            showCheckbox={false}
            onNameClick={onNameClick}
            readOnly={readOnly}

        />
    )
}

export default FileTree