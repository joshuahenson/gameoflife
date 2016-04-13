
// takes dimensions to populate gameboard using random choice
// todo tweak ratio of alive/dead
const randomBoard = (range) => {
  const arr = []
  for (let i = 0; i < range; i++) {
    const arr1 = []
    for (let j = 0; j < range; j++) {
      arr1.push(Math.random() < 0.8 ? 0 : 1)
    }
    arr.push(arr1)
  }
  return arr;
}

const tempRange = 25

// counts number of living cells surrounding cell and determines
// if cell lives or dies
const cellStatus = (array, rowInd, cellInd, range, cell) => {
  let count = 0;
  let cellIndex = cellInd;
  let rowIndex = rowInd;
  if (rowIndex === 0) {
    rowIndex = range;
  }
  if (cellIndex === 0) {
    cellIndex = range;
  }
  if (array[(rowIndex - 1) % range][(cellIndex - 1) % range]) {
    count++;
  }
  if (array[(rowIndex - 1) % range][cellIndex % range]) {
    count++;
  }
  if (array[(rowIndex - 1) % range][(cellIndex + 1) % range]) {
    count++;
  }
  if (array[rowIndex % range][(cellIndex + 1) % range]) {
    count++;
  }
  if (array[(rowIndex + 1) % range][(cellIndex + 1) % range]) {
    count++;
  }
  if (array[(rowIndex + 1) % range][cellIndex % range]) {
    count++;
  }
  if (array[(rowIndex + 1) % range][(cellIndex - 1) % range]) {
    count++;
  }
  if (array[rowIndex % range][(cellIndex - 1) % range]) {
    count++;
  }
  // todo: refactor to show if continuing to live or die?????
  if (count === 3 || count === 2 && cell) {
    return 1;
  } // else
  return 0;
}

const board = (state = randomBoard(tempRange), action) => {
  switch (action.type) {
    case 'UPDATE_BOARD':
      return state.map((row, rowIndex) =>
        row.map((cell, cellIndex) =>
          cellStatus(state, rowIndex, cellIndex, tempRange, cell)
        )
      )

    default:
      return state;
  }
};

export default board;
