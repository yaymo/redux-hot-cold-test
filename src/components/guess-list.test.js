import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessList} from './guess-list';

describe('<GuessList />', () => {
	it('renders', () => {
		shallow(<GuessList guesses={[]} />);
	});

	it('shows the guesses', () => {
		const guesses = [1, 2, 3, 4];
		const wrapper = shallow(<GuessList guesses={guesses} />);
		const items = wrapper.find('li');
		expect(items.length).toEqual(guesses.length);
		guesses.forEach((guess, index) => {
			expect(items.at(index).text()).toEqual(guess.toString());
		});
	});
});