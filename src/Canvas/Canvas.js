import React from 'react';
import { BlockBuilder } from '../services/BlockBuilder.js';

class Canvas extends React.Component {

    constructor(props) {
        super(props);

        document.addEventListener('keydown', this.blockControll);
        
        this._bb = new BlockBuilder();
        this.canvas = React.createRef();
        this.blockType = 'Testtype';

        // I guess that a more subtle way exists.....
        this.gamePlace = [];
        for(let i=0; i<9; i++) this.gamePlace.push(new Array(7).fill(null));

        /////////////////////////////////////////////////////
        ///////////// Test block in gamePlace ///////////////
        /////////////////////////////////////////////////////

        this.gamePlace[8][4] = { // currently, this is the initial object - it is a little hackie
            x: 0,
            y: 0,
            color: 'green'
        };

        /////////////////////////////////////////////////////

        this.state = {
            block: this._bb.block(this.blockType),
            stopFlow: false, // this is due to the test
            gameOver: false,
        };

        this._moveToBottom = 0; // this is contorll the speed of block's moving

        this.blockControll = this.blockControll.bind(this);
        this.freezeTheState = this.freezeTheState.bind(this);
    }

    blockControll = (event) => {
        event.preventDefault();
        // console.log(event.keyCode);

        switch(event.keyCode) {
            case 37:
                this.state.block.moveLeft(10);
                return;
            case 39:
                this.state.block.moveRight(10, 60);
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

        let collosion = false;

        this.gamePlace.forEach((row, i) => {
            let rowIndex = i;
            row.forEach((obj, i )=> {
                if(!!obj) {
                    let matchDim = (
                        // TODO it may change when the comples bolcks will come
                        obj.x === this.state.block.getXDimensions()[0] &&
                        obj.y === this.state.block.getYDimensions()[0] + 1
                    );

                    if (matchDim && obj.y === 1) {
                        this.state.gameOver = true
                        return;
                    }

                    // console.table(this.gamePlace[rowIndex][i])
                    // console.table(this.state.block)
                    if(matchDim || this.state.block.getYDimensions()[0] >= 8) {
                        collosion = true;

                        try {
                            this.gamePlace[rowIndex - 1][this.state.block.getXDimensions()[0]] = {
                                x: this.state.block.getXDimensions()[0],
                                y: this.state.block.getYDimensions()[0],
                                color: this.state.block.color
                            }
                        } catch(e) {
                            // console.table(this.gamePlace);
                            // console.table({x1: this.state.block.x1, y1: this.state.block.y1 });
                        }

                        return true;
                    }
                }
            });
        });

        if((this.state.block.getYDimensions()[0] >= 8 || collosion) && !this.state.gameOver) {
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
        
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // DRAWING SECTION
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        
        // this builder is drawing the moving element
        this._bb.builder(this.state.block, ctx); 

        // draw what is in gamePlace
        this.gamePlace.forEach((row, i) => {
            row.forEach((obj, i) => {
                if(!!obj) {
                    ctx.fillStyle = obj.color;
                    ctx.fillRect((obj.x * 10), (obj.y * 10), 10, 10);
                }
            });
        });

        // reference block due to test
        // ctx.fillStyle = 'pink';
        // ctx.fillRect(35, 80, 10, 10);

        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        if (this._moveToBottom === 80 && !this.state.gameOver) {
            // Here the controll the speed of the block's moving
            this.state.block.moveDown(90);
            this._moveToBottom = 0;
        }

        ctx.restore();

        this._moveToBottom += 8; // bigger number, faster move

        // document.removeEventListener('keydown', blockControll);
    }

    freezeTheState() {
        // this functon is owing to test. Here will console
        // informations about things like gamePlace and more
        this.setState({
            ...this.state,
            stopFlow: !this.state.stopFlow
        })
        console.log('what??')
        console.table(this.gamePlace)
    }

    render() {
        return (
            <div id="gameView">
                <canvas ref={this.canvas} id="canvas" width="70" height="90" />

                {/* 
                    this button is just because of testing 
                    After the develop you should delete it!!!!!!

                    <button onClick={this.freezeTheState}>Stop</button>
                */}
                { this.state.gameOver ?  (
                       <div>Game Over</div>
                ):
                        null
                }
            </div>
        )
    }
}

export default Canvas;