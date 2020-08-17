import React from 'react';

import { Story, Meta } from '@storybook/react';

import Title from './Title';

export default {
	title: 'Title',
	component: Title,
} as Meta;

const Template: Story = (args) => <Title {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	prefix: 'Prologue',
	heading: 'Atlas Asunder',
};
