import React, { useState, useEffect } from "react"

import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import Button from "@mui/material/Button"

import FormControl from "@mui/material/FormControl"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormLabel from "@mui/material/FormLabel"

import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined"
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined"

import Code from "../components/Code"
import FileTree from "../components/tasks/FileTree"

import constructFileTreeData from "../services/constructFileTree"
import { FormControlLabel } from "@mui/material"

const testCode = `<Divider orientation="vertical"><SwapHorizontalCircleIcon fontSize="large" /></Divider> `

const LeftPanel = ({ state, width }) => {
    const [files, setFiles] = useState([])
    const [treeData, setTreeData] = useState([])
    const [fileOrDir, setFileOrDir] = useState("file")

    const handleSelection = (event) => {
        // virheilmoitus jos yrittää lähettää tyhjän kansion
        // tai jos treeDatan joukossa on dataSet jossa on jo sama name kuin lisättävässä hakemistossa

        const fileArray = Array.from(event.target.files)

        let relPaths = fileArray.map(file => {
            const relPath = file.webkitRelativePath
            return relPath ? relPath : file.name
        })

        const trees = constructFileTreeData(relPaths)

        setTreeData(treeData.concat(trees))
        setFiles(files.concat(fileArray))
    }

    const handleRadioToggle = (event) => {
        setFileOrDir(event.target.value)
    }

    const fileCount = () => {
        console.log("files ", files)
    }

    const Files = () => (
        <ul style={{
            listStyle: "none",
        }}>
            {treeData.map(dataSet =>
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
    )

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
                            onChange={handleSelection}
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
                            onChange={handleSelection}
                            hidden
                        />
                        Directory
                    </Button>
                </Grid>
                <Grid item>
                    <FormControl variant="standard">
                        <FormLabel>File or directory?</FormLabel>
                        <RadioGroup value={fileOrDir}>
                            <FormControlLabel value="file" control={<Radio />} label={<InsertDriveFileOutlinedIcon />} />
                            <FormControlLabel value="dir" control={<Radio />} label={<FolderOutlinedIcon />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Files />
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