import React, { useState, useRef, useEffect } from "react";

import style from "./styles/PopupDialog.module.sass";

const PopupDialog: React.FC<{
  handleAddResources: Function;
  handleCloseDialog: Function;
  id: number;
}> = ({  handleAddResources, handleCloseDialog, id }) => {
  const [value, setValue] = useState<string>("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const ref = useRef(null);

  const useClickOutside = (ref: any) => {
    useEffect(() => {
      function handleClickOutside(e: any) {
        if (ref.current && !ref.current.contains(e.target)) {
          handleCloseDialog(null);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const buttonClose = (
    <div
      className={`${style["btn-close"]} ${style["btn"]}`}
      onClick={() => handleCloseDialog(null)}
    >
      <i className="icomoon icon-close"></i>
    </div>
  );

  const buttonAdd = (
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
  );

  const buttonCancel = (
    <div
      className={`${style["btn-square"]} ${style["btn"]} ${style["btn-gray"]} ${style["btn-cancel"]}`}
      onClick={() => handleCloseDialog(null)}
    >
      Cancel
    </div>
  );

  useClickOutside(ref);

  return (
    <div ref={ref} className={`${style["popup-window"]} white-bg`}>
      {buttonClose}
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
        {buttonAdd}
        {buttonCancel}
      </div>
    </div>
  );
};

export default PopupDialog;
