import React, { useState } from "react"

import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import Button from "@mui/material/Button"

import FormControl from "@mui/material/FormControl"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"

import Code from "../components/Code"
import FileTree from "../components/tasks/FileTree"

import constructFileTreeData from "../logic/constructFileTree"
import { FormControlLabel } from "@mui/material"

import fileRequest from "../requests/fileRequest"

let testCode = `<Divider orientation="vertical"><SwapHorizontalCircleIcon fontSize="large" /></Divider> `

const LeftPanel = ({ state, width, setCode }) => {
    const [files, setFiles] = useState([])
    const [fileDisplay, setFileDisplay] = useState([])
    const [folderDisplay, setFolderDisplay] = useState([])

    const [fileOrFolder, setFileOrFolder] = useState("file")
    const isFiles = fileOrFolder === "file" ? true : false

    const handleSelection = async (event) => {
        // virheilmoitus jos yrittää lähettää tyhjän kansion
        // tai jos treeDatan joukossa on dataSet jossa on jo sama name kuin lisättävässä hakemistossa

        /*
        console.log("files ", event.target.files)

        const fileArray = Array.from(event.target.files)
        let relPaths = fileArray.map(file => isFiles ? file.name : file.webkitRelativePath)

        const displayData = constructFileTreeData(relPaths, isFiles)

        if (isFiles) {
            setFileDisplay(fileDisplay.concat(displayData))
        } else {
            setFolderDisplay(folderDisplay.concat(displayData))
        }


        setFiles(files.concat(fileArray))
        */

        const fileUploadArray = Array
            .from(event.target.files)
            .map(file => {
                const relPath = isFiles ? file.name : file.webkitRelativePath
                return { file, relPath: relPath }
            })

        const res = await fileRequest.sendFiles(fileUploadArray)

        // res data on muotoa { relPath: "folder/subfolder/file.txt", fileString: "filestr"}
        // jotain häikkää vielä kansioiden kanssa
        console.log("rel path ", res.data[0].relPath)
        setCode(res.data[0].fileString)
    }

    const handleRadioToggle = (event) => {
        setFileOrFolder(event.target.value)
    }

    const handleUpload = async () => {
        const res = await fileRequest.sendFiles(files)
        console.log("res data ", res.data)
        //setCode(res.data)
    }

    const FileList = ({ dataArray, title }) => {
        return (
            <div>
                <Typography variant="h6" component="h6">{title}</Typography>
                <ul style={{ listStyle: "none" }}>
                    {dataArray.map(dataSet =>
                        <li 
                            key={dataSet.name}
                        >
                            <FileTree
                                readOnly={true}
                                data={dataSet} 
                            />
                        </li>
                    )}
                </ul>
            </div>
        )
    }

    const SelectFilesButton = () => {
        return (
            <Button 
                variant="contained"
                component="label"
            >
                {fileOrFolder === "file"
                    ? <input type="file" onChange={handleSelection} hidden multiple />
                    : <input type="file" onChange={handleSelection} hidden directory="" webkitdirectory="" />
                }
                Select
            </Button>
        )
    }

    if (state === "upload") {
        return (
            <div>
                <Grid item>
                    <Typography 
                        variant="h5"
                        component="div"
                        gutterBottom
                    >
                        Upload files to begin
                    </Typography>
                </Grid> 
                <Grid item>
                    <FormControl>
                        <RadioGroup
                            row
                            value={fileOrFolder}
                            onChange={handleRadioToggle}
                        >
                            <FormControlLabel
                                value="file"
                                control={<Radio />}
                                label="File"
                            />
                            <FormControlLabel
                                value="folder"
                                control={<Radio />}
                                label="Folder"
                            />
                        </RadioGroup>
                        <SelectFilesButton />
                    </FormControl>
                </Grid>

                <Button onClick={handleUpload}>Upload</Button>

                {(fileDisplay.length > 0) && <FileList dataArray={fileDisplay} title="Files" />}
                {(folderDisplay.length > 0) && <FileList dataArray={folderDisplay} title="Folders" />}
            </div>
        )
    }
}

const Tasks = () => {
    // ehkä reducer tähän tapaan tilantarkistusta varten
    // https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
    const [progress, setProgress] = useState("upload")
    const [leftPanelWidth, setLeftPanelWidth] = useState("40%")
    const [code, setCode] = useState(testCode)

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
                setCode={setCode}
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
                    codeStr={code}
                />
            </Grid>
        </Grid>
    )
}

export default Tasks