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
            <div className="main_dis" style={{ height: "900px" }}>
                <div className="logo_div" style={{ position: "fixed", top: "0px" }}>
                    <img className="logo" src="img/logo_w.png" alt="error" />
                    <div className="m_nav">
                        <Navigation isLoggedIn={isLoggedIn} />
                    </div>
                </div>
                <div style={{ border: "2px solid red", paddingTop: "280px" }}>
                    <div className="align_button">
                        <button name="google" onClick={onSocialClick} className="login_way"><img src="img/google_icon.png" style={{ width: "30px", height: "30px", marginRight: "20px" }} />Continue with Google</button>
                    </div>
                    <div style={{ marginTop: "50px" }} className="align_button">
                        <button name="facebook" onClick={onSocialClick} className="login_way"><img src="img/facebook_icon.png" style={{ width: "30px", height: "30px", marginRight: "20px" }} />Continue with FaceBook</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Auth;