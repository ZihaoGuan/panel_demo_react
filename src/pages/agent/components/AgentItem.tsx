import React from "react";

import style from "./styles/AgentItem.module.sass";
import "../../../assets/font-icons/fonts.css";

import OsIcon from "./OsIcon";
import PopupDialog from "./PopupDialog";

const AgentItem: React.FC<{
  agent: IAgent;
  handleShowDialog: Function;
  handleAddResources: Function;
  dialogActive: number | null;
  handleDeleteResource: Function;
}> = ({
  agent,
  handleShowDialog,
  handleAddResources,
  handleDeleteResource,
  dialogActive,
}) => {
  const { status } = agent;
  return (
    <div className={`${style["item"]} ${style[agent.status]} white-bg`}>
      <OsIcon os={agent.os} />
      <div className={`${style["column"]}`}>
        <div className={`${style["row"]} ${style["row-1"]}`}>
          <div className={`light-cyan-text`}>
            <i className={`icomoon icon-desktop i-16`}></i>
            {agent.name}
          </div>
          <div className={`${style[status]} ${style["status"]} white-text `}>
            {agent.status}
          </div>
          <div className={style["ip"]}>
            <i className={`icomoon icon-info i-16`}></i>
            {agent.ip}
          </div>
          <div className={style["location"]}>
            <i className={`icomoon icon-folder i-16`}></i>
            {agent.location}
          </div>
        </div>
        <div className={`${style["row"]} ${style["row-2"]}`}>
          <div
            className={`${style["btn-square"]} ${style["btn-add"]}  ${style["popup"]} ${style["btn-blue"]}`}
          >
            <i
              className={`icomoon icon-plus i-16 ${style["btn"]}`}
              onClick={() => handleShowDialog(agent.id)}
            ></i>
            <PopupDialog
              show={agent.id === dialogActive}
              handleCloseDialog={handleShowDialog}
              handleAddResources={handleAddResources}
              id={agent.id}
            />
          </div>
          {agent.resources.map((res: string) => (
            <div
              key={res}
              className={`${style["btn-square"]} ${style["btn-delete"]}`}
            >
              {res}
              <i
                className={`icomoon icon-trash i-16 ${style["btn"]}`}
                onClick={() => handleDeleteResource(agent.id, res)}
              ></i>
            </div>
          ))}
          {agent.status === "building" && (
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
};

export default AgentItem;
