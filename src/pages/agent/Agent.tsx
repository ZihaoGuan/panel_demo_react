import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAgents,
  addResources,
  deleteResources,
} from "../../store/actions";
import style from "./Agent.module.sass";

import AgentItem from "./components/AgentItem";
import TypeTab from "./components/TypeTab";

function Agent() {
  const [tab, setTab] = useState("all");
  const [dialogActive, setDialogActive] = useState<number | null>(null);

  const agents: readonly IAgent[] = useSelector((state: States) => {
    return state.agent.agents;
  });

  const updatedAt: string = useSelector(
    (state: States) => state.agent.updatedAt
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAgents());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {}, [updatedAt]);

  const getAgentCountByStatus = (status: string) => {
    if (agents.length === 0) return;
    const count = agents.reduce((acc: number, cur: IAgent) => {
      if (cur.status === status) {
        return ++acc;
      } else {
        return acc;
      }
    }, 0);
    return count;
  };

  const getAgentCount = () => {
    if (agents.length === 0) return;
    return agents.length;
  };

  const getAgentCountByType = (type: string) => {
    if (agents.length === 0) return;
    const count = agents.reduce((acc: number, cur: IAgent) => {
      if (cur.type === type) {
        return ++acc;
      } else {
        return acc;
      }
    }, 0);
    return count;
  };

  const getAgentsByType = (type: string) => {
    if (type === "all") return agents;
    return agents.filter((agent: IAgent) => agent.type === type);
  };

  function selectTypeTab(type: string) {
    setTab(type);
  }

  function showDialog(id: number | null) {
    setDialogActive(id);
  }

  const boxes = (
    <div className={style["box-container"]}>
      <div
        className={`${style["box"]} ${style["orange-bg"]} ${style["box-status"]} ${style["box-building"]}`}
      >
        <span className={style["title"]}>Building</span>
        <span className={style["number"]}>
          {getAgentCountByStatus("building")}
        </span>
      </div>
      <div
        className={`${style["box"]} ${style["green-bg"]} ${style["box-status"]} ${style["box-idle"]}`}
      >
        <span className={style["title"]}>Idle</span>
        <span className={style["number"]}>{getAgentCountByStatus("idle")}</span>
      </div>
      <div
        className={`${style["box"]} ${style["white-bg"]} ${style["box-flex"]} ${style["text-center"]}`}
      >
        <div className={style["box-column"]}>
          <span className={style["title"]}>All</span>
          <span className={style["number"]}>{getAgentCount()}</span>
        </div>
        <div className={style["box-column"]}>
          <span className={style["title"]}>PHYSICAL</span>
          <span className={style["number"]}>
            {getAgentCountByType("physical")}
          </span>
        </div>
        <div className={style["box-column"]}>
          <span className={style["title"]}>VIRTUAL</span>
          <span className={style["number"]}>
            {getAgentCountByType("virtual")}
          </span>
        </div>
      </div>
    </div>
  );

  const controlBar = (
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
  );

  const itemList = (
    <div className={style["item-agents"]}>
      {getAgentsByType(tab).map((agent: IAgent) => (
        <AgentItem
          key={agent.id}
          agent={agent}
          dialogActive={dialogActive}
          handleShowDialog={(id: number | null) => showDialog(id)}
          handleAddResources={(id: number, resources: string) =>
            dispatch(addResources(id, resources))
          }
          handleDeleteResource={(id: number, resource: string) =>
            dispatch(deleteResources(id, resource))
          }
        />
      ))}
    </div>
  );

  return (
    <>
      {boxes}
      {controlBar}
      {itemList}
    </>
  );
}

export default Agent;
