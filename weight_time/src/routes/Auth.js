import React from "react";
import { auth } from "../firebase";
import {
    FacebookAuthProvider,
    GoogleAuthProvider,
    signInWithPopup
    } from "firebase/auth";
const Auth = () => {
    const onSocialClick = async (event) => {
        const {target: { name }} = event;
        let provider;
        if (name === "google") {
            provider = new GoogleAuthProvider();
        } else if (name === "facebook") {
            provider = new FacebookAuthProvider();
        }
        const data = await signInWithPopup(auth, provider);
        console.log(data);
    };
    
    return(
            <div>
                <button name="google" onClick={onSocialClick}>Continue with Google</button>
                <button name="facebook" onClick={onSocialClick}>Continue with FaceBook</button>
            </div>
    )
}

export default Auth;