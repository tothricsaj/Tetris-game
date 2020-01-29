import { BlockBuilder } from '../services/BlockBuilder.js';

class GameRender {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.bb = new BlockBuilder();
    }


    init() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        if(this.canvas.getConext) {
            this.ctx = this.canvas.getContext('2d');
        }
    }

    testDraw() {
        // this.ctx.fillStyle = 'rgb(30, 140, 180)';
        // this.ctx.fillRect(30, 30, 40, 40);
        //

        this.bb.block('Ttype', this.ctx);
        this.bb.block('Stype', this.ctx);
        this.bb.block('Otype', this.ctx);

    }
}

export default GameRender;
