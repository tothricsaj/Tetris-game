import { TBlock, SBlock, ZBlock, OBlock, IBlock, TestBlock } from './Blocks.js';

export class BlockBuilder {

        constructor(heightOfCanvas) {
        this.startingPosX = Math.floor(heightOfCanvas / 2)
        this.tmpFlag = true

        console.log(this.startingPosX)
    }

    builder(block, ctx) {

        if(this.tmpFlag) console.table(block)

        this.tmpFlag = false

        ctx.fillStyle = block.color;
        ctx.fillRect((block.x1 * 10), (block.y1 * 10), block.width, block.height);
        
        ///////////////////////////////////////////////////////////////
        //            ATTENTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!           /
        // After test, you ought to uncomment the following rows!!!!! /
        ///////////////////////////////////////////////////////////////
       
        ctx.fillRect(block.x2 * 10, block.y2 * 10, block.width, block.height);
        ctx.fillRect(block.x3 * 10, block.y3 * 10, block.width, block.height);
        ctx.fillRect(block.x4 * 10, block.y4 * 10, block.width, block.height);
    }

    block(type) {
        let blockType = null;

        switch(type) {
            case 'Ttype':

                blockType = 'Ttype';
                return new TBlock(this.startingPosX);

            case 'Stype':
                
                blockType = 'Stype';
                return new SBlock(this.startingPosX);

            case 'Ztype':
                
                blockType = 'Ztype';
                return new ZBlock(this.startingPosX);

            case 'Otype':
                
                blockType = 'Otype';
                return new OBlock(this.startingPosX);

            case 'Itype':
                
                blockType = 'Itype';
                return new IBlock(this.startingPosX);

            case 'Testtype':
                
                blockType = 'TestType';
                return new TestBlock();


            default:
                return 'No set type'
        }

        return blockType;
    }
}
