const functions = require("firebase-functions")
const admin = require("firebase-admin")

admin.initializeApp()

const db = admin.firestore()

// https://firebase.google.com/docs/functions/write-firebase-functions

exports.onNewUser = functions
    .auth
        .user()
        .onCreate(async (user, context) => {
            await db.collection("users").doc(user.uid).set({
                email: user.email
            })
})
