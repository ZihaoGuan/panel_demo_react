import React from "react";

import style from "./Navbar.module.sass";
import { NavLink } from "react-router-dom";

const Navbar: React.FC<{ show: Boolean; handleShowNavbar: Function }> = ({
  handleShowNavbar,
  show,
}) => {
  return (
    <nav className={`slategray-bg ${show ? style["show"] : ""}`}>
      <div
        className={`${style["btn-close"]}`}
        onClick={handleShowNavbar()}
      >
        <i className="icomoon icon-close"></i>
      </div>
      <div className={`${style["tab-container"]}`}>
        <NavLink
          exact
          to="/"
          className={`${style["tab"]}`}
          activeClassName={`${style["active"]}`}
        >
          <i className="icomoon icon-dashboard"></i>
          <span>DASHBOARD</span>
        </NavLink>
        <NavLink
          exact
          to="/agent"
          className={`${style["tab"]}`}
          activeClassName={`${style["active"]}`}
        >
          <i className="icomoon icon-sitemap"></i>
          <span>AGENT</span>
        </NavLink>
        <NavLink
          exact
          to="/cruise"
          className={`${style["tab"]}`}
          activeClassName={`${style["active"]}`}
        >
          <i className="icomoon icon-boat"></i>
          <span>MY CRUISE</span>
        </NavLink>
        <NavLink
          exact
          to="/help"
          className={`${style["tab"]}`}
          activeClassName={`${style["active"]}`}
        >
          <i className="icomoon icon-life-bouy"></i>
          <span>HELP</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
