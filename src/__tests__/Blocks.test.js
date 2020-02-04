import { Block } from '../services/Blocks.js';

describe('The Blocks', () => {
    it('The parent block', () => {
        let block = new Block();

        expect(Array.isArray(block.getXDimensions())).toBeTruthy();
        expect(block.getXDimensions().length).toEqual(4);

        expect(Array.isArray(block.getYDimensions())).toBeTruthy();
        expect(block.getYDimensions().length).toEqual(4);
        
        /////////////////////////
        // testing moving down //
        /////////////////////////

        block.x1 = 10;
        block.x2 = 10;
        block.x3 = 10;
        block.x4 = 10;

        block.moveDown(10, 100);

        expect(block.x1).toBe(20);
        expect(block.x2).toBe(20);
        expect(block.x3).toBe(20);
        expect(block.x4).toBe(20);

        // test the edge of game place
        // it should not increment
        block.x1 = 100;
        block.x2 = 100;
        block.x3 = 100;
        block.x4 = 100;

        block.moveDown(10, 100);

        expect(block.x1).toBe(100);
        expect(block.x2).toBe(100);
        expect(block.x3).toBe(100);
        expect(block.x4).toBe(100);


        ///////////////////////
        // test moving right //
        ///////////////////////

        block.y1 = 10;
        block.y2 = 10;
        block.y3 = 10;
        block.y4 = 10;

        block.moveRight(10, 100);

        expect(block.y1).toBe(20);
        expect(block.y2).toBe(20);
        expect(block.y3).toBe(20);
        expect(block.y4).toBe(20);

        // test the edge of game place
        // it should not increment
        block.y1 = 100;
        block.y2 = 100;
        block.y3 = 100;
        block.y4 = 100;

        block.moveRight(10, 100);

        expect(block.y1).toBe(100);
        expect(block.y2).toBe(100);
        expect(block.y3).toBe(100);
        expect(block.y4).toBe(100);


        //////////////////////
        // test moving left //
        //////////////////////
        
        block.y1 = 20;
        block.y2 = 20;
        block.y3 = 20;
        block.y4 = 20;


        block.moveLeft(10);

        expect(block.y1).toBe(10);
        expect(block.y2).toBe(10);
        expect(block.y3).toBe(10);
        expect(block.y4).toBe(10);

        // test the edge of game place
        // it should not increment
        block.y1 = 0;
        block.y2 = 0;
        block.y3 = 0;
        block.y4 = 0;

        block.moveLeft(10, 0);

        expect(block.y1).toBe(0);
        expect(block.y2).toBe(0);
        expect(block.y3).toBe(0);
        expect(block.y4).toBe(0);

    });
});
