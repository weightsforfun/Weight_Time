import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";


const Home = ({ isLoggedIn }) => {
  return (
    <div className="Home main_dis">
      <h1 className="mar_auto">Weight Time</h1>
      <button type="button" className="log_in">Primary</button>
      {isLoggedIn ? <h1>반가워요 신찬규님</h1> : <h1>로그인해 시발</h1>}
      <div className="m_nav">
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
};
export default Home;
