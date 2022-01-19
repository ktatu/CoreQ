import React, { useState, useEffect } from "react"
import { useParams,  } from "react-router-dom"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import Button from "@mui/material/Button"

import Code from "../components/Code"
import FileTree from "../components/tasks/FileTree"

import orderBy from "lodash/orderBy"

import constructFileTreeData from "../services/constructFileTree"

const testCode = `<Divider orientation="vertical"><SwapHorizontalCircleIcon fontSize="large" /></Divider> `

const LeftPanel = ({ state, width }) => {
    const [files, setFiles] = useState([])
    const [treeData, setTreeData] = useState([])

    useEffect(() => {
        if (files.length === 0) {
            return
        }

        orderBy(files, "webkitRelativePath", "desc")
        let fileTree = constructFileTreeData()
        setTreeData(constructFileTreeData(["folder/file1.txt", "folder/file2.txt", "folder/subfolder/file3.txt", "folder/subfolder/subfolder2/file4.txt"]))
    }, [files])

    const onFileChange = (event) => {
        let fileArray = Array.from(event.target.files)
        fileArray[0].directory = "test"
        setFiles(files.concat(fileArray))
    }
    const onDirChange = (event) => {
        // virheilmoitus jos yrittää lähettää tyhjän kansion

        let fileArray = Array.from(event.target.files)
        setFiles(files.concat(fileArray))
    }

    const fileCount = () => {
        console.log("files ", files)
    }

    if (state === "upload") {
        return (
            <div>
                <Grid item sx={{ width: width }}>
                    <Typography 
                        variant="h5"
                        component="div"
                        gutterBottom
                    >
                        Upload files to begin
                    </Typography>
                    <Button 
                        variant="contained"
                        component="label"
                    >
                        <input 
                            type="file"
                            onChange={onFileChange}
                            hidden
                            multiple
                        />
                        Select
                    </Button>
                    <Button onClick={fileCount}>Click</Button>
                    <Button
                        variant="contained"
                        component="label"
                    >
                        <input
                            type="file"
                            directory=""
                            webkitdirectory=""
                            onChange={onDirChange}
                            hidden
                        />
                        Directory
                    </Button>
                </Grid>
                <Grid item>
                    <FileTree readOnly={true} data={treeData}/>
                </Grid>
            </div>
        )
    }
}

const Tasks = () => {
    // ehkä reducer tähän tapaan tilantarkistusta varten
    // https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
    const [progress, setProgress] = useState("upload")
    const [leftPanelWidth, setLeftPanelWidth] = useState("40%")

    console.log("render Tasks")

    return (
        <Grid container sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "10px",
        }}>
            <LeftPanel 
                state={progress}
                width={leftPanelWidth}    
            />

            <Divider
                orientation="vertical"
                variant="text"
                flexItem
            >
                Divider
            </Divider>

            <Grid item sx={{
                width: "50%"
            }}>
                <Code 
                    language="jsx"
                    codeStr={testCode}
                />
            </Grid>
        </Grid>
    )
}

export default Tasks