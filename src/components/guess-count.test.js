import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
	it('renders', () => {
		shallow(<GuessCount count={0} />);
	});

	it('updates count when guess is made', () => {
		const guess = 10;
		const wrapper = shallow(<GuessCount count={guess} />);
		expect(wrapper.text()).toEqual(`Guess #${guess}!`);;
	})
})