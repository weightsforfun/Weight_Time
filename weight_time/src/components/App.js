import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import AppRouter from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
    </>
  );
}

export default App;
