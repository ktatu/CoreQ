import React, { useState, useEffect } from "react"
import { useParams,  } from "react-router-dom"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import Button from "@mui/material/Button"

import Code from "../components/Code"

import orderBy from "lodash.orderby"

const testCode = `<Divider orientation="vertical"><SwapHorizontalCircleIcon fontSize="large" /></Divider> `

const LeftPanel = ({ state, width }) => {
    const [files, setFiles] = useState([])

    useEffect(() => {
        orderBy(files, "webkitRelativePath", "desc")
    }, [files])

    const onFileChange = (event) => {
        let fileArray = Array.from(event.target.files)
        fileArray[0].directory = "test"
        setFiles(files.concat(fileArray))
    }
    const onDirChange = (event) => {

        let fileArray = Array.from(event.target.files)
        setFiles(files.concat(fileArray))
        /*
        files.forEach(file => {
            console.log("----")
            console.log("name ", file.name)
            console.log("rel path ", webkitRelativePath)
            console.log("----")
        })*/
    }

    const fileCount = () => {
        console.log("files ", files)
    }

    if (state === "upload") {
        return (
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
        )
    }
}

const Tasks = () => {
    // ehkä reducer tähän tapaan tilantarkistusta varten
    // https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
    const [progress, setProgress] = useState("upload")
    const [leftPanelWidth, setLeftPanelWidth] = useState("30%")

    console.log("render Tasks")

    return (
        <Grid container sx={{
            bgcolor: "red",
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
                width: "60%"
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