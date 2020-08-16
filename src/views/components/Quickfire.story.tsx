import React, { useState } from 'react';
import styled from 'styled-components';

import { Story, Meta } from '@storybook/react';

import Choice from './Choice';
import Quickfire, { QuickfireProps } from './Quickfire';

const Wrapper = styled.div`
	padding: 5rem;
`;

export default {
	title: 'Quickfire',
	component: Quickfire,
} as Meta;

const Template: Story<QuickfireProps> = (args) => {
	const [isVisible, setVisible] = useState(false);

	const showQuickfire = () => setVisible(true);
	const hideQuickfire = () => setVisible(false);

	return (
		<Wrapper>
			{!isVisible && <Choice onClick={showQuickfire}>Show Quickfire</Choice>}
			{isVisible && <Quickfire {...args} onEnded={hideQuickfire} />}
		</Wrapper>
	);
};

export const Primary = Template.bind({});

Primary.args = {
	timeLimit: 10,
};
