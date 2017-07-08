import React from 'react';
import {shallow} from 'enzyme';
import {GuessSection} from './guess-section';

describe('<GuessSection />', () => {
	it('renders', () => {
		shallow(<GuessSection />);
	});

	it('gives feedback', () => {
		const feedback = 'you suck';
		const wrapper = shallow(<GuessSection feedback={feedback} />);
		expect(wrapper.contains(feedback)).toEqual(true);
	});
});