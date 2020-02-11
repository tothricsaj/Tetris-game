import React from 'react';
import { BlockBuilder } from '../services/BlockBuilder.js';

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { connect: true };
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
        this.setState({connect: true}); // I draw a blank about this....explore!
        this.rAF = requestAnimationFrame(this.updateAnimationState);
      }, 500);
      
   }
  
  render() {
    return <Canvas />
  }
}

class Canvas extends React.Component {

    constructor(props) {
        super(props);
        
        this._bb = new BlockBuilder();
        this.canvas = React.createRef();
        this.blockType = 'Itype';

        this.state = {
            block: this._bb.block(this.blockType),
        };
    }

    componentDidUpdate() {

        const canvas = this.canvas.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // console.log(this.state.block.getYDimensions()[0]);
        if(this.state.block.getYDimensions()[0] === 500) {
            let blockTypes = [
                'Itype',
                'Otype',
                'Ztype',
                'Stype',
                'Ttype'
            ];

            this.setState({
                block: this._bb.block(blockTypes[Math.floor(Math.random() * blockTypes.length)])
            });
        }

        ctx.save();

        ctx.clearRect(0, 0, width, height);

        this._bb.builder(this.state.block, ctx);
        this.state.block.moveDown(20, 500);

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
