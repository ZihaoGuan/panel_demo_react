import React, { useState } from "react";
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

  function showNavbar() {
    setIsShowNavbar(true);
  }

  function closeNavbar() {
    setIsShowNavbar(false);
  }

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
    </Router>
  );
}

export default App;
