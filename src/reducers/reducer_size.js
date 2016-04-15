const size = (state = 55, action) => {
  switch (action.type) {
    case 'SET_SIZE':
      return (
        action.size
      );
    default:
      return state;
  }
};

export default size;
