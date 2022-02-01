import { createContext, useEffect, useState } from "react"

import { onAuthStateChanged } from "firebase/auth"

import { auth } from "./firebaseApp"

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