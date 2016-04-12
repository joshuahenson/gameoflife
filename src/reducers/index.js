import { combineReducers } from 'redux';
import board from './reducer_board';

const rootReducer = combineReducers({
  board,
});

export default rootReducer;
