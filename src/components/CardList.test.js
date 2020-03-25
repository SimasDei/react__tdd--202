import React from 'react';
import { shallow } from 'enzyme';

import CardList from './CardList';

it('should render CardList component', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'Mister Sir',
			username: 'MrSr',
			email: 'mister@sir.gentleman',
		},
	];
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
