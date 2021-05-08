import React from "react";

import style from "./AgentItem.module.sass";
import "../../../assets/font-icons/fonts.css";

import OsIcon from "./OsIcon";
import PopupDialog from "./PopupDialog";

function AgentItem(props: any) {
  const { status } = props.agent;
  return (
    <div className={`${style["item"]} ${style[props.agent.status]} white-bg`}>
      <OsIcon os={props.agent.os} />
      <div className={`${style["column"]}`}>
        <div className={`${style["row"]} ${style["row-1"]}`}>
          <div className={`light-cyan-text`}>
            <i className={`icomoon icon-desktop i-16`}></i>
            {props.agent.name}
          </div>
          <div className={`${style[status]} ${style["status"]} white-text `}>
            {props.agent.status}
          </div>
          <div className={style["ip"]}>
            <i className={`icomoon icon-info i-16`}></i>
            {props.agent.ip}
          </div>
          <div className={style["location"]}>
            <i className={`icomoon icon-folder i-16`}></i>
            {props.agent.location}
          </div>
        </div>
        <div className={`${style["row"]} ${style["row-2"]}`}>
          <div
            className={`${style["btn-square"]} ${style["btn-add"]}  ${style["popup"]} ${style["btn-blue"]}`}
          >
            <i
              className={`icomoon icon-plus i-16 ${style["btn"]}`}
              onClick={() => props.handleShowDialog(props.agent.id)}
            ></i>
            <PopupDialog
              show={props.agent.id === props.dialogActive}
              handleCloseDialog={props.handleShowDialog}
              // :id="agent.id"
            />
          </div>
          {props.agent.resources.map((res: string) => (
            <div
              key={res}
              className={`${style["btn-square"]} ${style["btn-delete"]}`}
            >
              {res}
              <i
                className={`icomoon icon-trash i-16 ${style["btn"]}`}
                // @click="
                //   deleteResourcesByAgentId({ id: agent.id, resource: resource })
                // "
              ></i>
            </div>
          ))}
          {props.agent.status === "building" && (
            <div
              v-if="agent.status === 'building'"
              className={`${style["btn-square"]} ${style["rightmost"]} ${style["btn-blue"]} ${style["btn"]}`}
            >
              <i className={`icomoon icon-deny white-text`}></i>
              Deny
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AgentItem;
