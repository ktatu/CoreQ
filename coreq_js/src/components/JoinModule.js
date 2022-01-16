import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

const JoinModule = ({ setAlertContext }) => {
    const [moduleKeyText, setModuleKeyText] = useState("")

    const handleTextChange = (event) => {
        setModuleKeyText(event.target.value)
    }

    const submitHandler = () => {
        if (moduleKeyText.trim().length === 0) {
            return
        }

        setAlertContext({ severity: "success", message: `Joined module "${moduleKeyText}"` })
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