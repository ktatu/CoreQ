import Button from "@mui/material/Button"
import github_logo from "../../assets/github_logo.png"

import { getAuth, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth"

const auth = getAuth()

const Login = ({ isSignedIn, setUser }) => {

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
            
                // The signed-in user info.
                const user = result.user
        
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

    const signOut = () => {
        const auth = getAuth()

        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        })
    }

    const LoginButton = ({ label, onClick }) => {
        return (
            <Button
                variant="contained"
                disableElevation
                endIcon={<img src={github_logo} />}
                onClick={onClick}
            >
                {label}
            </Button>
        )
    }

    return isSignedIn 
        ? <LoginButton label="Sign out" onClick={signOut} /> 
        : <LoginButton label="Sign in" onClick={signIn} />
}

export default Login