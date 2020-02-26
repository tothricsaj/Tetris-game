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
        this.blockType = 'TestType';

        this.testBool = true;

        // I guess that a more subtle way exists.....
        this.gamePlace = [];
        for(let i=0; i<75; i++) this.gamePlace.push(new Array(50).fill(null));

        // this.gamePlace[59][49] = 'fooBar';
        // console.table(this.gamePlace[59]);

        this.state = {
            block: this._bb.block(this.blockType),
        };

        this._moveToBottom = 0;
        this.blockControll = this.blockControll.bind(this);
    }

    blockControll = (event) => {
        event.preventDefault();
        // console.log(event.keyCode);

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

        let collision = false;

        // console.log(this.state.block.getYDimensions()[0]);
        
        // console.table(this.gamePlace)

        currBlock.bottomEdge.forEach((val, i) => {
            let cordinateX,
                cordinateY;

            if(!!this.gamePlace[val.y][val.x]) {
                cordinateX = this.gamePlace[val.y][val.x].x;
                cordinateY = this.gamePlace[val.y][val.x].y;

                console.log(`cordinateY -> ${cordinateY} ; val.y -> ${val.y-10}`)
                if(
                    val.x === cordinateX  &&
                    val.y === cordinateY
                ) {
                    console.log('Got it....!!!!!!');
                    collision = true;
                }
            }
        });

        
        // Here we drop a new block element 
        // Furthermore this is the begining (of a beautiful friendship) a new loop, indeed
        if(currBlock.getYDimensions()[0] >= 60 || collision) {
            // let blockTypes = [
            //     'Itype',
            //     'Otype',
            //     'Ztype',
            //     'Stype',
            //     'Ttype'
            // ];

            let blockTypes = [
                'TestType',
                'TestType',
                'TestType',
                'TestType',
                'TestType'
            ];

            // let blockTypes = [
            //     'Ttype',
            //     'Ttype',
            //     'Ttype',
            //     'Ttype',
            //     'Ttype'
            // ];


            let xDim = currBlock.getXDimensions();
            let yDim = currBlock.getYDimensions();

            xDim.forEach((dimX, i) => {
                this.gamePlace[yDim[i]][dimX] = {
                    x: dimX,
                    y: yDim[i],
                    color: currBlock.color
                };
            });

            // console.table(this.gamePlace[60]);
            // this.testBool = false;

            this.setState({
                block: this._bb.block(blockTypes[Math.floor(Math.random() * blockTypes.length)])
            });

            collision = false;
        }

        ctx.save();

        ctx.clearRect(0, 0, width, height);

        this._bb.builder(this.state.block, ctx);

        this.gamePlace.forEach((arr) => {
            arr.forEach((obj) => {
                if (!!obj) {
                    // console.log('I am drawing!!!');
                    // console.table(obj)
                    ctx.fillStyle = obj.color;
                    ctx.fillRect(obj.x, obj.y, 10, 10);
                }
            });
        });

        ctx.fillStyle = 'pink';
        ctx.fillRect(15, 50, 10, 10);

        if (this._moveToBottom === 50) {
            this.state.block.moveDown(20, 500);
            this._moveToBottom = 0;
        }

        // ctx.fillStyle = this.gamePlace[]
        // ctx.fillRect(block.x1, block.y1, block.width, block.height);
        //
        
        
        ctx.restore();

        this._moveToBottom += 5;

        this.state.block.currentEdge = this.state.block;

        // document.removeEventListener('keydown', blockControll);
    }

    render() {
        return (
            <div id="gameView">
                <canvas ref={this.canvas} id="canvas" width="50" height="70" />
            </div>
        )
    }
}

export default GameView;
