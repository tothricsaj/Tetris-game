import { BlockBuilder } from '../services/BlockBuilder.js';

class GameRender {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.bb = new BlockBuilder();
    }


    init(canvasRef) {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        let tBlock = BlockBuilder.prototype.block('Ttype', ctx);

        ctx.save();

        BlockBuilder.prototype.builder(tBlock, ctx);

        tBlock.moveDown();

        ctx.restore();

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
