import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Agent from "./pages/agent/Agent";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Navbar from "./common/Navbar";
import Home from "./pages/home/Home";
import Cruise from "./pages/cruise/Cruise";
import Help from "./pages/help/Help";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/app.global.sass";
import "./assets/font-icons/fonts.css";

function App() {
  const [isShowNavbar, setIsShowNavbar] = useState(false);

  const isCoverOn: Boolean = useSelector(
    (state: States) => state.cover.coverOn
  );

  function showNavbar() {
    setIsShowNavbar(true);
  }

  function closeNavbar() {
    setIsShowNavbar(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", closeNavbar);
    return () => {
      window.removeEventListener("scroll", closeNavbar);
    };
  }, []);

  return (
    <Router basename="/Cruise/ReactJs">
      <Header handleShowNavbar={() => showNavbar} />
      <div className="wrapper">
        <Navbar show={isShowNavbar} handleShowNavbar={() => closeNavbar} />
        <main>
          <Switch>
            <Route path="/help">
              <Help />
            </Route>
            <Route path="/cruise">
              <Cruise />
            </Route>
            <Route path="/agent">
              <Agent />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
      <Footer />
      <div className={`${isCoverOn ? "cover" : ""}`}></div>
    </Router>
  );
}

export default App;
