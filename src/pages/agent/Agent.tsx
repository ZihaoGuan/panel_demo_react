import React, { useState } from "react";
import style from "./Agent.module.sass";
import "../../assets/font-icons/fonts.css";

import AgentItem from "./components/AgentItem";
import TypeTab from "./components/TypeTab";

function Agent() {
  const agents = [
    {
      id: 1,
      name: "hey",
      os: "windows",
      status: "building",
      type: "virtual",
      ip: "11",
      location: "ff",
      resources: ["4","55","55555"],
    },
    {
      id: 2,
      name: "hey",
      os: "windows",
      status: "building",
      type: "virtual",
      ip: "11",
      location: "ff",
      resources: [],
    },
  ];

  const [tab, setTab] = useState("all");

  const [dialogActive, setDialogActive] = useState<number | null>(null);

  function selectTypeTab(type: string) {
    setTab(type);
  }

  function showDialog(id: number | null) {
    setDialogActive(id);
  }

  return (
    <>
      <div className={style["box-container"]}>
        <div
          className={`${style["box"]} ${style["orange-bg"]} ${style["box-status"]} ${style["box-building"]}`}
        >
          <span className={style["title"]}>Building</span>
          <span className={style["number"]}>
            {/* {{ this.getAgentCountByStatus("building") }} */}1
          </span>
        </div>
        <div
          className={`${style["box"]} ${style["green-bg"]} ${style["box-status"]} ${style["box-idle"]}`}
        >
          <span className={style["title"]}>Idle</span>
          <span className={style["number"]}>
            {/* {{ this.getAgentCountByStatus("idle") }} */}1
          </span>
        </div>
        <div
          className={`${style["box"]} ${style["white-bg"]} ${style["box-flex"]} ${style["text-center"]}`}
        >
          <div className={style["box-column"]}>
            <span className={style["title"]}>All</span>
            <span className={style["number"]}>
              {/* {{ this.getAgentCount() }} */}1
            </span>
          </div>
          <div className={style["box-column"]}>
            <span className={style["title"]}>PHYSICAL</span>
            <span className={style["number"]}>
              {/* {{ this.getAgentCountByType("physical") }} */}1
            </span>
          </div>
          <div className={style["box-column"]}>
            <span className={style["title"]}>VIRTUAL</span>
            <span className={style["number"]}>
              {/* {{ this.getAgentCountByType("virtual") }} */}1
            </span>
          </div>
        </div>
      </div>
      <div className={style["control-bar"]}>
        <TypeTab
          type="All"
          active={tab === "all"}
          onClick={() => selectTypeTab("all")}
        />
        <TypeTab
          type="Physical"
          active={tab === "physical"}
          onClick={() => selectTypeTab("physical")}
        />
        <TypeTab
          type="Virtual"
          active={tab === "virtual"}
          onClick={() => selectTypeTab("virtual")}
        />
        <div className={style["search-box-container"]}>
          <i className={`icomoon icon-search ${style["i-20"]}`}></i>
          <input className={style["search-box"]} />
        </div>
        <div className={`${style["layout-tab"]} ${style["leftmost"]}`}>
          <i className={`icomoon icon-th-card ${style["btn"]}`}></i>
        </div>
        <div
          className={`${style["layout-tab"]} ${style["rightmost"]} ${style["active"]}`}
        >
          <i className={`icomoon icon-th-list ${style["btn"]}`}></i>
        </div>
      </div>
      <div className={style["item-agents"]}>
        {/* <div v-for="agent in getAgentsByType(tab)" :key="agent.id">
      <AgentItem :agent="agent"></AgentItem>
    </div> */}
        {agents.map((agent: any) => (
          <AgentItem
            key={agent.id}
            agent={agent}
            dialogActive={dialogActive}
            handleShowDialog={(id: number | null) => showDialog(id)}
          />
        ))}
      </div>
    </>
  );
}

export default Agent;
