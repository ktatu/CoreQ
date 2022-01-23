import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./components/layout/NavBar"
import isEmpty from "lodash/isEmpty"
import AlertFeedback from "./components/AlertFeedback"

const Layout = () => {
    const [isAlertOpen, setAlertOpen] = useState(false)
    const [alertContext, setAlertContext] = useState({})

    useEffect(() => {
        // prevents useEffect from firing on first render
        if (isEmpty(alertContext)) {
            return
        }
        setAlertOpen(true)
    }, [alertContext])

    return (
        <div>
            <NavBar setAlertContext={setAlertContext}/>

            <AlertFeedback
                message={alertContext.message}
                severity={alertContext.severity}
                isOpen={isAlertOpen}
                setOpen={setAlertOpen}
            />

            <hr />

            <Outlet />
        </div>
    )
}

export default Layout