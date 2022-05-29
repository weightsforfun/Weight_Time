import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Partner from "../routes/Partner";
import TimetablePage from "../routes/TimetablePage";
import Trainer from "../routes/Trainer";
import Auth from "../routes/Auth";
import { Navigate } from "react-router-dom";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route
          path="/Auth"
          element={isLoggedIn ? <Navigate to="/" replace /> : <Auth />}
        />
        <Route path="/Partner" element={<Partner />} />
        <Route
          path="/TimetablePage"
          element={
            <>
              <TimetablePage />
            </>
          }
        />
        <Route path="/Trainer" element={<Trainer />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
