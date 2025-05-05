import { useEffect, useState, useMemo } from "react";
import { createOriginalGridPlayground,shuffleArray } from "../logic/PlaygroundLogic";
import { arraysEqual } from "../utils";
import { movement } from "../logic/GameLogic";

type UsePuzzleProps = {
  gridPlayground: number[];
  hasWon: boolean;
  reset: () => void;
  move: (index: number) => void;
}

export function usePuzzle(size: number): UsePuzzleProps {
  
  const originalGridPlayground = useMemo<number[]>(() => createOriginalGridPlayground(size), [size]);

  const [gridPlayground, setGridPlayground] = useState<number[]>(() => shuffleArray(originalGridPlayground));
  const [hasWon, setHasWon] = useState<boolean>(() => arraysEqual(gridPlayground, originalGridPlayground));

  // Shuffle the array (playground) if the original playground changes
  useEffect(() => {
    const shuffled = shuffleArray(originalGridPlayground);
    setGridPlayground(shuffled);
    setHasWon(arraysEqual(shuffled, originalGridPlayground));
  }, [originalGridPlayground]);

  // Reset the game (shuffle the array) while also checking whether the user has won and updates the hasWon accordingly.
  const reset = () => {
    const shuffled = shuffleArray(originalGridPlayground);
    setGridPlayground(shuffled);
    setHasWon(arraysEqual(shuffled, originalGridPlayground));
  };

  // update the playground (array) based on the movement logic for a given index.
  // Also, it checks whether a user has won and updates the hasWon accordingly.
  const move = (index: number) => {
    setGridPlayground(prev => {
      const next = movement(index, prev);
      setHasWon(arraysEqual(next, originalGridPlayground));
      return next;
    });
  };

  return {
    gridPlayground,
    hasWon,
    reset,
    move
  };
}
