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
      }, 100);
      
   }
  
  render() {
    return <Canvas />
  }
}

class Canvas extends React.Component {

    constructor(props) {
        super(props);

        document.addEventListener('keydown', this.blockControll);
        
        this._bb = new BlockBuilder();
        this.canvas = React.createRef();
        this.blockType = 'Ttype';

        // I guess that a more subtle way exists.....
        this.gamePlace = [];
        for(let i=0; i<200; i++) this.gamePlace.push(new Array(300).fill(null));

        this.state = {
            block: this._bb.block(this.blockType),
        };

        this._moveToBottom = 0;
        this.blockControll = this.blockControll.bind(this);
    }

    blockControll = (event) => {
        event.preventDefault();
        console.log(event.keyCode);

        switch(event.keyCode) {
            case 37:
                this.state.block.moveLeft(10);
                return;
            case 39:
                this.state.block.moveRight(10, 300);
                return;
            case 40:
                this.state.block.moveDown(10, 500);
                return;
            default:
                return;
        }
    };


    componentDidUpdate() {

        const canvas = this.canvas.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const currBlock = this.state.block;

        // console.log(this.state.block.getYDimensions()[0]);
        
        // Here we drop a new block element 
        // Furthermore this is the begining (of a beautiful friendship) a new loop, indeed
        if(
            currBlock.getYDimensions()[0] >= 200 ||
            currBlock.bottomEdge.x + 10 === this.gamePlace[currBlock.x]
        ) {
            let blockTypes = [
                'Itype',
                'Otype',
                'Ztype',
                'Stype',
                'Ttype'
            ];

            this.gamePlace[currBlock.x1][currBlock.y1] = {
                x: currBlock.x1,
                y: currBlock.y1,
                color: 'orange'
            };

            this.setState({
                block: this._bb.block(blockTypes[Math.floor(Math.random() * blockTypes.length)])
            });
        }

        ctx.save();

        ctx.clearRect(0, 0, width, height);

        this._bb.builder(this.state.block, ctx);

        this.gamePlace.forEach((arr) => {
            arr.forEach((obj) => {
                if (!!obj) {
                    ctx.fillStyle = obj.color;
                    ctx.fillRect(obj.x, obj.y, 10, 10);
                }
            });
        });


        if (this._moveToBottom === 50) {
            this.state.block.moveDown(20, 500);
            this._moveToBottom = 0;
        }

        // ctx.fillStyle = this.gamePlace[]
        // ctx.fillRect(block.x1, block.y1, block.width, block.height);
        //
        
        
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
