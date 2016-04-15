const speed = (state = 500, action) => {
  switch (action.type) {
    case 'SET_SPEED':
      return (
        action.speed
      );
    default:
      return state;
  }
};

export default speed;
