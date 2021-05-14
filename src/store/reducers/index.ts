import agentReducer from './agent';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    agent: agentReducer,
});

export default allReducers;