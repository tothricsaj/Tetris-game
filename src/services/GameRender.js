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

        
        let tBlock = this.bb.block('Ttype', this.ctx);

        this.ctx.save();

        this.bb.builder(tBlock, this.ctx);

        tBlock.moveDown();

        this.ctx.restore();

        console.log(this.canvas);

        window.requestAnimationFrame(GameRender.prototype.init);
    }

    testDraw() {
        // this.ctx.fillStyle = 'rgb(30, 140, 180)';
        // this.ctx.fillRect(30, 30, 40, 40);
        //

        let tBlock = this.bb.block('Ttype', this.ctx);
        this.bb.builder(tBlock, this.ctx);
    }

    gameLoop() {
        
    }
}

export default GameRender;
