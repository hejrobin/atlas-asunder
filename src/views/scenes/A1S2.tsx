import React from 'react';

import Text from 'views/components/Text';
import Paragraph from 'views/components/Paragraph';

import Button from 'views/components/form/Button';

export default function A1S2(): JSX.Element {
	return (
		<Text>
			<Paragraph>Yeah...</Paragraph>
			<Paragraph>
				<Button label="Continue" />
			</Paragraph>
		</Text>
	);
}
