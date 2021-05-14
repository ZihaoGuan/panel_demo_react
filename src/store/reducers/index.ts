import agentReducer from './agent';
import coverReducer from './cover';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    agent: agentReducer,
    cover: coverReducer
});

export default allReducers;