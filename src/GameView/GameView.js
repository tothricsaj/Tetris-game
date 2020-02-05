/* such a unnecessary comment */
import React from 'react';
import GameRender from '../services/GameRender.js';

class GameView extends React.Component {


    constructor(props) {
        super(props);
        this._gr = new GameRender();
        this.canvas = React.createRef();
        
    }

    componentDidMount() {
        this._gr.init();
        // this._gr.testDraw();
        window.requestAnimationFrame(this._gr.init);
    }


    render() {
        return (
            <div id="gameView">
                <canvas ref={this.canvas} id="canvas" width="300" height="500" />
            </div>
        )
    }
}

export default GameView;

