import React from 'react';
import { shallow } from 'enzyme';

import CounterButton from './CounterButton';

const mockColor = 'orangered';
const Component = shallow(<CounterButton color={mockColor} />);

it('should render CounterButton component', () => {
	expect(Component).toMatchSnapshot();
});

it('correctly increments the counter', () => {
	Component.find('[id="counter"]').simulate('click');
	expect(Component.state()).toEqual({ count: 2 });
	expect(Component.props().color).toEqual(mockColor);
});
