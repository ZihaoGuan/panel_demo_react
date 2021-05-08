import React, { useState } from "react";
import Agent from "./pages/agent/Agent";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Navbar from "./common/Navbar";

import "./app.sass";

function App() {
  const [isShowNavbar, setIsShowNavbar] = useState(false);

  function showNavbar() {
    setIsShowNavbar(true);
  }

  function closeNavbar() {
    setIsShowNavbar(false);
  }

  return (
    <>
      <Header handleShowNavbar={() => showNavbar} />
      <div className="wrapper">
        <Navbar show={isShowNavbar} handleShowNavbar={() => closeNavbar} />
        <main>
          <Agent />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
