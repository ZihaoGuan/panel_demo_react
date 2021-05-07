import React from "react";
import style from "../styles/Agent.module.scss";
import "../assets/font-icons/fonts.css";

function Agent() {
  return (
    <>
      <div className={style["box-container"]}>
        <div
          className={`${style["box"]} ${style["orange-bg"]} ${style["box-status"]} ${style["box-building"]}`}
        >
          <span className={style["title"]}>Building</span>
          <span className={style["number"]}>
            {/* {{ this.getAgentCountByStatus("building") }} */}
          </span>
        </div>
        <div
          className={`${style["box"]} ${style["green-bg"]} ${style["box-status"]} ${style["box-idle"]}`}
        >
          <span className={style["title"]}>Idle</span>
          <span className={style["number"]}>
            {/* {{ this.getAgentCountByStatus("idle") }} */}
          </span>
        </div>
        <div
          className={`${style["box"]} ${style["white-bg"]} ${style["box-flex"]} ${style["text-center"]}`}
        >
          <div className={style["box-column"]}>
            <span className={style["title"]}>All</span>
            <span className={style["number"]}>
              {/* {{ this.getAgentCount() }} */}
            </span>
          </div>
          <div className={style["box-column"]}>
            <span className={style["title"]}>PHYSICAL</span>
            <span className={style["number"]}>
              {/* {{ this.getAgentCountByType("physical") }} */}
            </span>
          </div>
          <div className={style["box-column"]}>
            <span className={style["title"]}>VIRTUAL</span>
            <span className={style["number"]}>
              {/* {{ this.getAgentCountByType("virtual") }} */}
            </span>
          </div>
        </div>
      </div>
      <div className={style["control-bar"]}>
        {/* <TypeTab
      :type="'All'"
      :active="tab === 'all'"
      @click.native="selectTypeTab('all')"
    />
    <TypeTab
      :type="'Physical'"
      :active="tab === 'physical'"
      @click.native="selectTypeTab('physical')"
    />
    <TypeTab
      :type="'Virtual'"
      :active="tab === 'virtual'"
      @click.native="selectTypeTab('virtual')"
    /> */}
        <div className={style["search-box-container"]}>
          <i className={`icomoon icon-search ${style["i-20"]}`}></i>
          <input className={style["search-box"]} />
        </div>
        <div className={`${style["layout-tab"]} ${style["leftmost"]}`}>
          <i className={`icomoon icon-th-card ${style["btn"]}`}></i>
        </div>
        <div
          className={`${style["layout-tab"]} ${style["right-most"]} ${style["active"]}`}
        >
          <i className={`icomoon icon-th-list ${style["btn"]}`}></i>
        </div>
      </div>
      <div className={style["item-agents"]}>
        {/* <div v-for="agent in getAgentsByType(tab)" :key="agent.id">
      <AgentItem :agent="agent"></AgentItem>
    </div> */}
      </div>
    </>
  );
}

export default Agent;
