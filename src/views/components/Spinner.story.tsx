import React from 'react';

import { Story, Meta } from '@storybook/react';

import Spinner from './Spinner';

export default {
	title: 'Spinner',
	component: Spinner,
} as Meta;

const Template: Story = () => <Spinner />;

export const Primary = Template.bind({});
