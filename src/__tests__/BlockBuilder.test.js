const { createCanvas } = require('canvas');
const canvas = createCanvas(200, 200);
const ctx = canvas.getContext('2d');
// const BlockBuilder = require('../services/BlockBuilder.js');

import { BlockBuilder } from '../services/BlockBuilder.js';

const bb = new BlockBuilder();

describe('BlockBuilder features :)', () => {
    it('Blocks', () => {
        expect(bb.block('Ttype', ctx)).toEqual('Ttype');
        expect(bb.block('falseType', ctx)).toEqual('No set type');
        expect(bb.block('Stype', ctx)).toEqual('Stype');
        expect(bb.block('Otype', ctx)).toEqual('Otype');
        expect(bb.block('Itype', ctx)).toEqual('Itype');
    });
});
