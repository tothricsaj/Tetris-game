import React from 'react';
import './App.css';
import GameView from './GameView/GameView.js';

function App() {
  return (
    <div className="App">
      <h2 className="title">Tetris game</h2>
      <GameView />
    </div>
  );
}

export default App;

// I want to follow the GitFlow workflow conception.
// I is fairly hard alone...
// So, this is ownig to gitflow
// block controll is working nonetheless I have begun to develop the gameplace
// OK, gameover if the block on the top
// Before refactor merge. It is not too much nonetheless personally I beleive that
// the refactor makes the life by far esier than I just still mess of code.
