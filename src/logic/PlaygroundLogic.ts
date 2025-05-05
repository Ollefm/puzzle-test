/**
 * Creates the original playground (array) depending on the given size.
 * Creates an array of numbers starting from 1 up to size - 1, and the very last element is 0
 * @param size - size of the array
 * @returns the original array
 */
export function createOriginalPlayground(size: number) : number[]{
    const og_array: number[] = [size];
      for (let i = 0; i < size - 1; i++) {
        og_array[i] = i + 1
      }
      // Final index is 0 (empty)
      og_array[size - 1] = 0;
      return og_array
}

/**
 * Shuffles the original array.
 * @param playground - the array to be shuffled
 * @returns the shuffled array
 */
export function shuffleArray(playground: number[]): number[] {
  const newPlayground = [...playground];

  for (let i = newPlayground.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newPlayground[i], newPlayground[j]] = [newPlayground[j], newPlayground[i]];
  }

  return newPlayground;
}