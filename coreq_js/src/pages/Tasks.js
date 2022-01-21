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

import constructFileTreeData from "../services/constructFileTree"
import { FormControlLabel } from "@mui/material"

const testCode = `<Divider orientation="vertical"><SwapHorizontalCircleIcon fontSize="large" /></Divider> `

const LeftPanel = ({ state, width }) => {
    const [files, setFiles] = useState([])
    const [fileDisplayData, setFileDisplayData] = useState([])
    const [folderDisplayData, setFolderDisplayData] = useState([])

    const [fileOrFolder, setFileOrFolder] = useState("file")
    const isFile = fileOrFolder === "file" ? true : false

    const handleSelection = (event) => {
        // virheilmoitus jos yrittää lähettää tyhjän kansion
        // tai jos treeDatan joukossa on dataSet jossa on jo sama name kuin lisättävässä hakemistossa

        const fileArray = Array.from(event.target.files)
        let relPaths = fileArray.map(file => isFile ? file.name : file.webkitRelativePath)

        const displayData = constructFileTreeData(relPaths)

        if (isFile) {
            setFileDisplayData(fileDisplayData.concat(displayData))
        } else {
            setFolderDisplayData(folderDisplayData.concat(displayData))
        }

        setFiles(files.concat(fileArray))
    }

    const handleRadioToggle = (event) => {
        setFileOrFolder(event.target.value)
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

                {(fileDisplayData.length > 0) && <FileList dataArray={fileDisplayData} title="Files" />}
                {(folderDisplayData.length > 0) && <FileList dataArray={folderDisplayData} title="Folders" />}
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