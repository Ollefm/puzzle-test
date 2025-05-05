import "./style/App.css";
import Grid from "./components/Grid";
import { WinModal } from "./components/WinModal";
import { usePuzzle } from "./hooks/useCustomPuzzleHook";
import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS, PLAYGROUND_SIZE } from "./config";

function App() {
  const game = usePuzzle(PLAYGROUND_SIZE);

  return (
    <div className="layout">
      <h1 className="title">React - {NUMBER_OF_ROWS} x {NUMBER_OF_COLUMNS} - pussel</h1>
      <Grid gridPlayground={game.gridPlayground} move={game.move} />
      <button className="button" onClick={() => game.reset()}>
        Slumpa
      </button>
      <WinModal isOpen={game.hasWon} onClose={game.reset} />
    </div>
  );
};

export default App;