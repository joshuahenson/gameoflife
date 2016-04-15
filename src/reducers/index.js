import { combineReducers } from 'redux';
import board from './reducer_board';
import playing from './reducer_playing';
import size from './reducer_size';
import speed from './reducer_speed';
import generation from './reducer_generation';

const rootReducer = combineReducers({
  board,
  playing,
  size,
  speed,
  generation
});

export default rootReducer;
