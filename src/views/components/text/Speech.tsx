import React, { ReactNode } from 'react';

import styled from 'styled-components';

import Paragraph from 'views/components/text/Paragraph';

const Wrapper = styled(Paragraph)`
	text-indent: 2rem;
	font-style: italic;

	cite {
		&::before {
			content: open-quote;
		}

		&::after {
			content: close-quote;
		}
	}

	span {
		padding-left: 1rem;
		text-indent: 0;
		font-size: 1.6rem;
		font-style: normal;
		display: inline-block;
	}
`;

interface SpeechProps {
	children?: ReactNode;
	source?: string;
	tone?: string;
	className?: string;
}

export default function Speech({
	source,
	tone,
	className,
	children,
}: SpeechProps): JSX.Element {
	return (
		<Wrapper>
			<cite>{children}</cite>
			{source && <span>{(tone ?? '').replace('%s', source)}</span>}
		</Wrapper>
	);
}
