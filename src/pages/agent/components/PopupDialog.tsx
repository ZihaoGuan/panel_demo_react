import React from "react";

import style from "./PopupDialog.module.sass";

function PopupDialog(props: any) {
  return (
    <div
      className={`${style["popup-window"]} white-bg ${
        style[props.show ? "show" : ""]
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
          //   v-model="value"
          placeholder="Input Value"
        />
      </div>
      <div className={`${style["row"]}`}>
        <div
          className={`${style["btn-square"]} ${style["btn"]} ${style["btn-blue"]} ${style["btn-add-resources"]}`}
          // @click="addResources(id, value)"
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
