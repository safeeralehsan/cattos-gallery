// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9T18YggyUa_NppnNSoztwGUmiYn0D0ZY",
  authDomain: "cattos-app.firebaseapp.com",
  projectId: "cattos-app",
  storageBucket: "cattos-app.appspot.com",
  messagingSenderId: "683559561084",
  appId: "1:683559561084:web:1e163e10f93069d5ba66f9",
  measurementId: "G-0X8JM4HZWM",
  databaseURL: "https://cattos-app-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

//User Signup
export const onSubmitCreateUser = async (data) => {
    let user = null;
    let errorCode = null;
    let errorMessage = null;
    await createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(async (userCredential) => {
        // Signed in 
        user = userCredential.user;
        await updateProfile(auth.currentUser, {
            displayName: data.displayName
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            console.log(error);
          });     
    })
    .catch((error) => {
        errorCode = error.code;
        errorMessage = error.message;
        // console.log(errorMessage)
        // ..
    });
    return Promise.resolve([user, errorCode, errorMessage]);
}

//User Login
export const onSubmitSignInUser = async (data) => {
    let user = null;
    let errorCode = null;
    let errorMessage = null;
    await signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
        // Signed in 
        user = userCredential.user;
        // ...
    })
    .catch((error) => {
        errorCode = error.code;
        errorMessage = error.message;
    });
    return Promise.resolve([user, errorCode, errorMessage]);
    
}

//User signout
export const onSignout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}