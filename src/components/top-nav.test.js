import React from 'react'
import {shallow} from 'enzyme';
import {TopNav} from './top-nav';
import {NEW_GAME, TOGGLE_INFO_MODAL} from '../actions';

describe('<TopNav />', () => {
	it('renders', () => {
		shallow(<TopNav />);
	});

	it('dispatches newGame from newGame', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(
			<TopNav dispatch={dispatch} />);
		const link = wrapper.find('.new');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(dispatch).toHaveBeenCalled();
		expect(dispatch.mock.calls[0][0].type).toEqual(NEW_GAME);
	});

	it('dispatches toggleInfoModal from toggleInfoModal', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(
		<TopNav dispatch={dispatch} />);
		const link = wrapper.find('.what');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(dispatch).toHaveBeenCalled();
		expect(dispatch.mock.calls[0][0].type).toEqual(TOGGLE_INFO_MODAL);
	});
});