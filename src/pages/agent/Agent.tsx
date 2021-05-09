import React, { useState, useEffect } from "react";
import style from "./Agent.module.sass";
import "../../assets/font-icons/fonts.css";

import AgentItem from "./components/AgentItem";
import TypeTab from "./components/TypeTab";

import API from "../../api";

function Agent() {
  const [agents, setAgents] = useState([]);
  const [agentUpdate, setAgentUpdate] = useState(0);
  const [tab, setTab] = useState("all");
  const [dialogActive, setDialogActive] = useState<number | null>(null);

  // useEffect(() => {}, [agentUpdate]);
  useEffect(() => {
    API.get("agents").then((response) => setAgents(response.data));
  }, [setAgents]);

  const getAgentCountByStatus = (status: string) => {
    if (agents.length === 0) return;
    const count = agents.reduce((acc: any, cur: any) => {
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
    const count = agents.reduce((acc: any, cur: any) => {
      if (cur.type === type) {
        return ++acc;
      } else {
        return acc;
      }
    }, 0);
    return count;
  };

  const addResourcesByAgentId = async (id: number, resources: string) => {
    const resourcesToAdd = resources.split(",");
    const jsonToUpdate: any = agents.find((agent: any) => agent.id === id);
    if (jsonToUpdate) {
      const copy = JSON.parse(JSON.stringify(jsonToUpdate));
      resourcesToAdd.forEach((element) => {
        if (element && !copy["resources"].includes(element)) {
          copy["resources"].push(element);
        }
      });
      const res = await API.put(`agents/${id}`, copy);
      jsonToUpdate["resources"] = res.data["resources"];
      setAgents(agents);
      setAgentUpdate(agentUpdate + 1);
    }
  };

  const deleteResourceByAgentId = async (id: number, resource: string) => {
    const jsonToUpdate: any = agents.find((agent: any) => agent.id === id);
    if (jsonToUpdate) {
      const copy = JSON.parse(JSON.stringify(jsonToUpdate));
      copy["resources"] = copy["resources"].filter(
        (e: string) => e !== resource
      );
      const res = await API.put(`agents/${id}`, copy);
      jsonToUpdate["resources"] = res.data["resources"];
      setAgents(agents);
      setAgentUpdate(agentUpdate + 1);
    }
  };

  const getAgentsByType = (type: string) => {
    if (type === "all") return agents;
    return agents.filter((agent: any) => agent.type === type);
  };

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
            {getAgentCountByStatus("building")}
          </span>
        </div>
        <div
          className={`${style["box"]} ${style["green-bg"]} ${style["box-status"]} ${style["box-idle"]}`}
        >
          <span className={style["title"]}>Idle</span>
          <span className={style["number"]}>
            {getAgentCountByStatus("idle")}
          </span>
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
        {getAgentsByType(tab).map((agent: any) => (
          <AgentItem
            key={agent.id}
            agent={agent}
            dialogActive={dialogActive}
            handleShowDialog={(id: number | null) => showDialog(id)}
            handleAddResources={(id: number, resources: string) =>
              addResourcesByAgentId(id, resources)
            }
            handleDeleteResource={(id: number, resource: string) =>
              deleteResourceByAgentId(id, resource)
            }
          />
        ))}
      </div>
    </>
  );
}

export default Agent;
