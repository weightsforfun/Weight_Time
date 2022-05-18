import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";

import { useState } from "react";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  if (isLoggedIn)
    return (
      <div className="Home">
        <h1>home</h1>
        <ul>
          <li>
            <Link to={"/Partner"}>파트너</Link>
          </li>
          <li>
            <Link to={"/Timetable"}>시간표</Link>
          </li>
          <li>
            <Link to={"/Trainer"}>트레이너</Link>
          </li>
        </ul>
      </div>
    );
  else {
    return <h1>auth</h1>;
  }
};
export default Home;
