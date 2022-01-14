import React from "react"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })

const Feedback = ({ message, severity, handleClose }) => {
    const position = { vertical: "top", horizontal: "center" }

    return (
        <Snackbar
            anchorOrigin={{ ...position }}
            open={open}
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
