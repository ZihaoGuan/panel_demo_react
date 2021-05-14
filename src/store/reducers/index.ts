import agentReducer from './agent';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    agents: agentReducer,
});

export default allReducers;