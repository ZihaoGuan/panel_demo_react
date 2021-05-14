import * as actionTypes from "../actions/actionTypes"
const initialState: AgentState[] = []

const agentReducer = (state = initialState, action: AgentAction) => {
    switch (action.type) {
        case actionTypes.LOADED:
            return action.payload.agents
        case actionTypes.ADD_RESOURCES:
            return action.payload.agents
        case actionTypes.DELETE_RESOURCE:
            return action.payload.agents
        default:
            return state
    }
}

export default agentReducer;