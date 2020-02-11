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
      }, 200);
      
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
        this.blockType = 'Ttype';

        this.state = {
            block: this._bb.block(this.blockType),
        };

        this._moveToBottom = 0;
    }

    componentDidUpdate() {

        const canvas = this.canvas.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        let blockControll = (event) => {
            // TODO find the reason of lot of calling
            event.preventDefault();
            console.log(event.keyCode);

            switch(event.keyCode) {
                case 37:
                    this.state.block.moveLeft(0.5);
                    return;
                case 39:
                    this.state.block.moveRight(0.5, width);
                    return;
                case 40:
                    this.state.block.moveDown(0.5, 500);
                    return;
                default:
                    return;
            }
        };

        document.addEventListener('keydown', blockControll);

        // console.log(this.state.block.getYDimensions()[0]);
        if(this.state.block.getYDimensions()[0] === 500) {
            this.setState({
                block: this._bb.block(this.blockType)
            });
        }

        ctx.save();

        ctx.clearRect(0, 0, width, height);


        this._bb.builder(this.state.block, ctx);
        if (this._moveToBottom === 50) {
            this.state.block.moveDown(20, 500);
            this._moveToBottom = 0;
        }
        
        ctx.restore();

        this._moveToBottom += 5;

        // document.removeEventListener('keydown', blockControll);
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
