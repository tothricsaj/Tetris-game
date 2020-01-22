import React from 'react';
import GameRender from '../services/GameRender.js';

class GameView extends React.Component {


    constructor(props) {
        super(props);
        this._gr = new GameRender();
        
    }

    componentDidMount() {
        this._gr.init();
        this._gr.testDraw();
    }


    render() {
        return (
            <div id="gameView">
                <canvas id="canvas" width="300" height="800"></canvas>
            </div>
        )
    }
}

export default GameView;

