import { NUMBER_OF_COLUMNS } from "../config.ts";
/**
 * This file contains the logic for moving boxes
 */

/**
 *
 * @param index - the index of the clicked element (Box) of the array (Grid).
 * @param gridPlayground
 * @returns the updated playground (array)
 */

export function movement(index: number, gridPlayground: number[]): number[] {
  const emptyIndex = gridPlayground.indexOf(0);

  // Locate the row and column number of the clicked box
  const row = Math.floor(index / NUMBER_OF_COLUMNS);
  const col = index % NUMBER_OF_COLUMNS;

  // Locate the row and column number of the empty box
  const emptyRow = Math.floor(emptyIndex / NUMBER_OF_COLUMNS);
  const emptyCol = emptyIndex % NUMBER_OF_COLUMNS;

  const newPlayground = [...gridPlayground];

  // Move row wise
  if (row === emptyRow) {
    moveRowWise(col, emptyCol, emptyIndex, index, newPlayground);
  }

  // Move column wise
  else if (col === emptyCol) {
    moveColumnWise(row, emptyRow, index, emptyIndex, newPlayground);
  }

  return newPlayground;
}

/**
 * Moves all boxes between the clicked box and empty box in the row.
 * @param col - column number of the clicked index
 * @param emptyCol - column number of the empty box (0)
 * @param emptyIndex - index of the empty box (0)
 * @param index - index of the clicked box
 * @param newPlayground - array to be modifed.
 * @returns the modified array.
 */

function moveRowWise(
  col: number,
  emptyCol: number,
  emptyIndex: number,
  index: number,
  newPlayground: number[]
): number[] {
  const move = col < emptyCol ? "right" : "left";
  if (move === "right") {
    // shift right
    for (let i = emptyIndex; i > index; i--) {
      newPlayground[i] = newPlayground[i - 1];
    }
  }
  if (move === "left") {
    // shift left
    for (let i = emptyIndex; i < index; i++) {
      newPlayground[i] = newPlayground[i + 1];
    }
  }

  // set the clicked index to 0 (empty) when all other boxes in between have been moved.
  newPlayground[index] = 0;
  return newPlayground;
}

/**
 * Moves all boxes between the clicked box and empty box in the column.
 * @param row - row number of the clicked index
 * @param emptyRow - row number of the empty box (0)
 * @param index - index of the clicked box
 * @param emptyIndex - index of the empty box (0)
 * @param newPlayground - array to be modified
 * @returns the modified array
 */

function moveColumnWise(
  row: number,
  emptyRow: number,
  index: number,
  emptyIndex: number,
  newPlayground: number[]
): number[] {
  const move: string = row < emptyRow ? "down" : "up";

  if (move === "down") {
    for (let i = emptyIndex; i > index; i -= NUMBER_OF_COLUMNS) {
      newPlayground[i] = newPlayground[i - NUMBER_OF_COLUMNS];
    }
  } else if (move === "up") {
    for (let i = emptyIndex; i < index; i += NUMBER_OF_COLUMNS) {
      newPlayground[i] = newPlayground[i + NUMBER_OF_COLUMNS];
    }
  }

  // set the clicked index to 0 (empty) when all other boxes in between have been moved.
  newPlayground[index] = 0;
  return newPlayground;
}
