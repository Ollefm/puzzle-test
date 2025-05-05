import { useEffect, useState, useMemo } from "react";
import { createOriginalPlayground,shuffleArray } from "../logic/PlaygroundLogic";
import { arraysEqual } from "../utils";
import { movement } from "../logic/GameLogic";

type UsePuzzleProps = {
  gridPlayground: number[];
  hasWon: boolean;
  reset: () => void;
  move: (index: number) => void;
}

export function usePuzzle(size: number): UsePuzzleProps {
  
  const og_playground = useMemo<number[]>(() => createOriginalPlayground(size), [size]);

  const [gridPlayground, setGridPlayground] = useState<number[]>(() => shuffleArray(og_playground));
  const [hasWon, setHasWon] = useState<boolean>(() => arraysEqual(gridPlayground, og_playground));

  // Shuffle the array (playground) if the original playground changes
  useEffect(() => {
    const shuffled = shuffleArray(og_playground);
    setGridPlayground(shuffled);
    setHasWon(arraysEqual(shuffled, og_playground));
  }, [og_playground]);

  // Reset the game (shuffle the array) while also checking whether the user has won and updates the hasWon accordingly.
  const reset = () => {
    const shuffled = shuffleArray(og_playground);
    setGridPlayground(shuffled);
    setHasWon(arraysEqual(shuffled, og_playground));
  };

  // update the playground (array) based on the movement logic for a given index.
  // Also, it checks whether a user has won and updates the hasWon accordingly.
  const move = (index: number) => {
    setGridPlayground(prev => {
      const next = movement(index, prev);
      setHasWon(arraysEqual(next, og_playground));
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
