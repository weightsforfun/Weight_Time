import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../routes/Home";
import Partner from "../routes/Partner";
import Timetable from "../routes/Timetable";
import Trainer from "../routes/Trainer";
import { useState } from "react";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="/Partner" element={<Partner />} />
        <Route path="/Timetable" element={<Timetable />} />
        <Route path="/Trainer" element={<Trainer />} />
      </Routes>
    </Router>
  );
}

export default App;
