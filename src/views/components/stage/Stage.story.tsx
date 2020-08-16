import React, { useContext } from 'react';

import { Story, Meta } from '@storybook/react';

import Choice from 'views/components/form/Choice';

import Stage, { StageContext } from './Stage';
import Scene from './Scene';

export default {
	title: 'Stage',
	component: Stage,
} as Meta;

function IntroScene(): JSX.Element {
	const { goTo } = useContext(StageContext);

	const goToFoo = () => goTo('foo');
	const goToBar = () => goTo('bar');

	return (
		<div>
			<Choice onClick={goToFoo}>Choose Foo</Choice>
			<Choice onClick={goToBar}>Choose Bar</Choice>
		</div>
	);
}

function FooScene(): JSX.Element {
	const { prev } = useContext(StageContext);
	return (
		<div>
			<h1>Foo</h1>
			<Choice onClick={prev}>Back</Choice>
		</div>
	);
}

function BarScene(): JSX.Element {
	const { next } = useContext(StageContext);

	return (
		<div>
			<h1>Bar</h1>
			<Choice onClick={next}>Finish</Choice>
		</div>
	);
}

const Template: Story = () => (
	<Stage>
		<Scene slug="intro">
			<IntroScene />
		</Scene>
		<Scene slug="foo">
			<FooScene />
		</Scene>
		<Scene slug="bar">
			<BarScene />
		</Scene>
		<Scene slug="ending">The End!</Scene>
	</Stage>
);

export const Primary = Template.bind({});

Primary.args = {};
