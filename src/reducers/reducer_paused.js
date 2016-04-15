const paused = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_PLAY':
      return (
        !state
      );
    case 'PAUSE_PLAY':
      return (
        true
      );
    default:
      return state;
  }
};

export default paused;
