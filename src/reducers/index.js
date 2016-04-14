import { combineReducers } from 'redux';
import board from './reducer_board';
import paused from './reducer_paused';

const rootReducer = combineReducers({
  board,
  paused
});

export default rootReducer;
