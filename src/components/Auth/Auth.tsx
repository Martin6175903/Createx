import {useState} from "react";
import {createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {auth, googleAuthProvider} from "@/services/db.ts";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function signIn() {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    }
    async function signInWithGoogle() {
        try {
            await signInWithPopup(auth, googleAuthProvider);
        } catch (err) {
            console.error(err);
        }
    }

    async function logOut() {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    }

    console.log(auth.currentUser)

    return (
        <div className="flex flex-col gap-3 justify-center max-w-2xl mx-auto">
            <input
                type="email"
                placeholder={"Email..."}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder={"Password..."}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}>Sign in</button>

            <button onClick={signInWithGoogle}>Sign In With Google</button>

            <button onClick={logOut}>Log Out</button>
        </div>
    );
};

export default Auth;