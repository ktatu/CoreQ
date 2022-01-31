import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth"

import { useState } from "react"

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
const provider = new GithubAuthProvider()

const auth = getAuth(firebase)


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="test" element={<ReviewTask />} />
                <Route path="tasks" element={<Tasks />} />
                <Route path="logintest" element={<Login />} />
            </Route>
        </Routes>
    )
}

const Login = () => {

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
            
                // The signed-in user info.
                const user = result.user
        
                console.log("user ", result.user)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code
                const errorMessage = error.message
                // The email of the user's account used.
                const email = error.email
                // The AuthCredential type that was used.
                const credential = GithubAuthProvider.credentialFromError(error)
                // ...
            })
    }

    return (
        <button onClick={signIn}>Sign in</button>
    )
}

export default App