import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Home = ({ isLoggedIn }) => {
  return (
    <div className="Home" class="main_dis">
      <h1 class="mar_auto">Weight Time</h1>
      <button type="button" class="log_in">Primary</button>
      <button class="mar_auto"> <Link to={"/Timetable"}>Check Now</Link></button>
      <div class="m_nav">
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
};
export default Home;
