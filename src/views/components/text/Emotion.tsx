import styled from 'styled-components';

import Paragraph from 'views/components/text/Paragraph';

const Emotion = styled(Paragraph)`
	font-family: 'IM Fell English', georgia, serif;
	font-style: italic;
	font-size: 1.6rem;
	color: rgb(100, 100, 100);

	&::before {
		content: '(';
	}

	&::after {
		content: ')';
	}
`;

export default Emotion;
