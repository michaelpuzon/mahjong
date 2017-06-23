import { combineReducers } from 'redux';
import jobs from './main/reducers/jobs';
import counter from './counter/reducers/counter';

const sampleApp = combineReducers({
  counter,
  jobs
});

export default sampleApp;
