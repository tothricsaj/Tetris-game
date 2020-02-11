/* such a unnecessary comment */
import React from 'react';
import { BlockBuilder } from '../services/BlockBuilder.js';
import { TBlock } from '../services/Blocks.js';
// import GameRender from '../services/GameRender.js';

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
  
  updateAnimationState(elapsedTime) {
      setTimeout(() => {
        this.setState(prevState => ({ angle: prevState.angle + 10 }));
        this.rAF = requestAnimationFrame(this.updateAnimationState);
      }, 500);
      
   }
  
  render() {
    return <Canvas angle={this.state.angle} />
  }
}

class Canvas extends React.Component {

    constructor(props) {
        super(props);
        
        this._bb = new BlockBuilder();
        this.canvas = React.createRef();
        this.blockType = 'Otype';

        this.state = {
            block: this._bb.block(this.blockType),
        };
    }

    componentDidUpdate() {

        const canvas = this.canvas.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        console.log(this.state.block.getYDimensions()[0]);
        if(this.state.block.getYDimensions()[0] === 500) {
            this.setState({
                block: this._bb.block(this.blockType)
            });
        }

        ctx.save();

        ctx.clearRect(0, 0, width, height);

        this._bb.builder(this.state.block, ctx);
        this.state.block.moveDown(20, 500);

        ctx.restore();
        
        // this._gr.init();
        // this._gr.testDraw();
        
        // const {angle} = this.props;
        // const canvas = this.canvas.current;
        // const ctx = canvas.getContext('2d');
        // const width = canvas.width;
        // const height = canvas.height;

        // ctx.save();
        // ctx.beginPath();
        // ctx.clearRect(0, 0, width, height);
        // ctx.translate(width/2, height/2 );
        // ctx.rotate(angle * Math.PI / 380);
        // ctx.fillStyle = '#4397AC';
        // ctx.fillRect(-width/4, -height/4, width/2, (height - 200)/2);
        // ctx.restore();
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
