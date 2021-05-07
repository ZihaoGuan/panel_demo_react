import React from "react";
import Agent from "./views/Agent";
import Footer from "./components/Footer";

import "./styles/index.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <main>
            <Agent />
          </main>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
