import React from 'react';
import { shallow } from 'enzyme';
import GameView from './GameView.js';

describe('Test the jest running', () => {
    test('Check the file', () => {
        expect(true).toBeTruthy();
    })
});

describe('Unit test of GameView', () => {
    it('GameView - canvas', () => {
        const wrapper = shallow(<GameView />);
        console.log(wrapper.find('#canvas').length);
        expect(wrapper.find('#canvas').length).toEqual(1);
    });
});
