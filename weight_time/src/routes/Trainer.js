import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Trainer = ({ isLoggedIn }) => {
  return (
    <div className="main_dis">
      <div className="logo_div" style={{ position: "fixed", top: "0px" }}>
        <img className="logo" src="img/logo_w.png" alt="error" />
        <button type="button" className="log_in">
          {isLoggedIn ?
          <Link to={"/"} className="login_font">LogOut</Link>:
          <Link to={"/Auth"} className="login_font">LogIn</Link>
          }
          </button>
      </div>
      <div>
        {/* <div style={{ backgroundColor: "#ffffff", textAlign: "center" }}>
                    <img src="img/trainer_b.png" />
                    <span className="mar_auto">트레이너</span>
                    <img src="img/trainer_b.png" />
                </div> */}
        <div style={{ paddingTop: "30px" }}>
          <img src="img/trainer_list1_b.png" alt="error" />
        </div>
        <div className="trainer_div">
          <img src="img/trainer_list2_b.png" alt="error" />
        </div>
        <div className="trainer_div">
          <img src="img/trainer_list3_b.png" alt="error" />
        </div>
        <div className="trainer_div">
          <img src="img/trainer_list4_b.png" alt="error" />
        </div>
        <div className="trainer_div">
          <img src="img/trainer_list5_b.png" alt="error" />
        </div>
      </div>
      <div className="m_nav">
        <Navigation isLoggedIn={isLoggedIn} />
      </div>

    </div>
  );
};
export default Trainer;
