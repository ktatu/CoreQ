import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Feedback from "./Feedback"

const JoinModule = () => {
    const [moduleKeyText, setModuleKeyText] = useState("")

    const handleTextChange = (event) => {
        setModuleKeyText(event.target.value)
    }

    const submitHandler = () => {
        console.log("-------")
        if (moduleKeyText.trim().length === 0) {
            return
        }
    }

    const JoinButton = () => {
        return (
            <Button 
                variant="contained" 
                onClick={submitHandler}
            >
                Join
            </Button>
        )
    }

    return (
        <div>
            <TextField 
                value={moduleKeyText} 
                onChange={handleTextChange} 
                label="Module key" 
                variant="outlined" 
                InputProps={{endAdornment: <JoinButton />}}
            />
        </div>
    );
}

export default JoinModule