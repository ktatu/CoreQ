import Code from "../components/Code"
import React, { useState } from "react"
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle'
import { Box, Container, Divider, Grid } from "@mui/material"

const ReviewTask = () => {
    const [testWidth, setWidth] = useState(5)

    const testCode = `const test === 'true' ? true : false : `

    console.log("render ReviewTask")

    return (
        <Grid container sx={{
            bgcolor: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Grid item xs={6}>
                <Code language="jsx" codeStr={testCode} />
            </Grid>
            <Divider orientation="vertical"><SwapHorizontalCircleIcon fontSize="large" /></Divider>
            <Grid item>
                <Code language="jsx" codeStr={testCode} />
            </Grid>
        </Grid>
    )
}

export default ReviewTask

/*
                <Grid item xs={6}>
                    <Box
                        sx={{
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    />
                </Grid>

*/
// <Divider orientation="vertical"><SwapHorizontalCircleIcon fontSize="large" /></Divider>