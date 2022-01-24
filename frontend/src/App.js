import { Route, Routes } from "react-router-dom"

import Layout from "./Layout"
import ReviewTask from "./pages/ReviewTask"
import Tasks from "./pages/Tasks"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="test" element={<ReviewTask />} />
                <Route path="tasks" element={<Tasks />} />
            </Route>
        </Routes>
    )
}

export default App