import React from 'react';
import {mount, shallow} from 'enzyme';
import {GuessForm} from './guess-form'
import {makeGuess} from '../actions';

describe('<GuessForm />', () => {
	it('renders', () => {
		shallow(<GuessForm />);
	});

	it('submits a guess', () => {
		const dispatch = jest.fn();
		const wrapper = mount(<GuessForm dispatch={dispatch} />);
		const value = '5';
		wrapper.find('input[type="text"]').node.value = value;
		wrapper.simulate('submit');
		expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
	});

	// it('should clear input after submit', () => {
	// 	const wrapper = mount(<GuessForm dispatch={() => {}} />);
	// 	const input = wrapper.find('input[type="text"]');
	// 	input.node.value = 10;
	// 	wrapper.simulate('submit');
	// 	expect(input.node.value).toEqual('');
	// });
});