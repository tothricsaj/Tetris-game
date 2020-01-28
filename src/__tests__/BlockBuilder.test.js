import { BlockBuilder } from '../services/BlockBuilder.js';

const bb = new BlockBuilder();

describe('BlockBuilder features :)', () => {
    it('Blocks', () => {
        let ctx = document.getElementById('canvas').getContext('2d');
        expect(bb.block('Ttype', ctx)).toEqual('Ttype');
        expect(bb.block('Stype', ctx)).toEqual('Stype');
        expect(bb.block('Otype', ctx)).toEqual('Otype');
        expect(bb.block('Itype', ctx)).toEqual('Itype');
    });
});
