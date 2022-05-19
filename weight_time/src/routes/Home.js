import React from "react";
import {Link} from "react-router-dom";
import Navigation from "../components/Navigation";

const Home = ({isLoggedIn}) => {
    return (
      <div className="Home">
        <h1>home</h1>
        <Navigation isLoggedIn={isLoggedIn}/>
        <button> <Link to={"/Timetable"}>Check Now</Link></button>
      </div>
    );
};
export default Home;
