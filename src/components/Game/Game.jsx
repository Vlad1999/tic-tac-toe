import "./Game.css";
import { useState } from "react";
import Board from "../Board/Board";
import Scores from "../Scores/Scores";
import { BizzaboUiActions } from '@bizzabo/dev-platform-web-sdk';

// b4bEp3UDIJ9KVcUBEYefdNHDXIowaCkr

function Game() {
  
  const [scores, setScores] = useState({
    x: 0,
    o: 0,
    tie: 0,
  });

  const bizzaboWebSdk = new BizzaboUiActions('b4bEp3UDIJ9KVcUBEYefdNHDXIowaCkr', 'https://vh-attendees.ext.dev.bizzabo.com');

  const onClick = (e) => {
    bizzaboWebSdk.openLinkInNewTab('https://dashboard.pigeonholelive.com/help/create');
  }

  return (
    <div className="Game">
      <Board setScores={setScores}/>
      <Scores scores={scores}/>
      <div
        onClick={onClick}
        style={{cursor: 'pointer'}}
        className="scores">
        contact us please
      </div>
    </div>
  );
}

export default Game;
