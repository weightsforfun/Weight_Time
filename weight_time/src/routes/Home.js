import React from "react";
import { Link } from "react-router-dom";

const Home = ({ isLoggedIn }) => {
  return (
    <div className="Home">
      <h1>home</h1>
      {isLoggedIn ? <h1>반가워요 신찬규님</h1> : <h1>로그인해 시발</h1>}
      <button>
        <Link to={"/TimetablePage"}>Check Now</Link>
      </button>
    </div>
  );
};
export default Home;
