import React from "react"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })

const Feedback = ({ message, severity, isOpen, setOpen }) => {
    const position = { vertical: "top", horizontal: "center" }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return
        }
        setOpen(false)
    }

    // refaktorointi- propsit käyttöön kuten Alertissa yläpuolella
    return (
        <Snackbar 
            anchorOrigin={{ ...position }} 
            open={isOpen} 
            autoHideDuration={5000} 
            onClose={handleClose}
        >
            <Alert 
                onClose={handleClose} 
                severity={severity} 
                sx={{ width: "100%" }}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}

export default Feedback
