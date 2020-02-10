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
