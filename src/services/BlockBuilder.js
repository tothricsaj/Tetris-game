import { TBlock, SBlock, ZBlock, OBlock, IBlock, TestBlock } from './Blocks.js';

export class BlockBuilder {
    constructor() {
        this.a = 42;
        this.self = this;
    }

    builder(block, ctx) {
        ctx.fillStyle = block.color;
        ctx.fillRect((block.x1 * 10), (block.y1 * 10), block.width, block.height);
        
        ///////////////////////////////////////////////////////////////
        //            ATTENTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!           /
        // After test, you ought to uncomment the following rows!!!!! /
        ///////////////////////////////////////////////////////////////
       
        // ctx.fillRect(block.x2, block.y2, block.width, block.height);
        // ctx.fillRect(block.x3, block.y3, block.width, block.height);
        // ctx.fillRect(block.x4, block.y4, block.width, block.height);
    }

    block(type) {
        let blockType = null;

        switch(type) {
            case 'Ttype':

                blockType = 'Ttype';
                return new TBlock();

            case 'Stype':
                
                blockType = 'Stype';
                return new SBlock();

            case 'Ztype':
                
                blockType = 'Ztype';
                return new ZBlock();

            case 'Otype':
                
                blockType = 'Otype';
                return new OBlock();

            case 'Itype':
                
                blockType = 'Itype';
                return new IBlock();

            case 'Testtype':
                
                blockType = 'TestType';
                return new TestBlock();


            default:
                return 'No set type'
        }

        return blockType;
    }
}
