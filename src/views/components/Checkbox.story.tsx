import React from 'react';

import { Story, Meta } from '@storybook/react';

import Checkbox, { CheckboxProps } from './Checkbox';

export default {
	title: 'Checkbox',
	component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	name: 'test',
};
