import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

import { Route, Routes } from "react-router-dom"

import Layout from "./Layout"
import ReviewTask from "./pages/ReviewTask"
import Tasks from "./pages/Tasks"

const firebaseConfig = {
    apiKey: "AIzaSyDy8WeOSJObiR-oPtkplGRYOkuig6wr1yc",
    authDomain: "coreq-14308.firebaseapp.com",
    databaseURL: "https://coreq-14308-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "coreq-14308",
    storageBucket: "coreq-14308.appspot.com",
    messagingSenderId: "711455848949",
    appId: "1:711455848949:web:c10d7f1f14a09d39f7c8bc",
    measurementId: "G-NP8YFQWZYG"
}

const firebase = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebase)

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