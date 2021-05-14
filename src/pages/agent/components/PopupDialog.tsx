import React, { useState } from "react";

import style from "./styles/PopupDialog.module.sass";

const PopupDialog: React.FC<{
  show: Boolean;
  handleAddResources: Function;
  handleCloseDialog: Function;
  id: number;
}> = ({ show, handleAddResources, handleCloseDialog, id }) => {
  const [value, setValue] = useState<string>("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <div
      className={`${style["popup-window"]} white-bg ${
        show ? style["show"] : ""
      }`}
    >
      <div
        className={`${style["btn-close"]} ${style["btn"]}`}
        onClick={() => handleCloseDialog(null)}
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
            handleAddResources(id, value);
            setValue("");
            handleCloseDialog(null);
          }}
        >
          Add Resources
        </div>
        <div
          className={`${style["btn-square"]} ${style["btn"]} ${style["btn-gray"]} ${style["btn-cancel"]}`}
          onClick={() => handleCloseDialog(null)}
        >
          Cancel
        </div>
      </div>
    </div>
  );
};

export default PopupDialog;
