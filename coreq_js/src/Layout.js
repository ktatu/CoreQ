import React, { useEffect } from "react"
import { Link, Outlet } from "react-router-dom"

import NavBar from "./components/NavBar"

// todo
// modules that user is part of are fetched and set into useState
// this gets passed to the NavBar where they are placed into the menu
// need more backend stuff before implementing (login, users, ...)
/*
useEffect(() => {

}, [])
*/

const Layout = () => {
    return (
        <div>
            <NavBar />
            <hr />
            <Outlet />
        </div>
    )
}

export default Layout