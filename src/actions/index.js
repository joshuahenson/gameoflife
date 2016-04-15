export function updateBoard(size) {
  return {
    type: 'UPDATE_BOARD',
    size
  };
}

export function clearBoard() {
  return {
    type: 'CLEAR_BOARD',
  };
}

export function newBoard(size) {
  return {
    type: 'NEW_BOARD',
    size
  };
}

export function togglePlay() {
  return {
    type: 'TOGGLE_PLAY'
  };
}

export function setSize(size) {
  return {
    type: 'SET_SIZE',
    size
  };
}
