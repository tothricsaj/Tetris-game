import { shallow } from 'enzyme';
import GameView from './GameView.js';

describe('Test the jest running', () => {
    test('Check the file', () => {
        expect(true).toBeTruthy();
    })
});

describe('Unit test of GameView', () => {
    it('', () => {
        const wrapper = shallow(<GameView />);
        expect(wrapper.find('#canvas')).toBe(1);
    });
});
