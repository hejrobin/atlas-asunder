import React from 'react';

import Wrapper from 'views/components/text/Wrapper';
import Paragraph from 'views/components/text/Paragraph';

export default function A1S2A(): JSX.Element {
	return (
		<Wrapper>
			<Paragraph>You woke up %partner.name%.</Paragraph>
		</Wrapper>
	);
}
