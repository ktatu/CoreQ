import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

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

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)

export { auth, firebaseApp }