export function updateBoard() {
  return {
    type: 'UPDATE_BOARD',
  };
}

export function newBoard(size) {
  return {
    type: 'NEW_BOARD',
    size,
  };
}
