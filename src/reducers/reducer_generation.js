const generation = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE_BOARD':
      return state + 1;
    case 'CLEAR_BOARD':
    case 'NEW_BOARD':
      return 0;
    default:
      return state;
  }
};

export default generation;
