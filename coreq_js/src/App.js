import React from "react"
import { Route, Routes } from "react-router-dom"

import Layout from "./Layout"
import ReviewTask from "./pages/ReviewTask"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/test" element={<ReviewTask />} />
            </Route>
        </Routes>
    )
}

export default App