import React from "react";
import { auth } from "../firebase";
import {
    FacebookAuthProvider,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import Navigation from "../components/Navigation";
const Auth = ({ isLoggedIn }) => {
    const onSocialClick = async (event) => {
        const { target: { name } } = event;
        let provider;
        if (name === "google") {
            provider = new GoogleAuthProvider();
        } else if (name === "facebook") {
            provider = new FacebookAuthProvider();
        }
        const data = await signInWithPopup(auth, provider);
        console.log(data);
    };

    return (
        <div>
            <div className="main_dis" style={{paddingBottom: "0px", paddingTop: "0px"}}>
                <div className="logo_div" style={{ position: "fixed", top: "0px" }}>
                    <img className="logo" src="img/logo_w.png" alt="error" />
                    <div className="m_nav">
                        <Navigation isLoggedIn={isLoggedIn} />
                    </div>
                </div>
                <div className="authContainer">
                    <img src="img/auth_logo.png" alt="error" style={{padding: "0px 0px 15px 0px"}}/>
                    <form className="container">
                        <input className="authInput" name="email" type="text" placeholder="Email"/>
                        <input className="authInput" name="password" type="password" placeholder="Password"/>
                        <input className="authInput authSubmit" type="submit" value="Log In"/>
                    </form>
                    <span className="authSwitch">Create Account</span>
                    <div className="authBtns">
                        <button name="google" onClick={onSocialClick} className="authBtn"><img src="img/google_icon.png" alt="error" style={{width:"15px"}}/>  Continue with Google</button>
                        <button name="facebook" onClick={onSocialClick} className="authBtn"><img src="img/facebook_icon.png" alt="error" style={{width:"15px"}}/> Continue with FaceBook</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Auth;