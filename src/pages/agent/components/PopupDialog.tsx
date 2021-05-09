import React, { useState } from "react";

import style from "./styles/PopupDialog.module.sass";

function PopupDialog(props: any) {
  const [value, setValue] = useState<string>("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <div
      className={`${style["popup-window"]} white-bg ${
        props.show ? style["show"] : ""
      }`}
    >
      <div
        className={`${style["btn-close"]} ${style["btn"]}`}
        onClick={() => props.handleCloseDialog(null)}
      >
        <i className="icomoon icon-close"></i>
      </div>
      <div className={`${style["row"]}`}>
        <p>Seperate multiple resource name with commas</p>
      </div>
      <div className={`${style["row"]}`}>
        <input
          type="text"
          value={value}
          placeholder="Input Value"
          onChange={handleChange}
        />
      </div>
      <div className={`${style["row"]}`}>
        <div
          className={`${style["btn-square"]} ${style["btn"]} ${style["btn-blue"]} ${style["btn-add-resources"]}`}
          onClick={() => {
            props.handleAddResources(props.id, value);
            setValue("");
            props.handleCloseDialog(null);
          }}
        >
          Add Resources
        </div>
        <div
          className={`${style["btn-square"]} ${style["btn"]} ${style["btn-gray"]} ${style["btn-cancel"]}`}
          onClick={() => props.handleCloseDialog(null)}
        >
          Cancel
        </div>
      </div>
    </div>
  );
}

export default PopupDialog;
