import * as actionTypes from "../actions/actionTypes"
const initialState: AgentState = { agents: [], updatedAt: '' }

const agentReducer = (state = initialState, action: AgentAction) => {
    switch (action.type) {
        case actionTypes.LOADED:
            return { agents: action.payload.agents, updatedAt: Date.now() }
        case actionTypes.ADD_RESOURCES:
            return { agents: action.payload.agents, updatedAt: Date.now() }
        case actionTypes.DELETE_RESOURCE:
            return { agents: action.payload.agents, updatedAt: Date.now() }
        default:
            return state
    }
}

export default agentReducer;