import React from 'react';
import {shallow} from 'enzyme';
import {InfoModal} from './info-modal';
import {TOGGLE_INFO_MODAL} from '../actions';

describe('<InfoModal />', () => {
	it('renders', () => {
		shallow(<InfoModal />);
	});

	it('hides the modal', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(
			<InfoModal dispatch={dispatch} />);
		const link = wrapper.find('.close');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(dispatch).toHaveBeenCalled();
		expect(dispatch.mock.calls[0][0].type).toEqual(TOGGLE_INFO_MODAL);
	});
});