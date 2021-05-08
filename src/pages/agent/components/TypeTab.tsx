import React from "react";
import style from "./TypeTab.module.sass";

function TypeTab(props: any) {
  return (
    <div className={`${style["type-tab"]} ${style[props.active && "active"]} `}>
      {props.type}
    </div>
  );
}

export default TypeTab;
