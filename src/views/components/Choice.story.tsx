import React from 'react';

import { Story, Meta } from '@storybook/react';

import Choice, { ChoiceProps } from './Choice';

export default {
	title: 'Choice',
	component: Choice,
} as Meta;

const Template: Story<ChoiceProps> = (args) => (
	<Choice {...args}>
		<span>Hello World</span>
	</Choice>
);

export const Primary = Template.bind({});

Primary.args = {
	active: false,
};

export const WithBackdrop = Template.bind({});

WithBackdrop.args = {
	active: false,
	backdropUrl: 'http://placekitten.com/500/500',
};
