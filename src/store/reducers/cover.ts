import * as actionTypes from "../actions/actionTypes"
const initialState: CoverState = { coverOn: false }

const coverReducer = (state = initialState, action: AgentAction) => {
    switch (action.type) {
        case actionTypes.TURN_OFF_COVER:
            return { coverOn: false }
        case actionTypes.TURN_ON_COVER:
            return { coverOn: true }
        default:
            return state
    }
}

export default coverReducer;