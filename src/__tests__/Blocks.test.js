import { Block } from '../services/Blocks.js';

describe('The Blocks', () => {
    it('The parent block', () => {
        let block = new Block();

        expect(Array.isArray(block.getXDimensions())).toBeTruthy();
        expect(block.getXDimensions().length).toEqual(4);

        expect(Array.isArray(block.getYDimensions())).toBeTruthy();
        expect(block.getYDimensions().length).toEqual(4);

        block.x1 = 10;
        block.x2 = 10;
        block.x3 = 10;
        block.x4 = 10;

        block.moveDown(10);

        expect(block.x1).toBe(20);
        expect(block.x2).toBe(20);
        expect(block.x3).toBe(20);
        expect(block.x4).toBe(20);
    });
});
