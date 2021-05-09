import React from "react";
import style from "./styles/TypeTab.module.sass";

function TypeTab(props: any) {
  return (
    <div
      onClick={props.onClick}
      className={`${style["type-tab"]} ${props.active ? style["active"] : ""} `}
    >
      {props.type}
    </div>
  );
}

export default TypeTab;
