import React from "react";

import style from "./OsIcon.module.sass";

import windows from "../../../assets/os-icons/windows.png";
import ubuntu from "../../../assets/os-icons/ubuntu.png";
import suse from "../../../assets/os-icons/suse.png";
import debian from "../../../assets/os-icons/debin.png";
import centos from "../../../assets/os-icons/cent_os.png";

function OsIcon(props: any) {
  switch (props.os) {
    case "windows":
      return <img className={`${style['os-icon']}`} src={windows} alt="" />;
    case "ubuntu":
      return <img className={`${style['os-icon']}`} src={ubuntu} alt="" />;
    case "suse":
      return <img className={`${style['os-icon']}`} src={suse} alt="" />;
    case "debian":
      return <img className={`${style['os-icon']}`} src={debian} alt="" />;
    case "centos":
      return <img className={`${style['os-icon']}`} src={centos} alt="" />;
    default:
      return <img className={`${style['os-icon']}`} src="" alt="" />;
  }
}
export default OsIcon;
