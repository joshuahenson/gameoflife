const paused = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_PLAY':
      return (
        !state
      );
    default:
      return state;
  }
};

export default paused;
