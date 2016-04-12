// temp data for testing
const initialState =  [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]

const board = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_BOARD':
      return [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,1,1,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]

    default:
      return state;
  }
};

export default board;