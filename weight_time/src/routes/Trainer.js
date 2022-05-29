import React from "react";
import Navigation from "../components/Navigation";

const Trainer = ({isLoggedIn}) => {
    return (
        <div className="main_dis">
            <div className="logo_div">
                <img className="logo" src="img/logo_w.png" />
            </div>
            <div>
                {/* <div style={{ backgroundColor: "#ffffff", textAlign: "center" }}>
                    <img src="img/trainer_b.png" />
                    <span className="mar_auto">트레이너</span>
                    <img src="img/trainer_b.png" />
                </div> */}
                <div style={{ paddingTop: "30px" }}>
                    <img src="img/trainer_list1_b.png" />
                </div>
                <div className="trainer_div">
                    <img src="img/trainer_list2_b.png" />
                </div>
                <div className="trainer_div">
                    <img src="img/trainer_list3_b.png" />
                </div>
                <div className="trainer_div">
                    <img src="img/trainer_list4_b.png" />
                </div>
                <div className="trainer_div">
                    <img src="img/trainer_list5_b.png" />
                </div>
            </div>
            <div className="m_nav">
                <Navigation isLoggedIn={isLoggedIn} />
            </div>
        </div>

    );
};
export default Trainer;
