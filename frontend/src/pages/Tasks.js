import { useState } from "react"

import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import Button from "@mui/material/Button"

import FormControl from "@mui/material/FormControl"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"

import Code from "../components/Code"
import FileTree from "../components/tasks/FileTree"

import fileRequest from "../requests/fileRequest"
import handleInputFiles from "../logic/FileHandler"

let testCode = `<Divider orientation="vertical"><SwapHorizontalCircleIcon fontSize="large" /></Divider> `

const LeftPanel = ({ state, width, setCode }) => {
    const [files, setFiles] = useState([])
    const [fileDisplay, setFileDisplay] = useState([])
    const [folderDisplay, setFolderDisplay] = useState([])

    const [fileOrFolder, setFileOrFolder] = useState("file")
    const isIndividualFiles = fileOrFolder === "file" ? true : false

    const handleSelection = async (event) => {
        const fileData = await handleInputFiles(event.target.files, isIndividualFiles)
        
        if (isIndividualFiles) {
            setFileDisplay(fileDisplay.concat(...fileData))
        } else {
            setFolderDisplay(folderDisplay.concat(fileData))
        }
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
                    {dataArray.map(dataset => {
                        return (
                            <li 
                                key={dataset.name}
                            >
                                <FileTree
                                    readOnly={true}
                                    data={dataset}
                                    setCode={setCode}
                                />
                            </li>
                        )
                    }
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