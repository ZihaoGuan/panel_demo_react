import React from "react";
import Agent from "./pages/agent/Agent";
import Footer from "./common/Footer";

import "./app.sass";

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
