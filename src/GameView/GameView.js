/* such a unnecessary comment */
import React from 'react';
import { BlockBuilder } from '../services/BlockBuilder.js';
import GameRender from '../services/GameRender.js';

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { angle: 0 };
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }
  
  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);

  }
  
  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }
  
  updateAnimationState() {
    this.setState(prevState => ({ angle: prevState.angle + 1 }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }
  
  render() {
    return <Canvas angle={this.state.angle} />
  }
}

class Canvas extends React.Component {

    constructor(props) {
        super(props);
        this._gr = new GameRender();
        this.canvas = React.createRef();
    }

    componentDidUpdate() {
        // this._gr.init();
        // this._gr.testDraw();
        
        const {angle} = this.props;
        const canvas = this.canvas.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        ctx.save();
        ctx.beginPath();
        ctx.clearRect(0, 0, width, height);
        ctx.translate(width/2, height/2 );
        ctx.rotate(angle * Math.PI / 180);
        ctx.fillStyle = '#4397AC';
        ctx.fillRect(-width/4, -height/4, width/2, (height - 200)/2);
        ctx.restore();
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
