import React, { useEffect, useState } from "react"
import { Link, Outlet, useOutlet } from "react-router-dom"

import NavBar from "./components/NavBar"

import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"

import Testi from "./components/Testi"

// todo
// modules (NOT js modules) that user is part of are fetched and set into useState
// this gets passed to the NavBar where they are placed into the menu
// need more backend stuff before implementing (login, users, ...)
/*
useEffect(() => {

}, [])
*/
// ALERTIT TÄLLE TASOLLE, KONTEKSTI LAPSIIN OUTLETIN AVULLA https://reactrouter.com/docs/en/v6/api#outlet

const TestContext = React.createContext("test")

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={5} ref={ref} variant="filled" {...props} />
})

const Layout = () => {
    const position = { vertical: "top", horizontal: "center" }
    const [open, setOpen] = useState(true)

    const [count, setCount] = useState(0)

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return
        }
        setOpen(false)
    }

    return (
        <div>
            <NavBar />

            <Snackbar 
                anchorOrigin={{ ...position }} 
                open={open} 
                autoHideDuration={6000} 
                onClose={handleClose}
            >
                <Alert 
                    onClose={handleClose} 
                    severity="success" 
                    sx={{ width: "100%" }}
                >
                    This is a success message!
                </Alert>
            </Snackbar>
            <Outlet context={{ testi: "testi"}}/>
            <hr />
        </div>
    )
}

export default Layout