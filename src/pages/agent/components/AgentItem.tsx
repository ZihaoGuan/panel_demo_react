import React from "react";

import style from "./AgentItem.module.sass";
import "../../../assets/font-icons/fonts.css";

class AgentItem extends React.Component {
  render() {
      //   return <div className={`${style['item']} ${style['white-bg']}`} :class="agent.status">
      //   <OsIcon :os="agent.os" />
      //   <div className={`${style['column']}`}>
      //     <div className={`${style['row']} ${style['row-1']}`}>
      //       <div className="name light-cyan-text">
      //         <i className={`icomoon icon-desktop ${style['i-16']}`}></i>
      //         {{ agent.name }}
      //       </div>
      //       <div :class="agent.status" className="status white-text">
      //         {{ agent.status }}
      //       </div>
      //       <div className={`${style['ip']}`}>
      //         <i className="icomoon icon-info i-16"></i>
      //         {{ agent.ip }}
      //       </div>
      //       <div className="location">
      //         <i className="icomoon icon-folder i-16"></i>
      //         {{ agent.location }}
      //       </div>
      //     </div>
      //     <div className="row row-2">
      //       <div className="btn-square btn-add popup btn-blue">
      //         <i
      //           className="icomoon icon-plus i-16 btn"
      //           @click="showAgentListPopUpDialog(agent.id)"
      //         ></i>
      //         <PopupDialog
      //           :show="agent.id == agentShowPopUp"
      //           :id="agent.id"
      //         />
      //       </div>
      //       <div
      //         v-for="resource in agent.resources"
      //         :key="resource"
      //         className="btn-square btn-delete"
      //       >
      //         {{ resource }}
      //         <i
      //           className="icomoon icon-trash i-16 btn"
      //           @click="
      //             deleteResourcesByAgentId({ id: agent.id, resource: resource })
      //           "
      //         ></i>
      //       </div>
      //       <div
      //         v-if="agent.status === 'building'"
      //         className="btn-square rightmost btn-blue btn"
      //       >
      //         <i className="icomoon icon-deny white-text"></i>
      //         Deny
      //       </div>
      //     </div>
      //   </div>
      // </div>;
     return <></>;
  }
}

export default AgentItem;
