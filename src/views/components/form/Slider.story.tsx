import React from 'react';

import { Story, Meta } from '@storybook/react';

import Slider, { SliderProps } from './Slider';

export default {
	title: 'Slider',
	component: Slider,
} as Meta;

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	min: 0,
	max: 100,
	step: 1,
	value: 0,
};
