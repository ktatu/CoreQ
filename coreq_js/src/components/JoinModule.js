import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

const JoinModule = ({ setFeedbackProps }) => {
    const [moduleKeyText, setModuleKeyText] = useState("")

    const handleTextChange = (event) => {
        setModuleKeyText(event.target.value)
    }

    const submitHandler = () => {
        console.log("-------")
        if (moduleKeyText.trim().length === 0) {
            return
        }

        setFeedbackProps({ visible: true, msg: "Succesfully joined", severity: "success" })
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