import React from 'react';
import {shallow} from 'enzyme';
import {Header} from './header';
import infoModal from './info-modal';

describe('<Header />', () => {
	it('renders', () => {
		shallow(<Header />);
	});

	it('shows the modal', () => {
		const wrapper = shallow(<Header showInfoModal={false} />);
		expect(wrapper.find(infoModal).exists()).toEqual(false);		
	});

	it('doesn\'t show the modal', () => {
		const wrapper = shallow(<Header showInfoModal={true} />);
		expect(wrapper.find(infoModal).exists()).toEqual(true);
	});
});