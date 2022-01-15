import React from "react"
import { Route, Routes } from "react-router-dom"

import Layout from "./Layout"
import ReviewTask from "./pages/ReviewTask"

import Testi from "./components/Testi"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="test" element={<ReviewTask />} />
                <Route path="123" element={<Testi />} />
            </Route>
        </Routes>
    )
}

export default App