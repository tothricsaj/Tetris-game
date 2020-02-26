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
        this.blockType = 'Testtype';

        this.state = {
            block: this._bb.block(this.blockType),
        };

        this._moveToBottom = 0;

        this.blockControll = this.blockControll.bind(this);
        this.freezeTheState = this.freezeTheState.bind(this);
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
                this.state.block.moveDown(10, 70);
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

        // console.log(this.state.block.getYDimensions()[0]);
        if(this.state.block.getYDimensions()[0] >= 90) {
            // let blockTypes = [
            //     'Itype',
            //     'Otype',
            //     'Ztype',
            //     'Stype',
            //     'Ttype'
            // ];

            let blockTypes = [
                'Testtype',
                'Testtype',
                'Testtype',
                'Testtype',
                'Testtype'
            ];
            this.setState({
                ...this.state,
                block: this._bb.block(blockTypes[Math.floor(Math.random() * blockTypes.length)])
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

    freezeTheState() {
        console.table(this.state)
    }

    render() {
        return (
            <div id="gameView">
                <canvas ref={this.canvas} id="canvas" width="60" height="90" />

                <button onClick={this.freezeTheState}>Stop</button>
            </div>
        )
    }
}

export default GameView;
