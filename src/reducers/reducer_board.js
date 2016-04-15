
// takes dimensions to populate gameboard using random choice
const randomBoard = (width) => {
  const range = width * width;
  const arr = [];
  for (let i = 0; i < range; i++) {
    arr.push(Math.random() < 0.8 ? 0 : 1);
  }
  return arr;
};

// counts number of living cells surrounding cell and determines
// if cell lives or dies
const cellStatus = (array, index, width, cell) => {
  let count = 0;
  let surroundingIndexes = [];
  let arrLength = array.length;
  if (index < width) {
    surroundingIndexes = [
      index - width -1 + arrLength,
      index - width + arrLength,
      index - width + 1 + arrLength,
      index - 1,
      index + 1,
      index + width -1,
      index + width,
      index + width + 1
    ];
  } else {
    surroundingIndexes = [
      index - width -1,
      index - width,
      index - width + 1,
      index - 1,
      index + 1,
      (index + width -1) % arrLength,
      (index + width) % arrLength,
      (index + width + 1) % arrLength
    ];    
  }
  surroundingIndexes.forEach((idx) => {
    if (array[idx]) {
      count++;
    }
  });

  // todo: refactor to show if continuing to live or die?????
  if (count === 3 || count === 2 && cell) {
    return 1;
  } // else
  return 0;
};

const tempRange = 25;

const board = (state = randomBoard(tempRange), action) => {
  switch (action.type) {
    case 'NEW_BOARD':
      return (
        randomBoard(action.size)
      );
    case 'UPDATE_BOARD':
      return state.map((cell, index) =>
        cellStatus(state, index, tempRange, cell)
      );
    case 'CLEAR_BOARD':
      return state.map((cell) =>
        0
      );
    default:
      return state;
  }
};

export default board;
