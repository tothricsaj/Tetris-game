import React from 'react';

class GameView extends React.Component {
    render() {
        return (
            <div id="gameView">
                <canvas id="canvas" width="300" height="800"></canvas>
            </div>
        )
    }
}

export default GameView;

