import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../config";
import "../style/App.css";
import Box from "./Box";

type GridProps = {
  gridPlayground: number[];
  move: (index: number) => void;
};

function Grid({ gridPlayground, move }: Readonly<GridProps>) {
  function handleBoxClick(index: number) {
    move(index);
  }

  return (
    <div
      className="grid-layout"
      style={{
        gridTemplateColumns: `repeat(${NUMBER_OF_COLUMNS}, 1fr)`,
        gridTemplateRows: `repeat(${NUMBER_OF_ROWS}, 1fr)`,
      }}
    >
      {gridPlayground.map((num, index) => (
        <Box
          key={num}
          number={num}
          index={index}
          handleClick={handleBoxClick}
          correctPosition={index + 1 === gridPlayground[index]}
        />
      ))}
    </div>
  );
}

export default Grid;
