import React from "react";

import style from "./PopupDialog.module.sass";

function PopupDialog() {
  <div
    className={`${style["popup-window"]} white-bg`}
    // :class="{ show: show }"
  >
    <div
      className={`${style["btn-close"]} ${style["btn"]}`}
      //  @click="closeAgentListPopUpDialog()"
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
        className="btn-square btn btn-blue btn-add-resources"
        // @click="addResources(id, value)"
      >
        Add Resources
      </div>
      <div
        className="btn-square btn btn-gray btn-cancel"
        // @click="closeAgentListPopUpDialog()"
      >
        Cancel
      </div>
    </div>
  </div>;
}

export default PopupDialog;
