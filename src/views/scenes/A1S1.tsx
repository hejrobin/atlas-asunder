import React from 'react';

import Text from 'views/components/Text';
import Paragraph from 'views/components/Paragraph';

import Button from 'views/components/form/Button';

import useStageContext from 'utils/useStageContext';

export default function A1S1(): JSX.Element {
	const { next } = useStageContext();

	return (
		<Text>
			<Paragraph>This is the first paragraph...</Paragraph>
			<Paragraph>And this is the second.</Paragraph>
			<Paragraph>Should add highlighted words and actor lines.</Paragraph>
			<Paragraph>Yeah...</Paragraph>
			<Paragraph>
				<Button label="Continue" onClick={next} />
			</Paragraph>
		</Text>
	);
}
