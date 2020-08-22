import React from 'react';

import Wrapper from 'views/components/text/Wrapper';
import Paragraph from 'views/components/text/Paragraph';

export default function A1S2B(): JSX.Element {
	return (
		<Wrapper>
			<Paragraph>
				%player.name% slowly make %player.pronoun.assertive% way to the kitchen.
			</Paragraph>
		</Wrapper>
	);
}
