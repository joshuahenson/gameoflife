import { combineReducers } from 'redux';
import board from './reducer_board';
import playing from './reducer_playing';
import size from './reducer_size';
import speed from './reducer_speed';

const rootReducer = combineReducers({
  board,
  playing,
  size,
  speed
});

export default rootReducer;
