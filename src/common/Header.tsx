import React, { useState, useEffect } from "react";
import style from "./Header.module.sass";
import "../assets/font-icons/fonts.css";

import logo from "../assets/logo/logo.svg";
import avatar from "../assets/logo/avatar.jpg";

const Header: React.FC<{ handleShowNavbar: Function }> = ({
  handleShowNavbar,
}) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const handleScroll = () => {
    setIsShowDropdown(false);
  };

  useEffect(() => {
    // Anything in here is fired on component mount.
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Anything in here is fired on component unmount.
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="white-bg">
      <div className="wrapper">
        <div className={`${style["container"]}`}>
          <div
            className={`${style["avatar"]} ${style["side"]} ${style["bread"]}`}
            onClick={handleShowNavbar()}
          >
            <i className="icomoon icon-navicon"> </i>
          </div>
          <div className={`${style["logo"]}`}>
            <img src={logo} alt="" />
          </div>
          <div
            className={`${style["avatar"]} ${style["side"]} ${
              isShowDropdown ? style["show"] : ""
            }`}
            onClick={() => {
              setIsShowDropdown(!isShowDropdown);
            }}
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
};

export default Header;
