import { combineReducers } from 'redux';
import board from './reducer_board';
import paused from './reducer_paused';
import size from './reducer_size';

const rootReducer = combineReducers({
  board,
  paused,
  size
});

export default rootReducer;
