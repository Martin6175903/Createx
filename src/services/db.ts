// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDbmz4DJl9kHxI6ZqOO1csCruLtgGXLTWQ",
    authDomain: "martin-811c6.firebaseapp.com",
    projectId: "martin-811c6",
    storageBucket: "martin-811c6.firebasestorage.app",
    messagingSenderId: "534361608704",
    appId: "1:534361608704:web:7c34c25afccf013b183ee5",
    measurementId: "G-CCHMDGNXDZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();