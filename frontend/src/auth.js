import { createContext, useEffect, useState } from "react"

import { getAuth, onAuthStateChanged } from "firebase/auth"

import firebaseApp from "./firebaseApp"

const auth = getAuth(firebaseApp)

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(auth.currentUser)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    }, [])

    return (
        <UserContext.Provider value = {{ user }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }