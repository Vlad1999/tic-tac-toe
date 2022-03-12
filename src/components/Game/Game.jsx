import "./Game.css";
import { useState } from "react";
import Board from "../Board/Board";
import Scores from "../Scores/Scores";

function Game() {
  
  const [scores, setScores] = useState({
    x: 0,
    o: 0,
    tie: 0,
  });

  return (
    <div className="Game">
      <Board setScores={setScores}/>
      <Scores scores={scores}/>
    </div>
  );
}

export default Game;
