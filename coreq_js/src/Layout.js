import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

import NavBar from "./components/NavBar"

import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"

import isEmpty from "lodash.isempty"

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={5} ref={ref} variant="filled" {...props} />
})

const Layout = () => {
    const position = { vertical: "top", horizontal: "center" }
    const [isAlertOpen, setAlertOpen] = useState(false)
    const [alertContext, setAlertContext] = useState({})

    useEffect(() => {
        if (isEmpty(alertContext)) {
            return
        }
        console.log("------")
        setAlertOpen(true)
    }, [alertContext])

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return
        }
        setAlertOpen(false)
    }

    return (
        <div>
            <NavBar setAlertContext={setAlertContext}/>

            <Snackbar 
                anchorOrigin={{ ...position }} 
                open={isAlertOpen} 
                autoHideDuration={6000} 
                onClose={handleClose}
            >
                <Alert 
                    onClose={handleClose} 
                    severity={alertContext.severity} 
                    sx={{ width: "100%" }}
                >
                    {alertContext.message}
                </Alert>
            </Snackbar>
            <Outlet />
            <hr />
        </div>
    )
}

export default Layout