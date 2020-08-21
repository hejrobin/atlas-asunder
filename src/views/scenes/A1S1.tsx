import React from 'react';

import Button from 'views/components/form/Button';

import Actions from 'views/components/text/Actions';
import Wrapper from 'views/components/text/Wrapper';
import Paragraph from 'views/components/text/Paragraph';
import Setting from 'views/components/text/Setting';
import Emotion from 'views/components/text/Emotion';
import Speech from 'views/components/text/Speech';
import Clue from 'views/components/text/Clue';

export default function A1S1(): JSX.Element {
	return (
		<Wrapper>
			<Setting>This is a scene setting</Setting>
			<Speech source="The Dude" tone="said %s calmly.">
				I’m the Dude, so that’s what you call me. That or, uh His Dudeness, or
				uh Duder, or El Duderino, if you’re not into the whole brevity thing.
			</Speech>
			<Speech>This aggression will not stand, man.</Speech>
			<Paragraph>
				<Clue>That rug</Clue> really tied the room together.
			</Paragraph>
			<Emotion>The player exhales</Emotion>
			<Actions>
				<Button label="Continue" />
			</Actions>
		</Wrapper>
	);
}
