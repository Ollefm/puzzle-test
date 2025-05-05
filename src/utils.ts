/**
 * Compares the two given arrays and checks whether they are equal. 
 * @param a - array to be compared
 * @param b - array to be compared
 * @returns true if they are the same, otherwise return false. 
 */
export function arraysEqual(a: number[], b: number[]): boolean {
    if (a.length !== b.length) return false;
    return a.every((val, index) => val === b[index]);
  }