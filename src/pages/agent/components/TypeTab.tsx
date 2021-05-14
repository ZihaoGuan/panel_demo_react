import React from "react";
import style from "./styles/TypeTab.module.sass";

const TypeTab: React.FC<{ onClick: Function; active: Boolean; type: string }> =
  ({ onClick, active, type }) => {
    return (
      <div
        onClick={() => onClick()}
        className={`${style["type-tab"]} ${active ? style["active"] : ""} `}
      >
        {type}
      </div>
    );
  };

export default TypeTab;
