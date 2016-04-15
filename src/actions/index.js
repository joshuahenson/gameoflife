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

export function play() {
  return {
    type: 'PLAY'
  };
}

export function pause() {
  return {
    type: 'PAUSE'
  };
}

export function setSize(size) {
  return {
    type: 'SET_SIZE',
    size
  };
}

export function setSpeed(speed) {
  return {
    type: 'SET_SPEED',
    speed
  };
}

export function toggleCell(index) {
  return {
    type: 'TOGGLE_CELL',
    index
  };
}
