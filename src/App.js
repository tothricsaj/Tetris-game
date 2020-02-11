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