const playing = (state = true, action) => {
  switch (action.type) {
    case 'PLAY':
      return (
        true
      );
    case 'PAUSE':
      return (
        false
      );
    default:
      return state;
  }
};

export default playing;
