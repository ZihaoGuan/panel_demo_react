import React from "react";
import Agent from "./pages/agent/Agent";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Navbar from "./common/Navbar";

import "./app.sass";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Navbar
        //  show={true} 
        />
        <main>
          <Agent />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
