import React from "react";

import style from "./Navbar.module.sass";
import "../styles/variables.sass";
import "../app.sass";

function Navbar(props: any) {
  return (
    <nav
      className={`slategray-bg ${style[props.show && "show"]}`}
    >
      <div
        className={`${style["btn-close"]}`}
        //    @click="closeNavBar"
      >
        <i className="icomoon icon-close"></i>
      </div>
      <div className={`${style["tab-container"]}`}>
        <a href="/" className={`${style["tab"]}`}>
          <i className="icomoon icon-dashboard"></i>
          <span>DASHBOARD</span>
        </a>
        <a href="/" className={`${style["tab"]}`}>
          <i className="icomoon icon-sitemap"></i>
          <span>AGENT</span>
        </a>
        <a href="/" className={`${style["tab"]}`}>
          <i className="icomoon icon-boat"></i>
          <span>MY CRUISE</span>
        </a>
        <a href="/" className={`${style["tab"]}`}>
          <i className="icomoon icon-life-bouy"></i>
          <span>HELP</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
