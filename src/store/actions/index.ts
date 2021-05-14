import * as actionTypes from './actionTypes'
import API from '../../api/request'

const addResourcesSuccess = (agents: IAgent[]) => {
    return {
        type: actionTypes.ADD_RESOURCES,
        payload: { agents }
    }
}

const fetchAgentsSuccess = (agents: IAgent[]) => {
    return {
        type: actionTypes.LOADED,
        payload: { agents }
    }
}

const deleteResourceSuccess = (agents: IAgent[]) => {
    return {
        type: actionTypes.DELETE_RESOURCE,
        payload: { agents }
    }
}

/*asynchronous thunk action creator
  calls the api, then dispatches the synchronous action creator
*/
export const fetchAgents = () => {
    return async (dispatch: any) => {
        try {
            const agents = await API.get("agents")
            dispatch(fetchAgentsSuccess(agents.data));
        } catch (e) {
            console.log(e)
        }
    }
}

export const addResources = (id: number, resources: string) => {
    return async (dispatch: any, getState: Function) => {
        try {
            const resourcesToAdd = resources.split(",");
            const agents = getState().agent.agents;
            const jsonToUpdate: IAgent = agents.find((agent: any) => agent.id === id);
            if (jsonToUpdate) {
                const copy = JSON.parse(JSON.stringify(jsonToUpdate));
                resourcesToAdd.forEach((element) => {
                    if (element && !copy["resources"].includes(element)) {
                        copy["resources"].push(element);
                    }
                });
                const res = await API.put(`agents/${id}`, copy);
                jsonToUpdate["resources"] = res.data["resources"];
                dispatch(addResourcesSuccess(agents));
            }
        } catch (e) {
            console.log(e)
        }
    }
}
export const deleteResources = (id: number, resource: string) => {
    return async (dispatch: any, getState: Function) => {
        try {
            const agents = getState().agent.agents;
            const jsonToUpdate: any = agents.find((agent: any) => agent.id === id);
            if (jsonToUpdate) {
                const copy = JSON.parse(JSON.stringify(jsonToUpdate));
                copy["resources"] = copy["resources"].filter(
                    (e: string) => e !== resource
                );
                const res = await API.put(`agents/${id}`, copy);
                jsonToUpdate["resources"] = res.data["resources"];
                dispatch(deleteResourceSuccess(agents));
            }
        }
        catch (e) {
            console.log(e)
        }
    }
}