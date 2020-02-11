import { TBlock, SBlock, ZBlock } from './Blocks.js';

export class BlockBuilder {
    constructor() {
        this.a = 42;
        this.self = this;
    }

    builder(block, ctx) {
        ctx.fillStyle = block.color;
        ctx.fillRect(block.x1, block.y1, block.width, block.height);
        ctx.fillRect(block.x2, block.y2, block.width, block.height);
        ctx.fillRect(block.x3, block.y3, block.width, block.height);
        ctx.fillRect(block.x4, block.y4, block.width, block.height);
    }

    block(type) {
        let params = null;
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
                params = {
                    color: 'rgb(230, 140, 180)',
                    x1: 110, y1: 30,
                    x2: 120, y2: 30,
                    x3: 110, y3: 40,
                    x4: 120, y4: 40,
                    width: 10, height: 10
                }
                
                blockType = 'Otype';

                break;
            case 'Itype':
                params = {
                    color: 'rgb(140, 180, 100)',
                    x1: 140, y1: 10,
                    x2: 140, y2: 20,
                    x3: 140, y3: 30,
                    x4: 140, y4: 40,
                    width: 10, height: 10
                }
                
                blockType = 'Itype';

                break;


            default:
                return 'No set type'
        }

        return blockType;
    }
}
