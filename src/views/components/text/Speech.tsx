import React, { ReactNode } from 'react';

import styled from 'styled-components';

import QuillText from 'views/components/QuillText';
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
	className?: string;
}

export default function Speech({
	source,
	className,
	children,
}: SpeechProps): JSX.Element {
	return (
		<Wrapper className={className}>
			<cite>
				<QuillText>{children}</QuillText>
			</cite>
			{source && (
				<span>
					<QuillText>{source}</QuillText>
				</span>
			)}
		</Wrapper>
	);
}
