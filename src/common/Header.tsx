import React from "react";
import style from "./Header.module.sass";
import "../assets/font-icons/fonts.css";
import "../styles/variables.sass";
import "../app.sass";

import logo from "../assets/logo/logo.svg";
import avatar from "../assets/logo/avatar.jpg";

function Header() {
  return (
    <header className="white-bg">
      <div className="wrapper">
        <div className={`${style["container"]}`}>
          <div
            className={`${style["avatar"]} ${style["side"]} ${style["bread"]}`}
            //  @click="showNavBar"
          >
            <i className="icomoon icon-navicon"> </i>
          </div>
          <div className={`${style["logo"]}`}>
            <img src={logo} alt="" />
          </div>
          <div
            className={`${style["avatar"]} ${style["side"]}`}
            //   :className="{ show: showDropdown }"
            //   @click="showDropdown = !showDropdown"
          >
            <img src={avatar} alt="" />
            <i className="icomoon icon-angle-down"> </i>
            <ul className={`${style["dropdown"]}`}>
              <li>
                <a href="/">
                  <i className="icomoon icon-id-card"></i>
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="icomoon icon-sign-in"></i>
                  <span>Sign Out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
