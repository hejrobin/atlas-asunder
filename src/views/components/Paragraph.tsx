import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const AppearAnimation = keyframes`
	0% {
		opacity: 0;
		transform: translateY(.3rem);
	};

	100% {
		opacity: 1;
		transform: translateY(0);
	};
`;

const Wrapper = styled.div`
	opacity: 0;
	animation: ${AppearAnimation} 1s ease;
	animation-fill-mode: forwards;
	font-size: 1.6rem;
	line-height: 1.5;

	&:nth-child(2) {
		animation-delay: 2s;
	}

	&:nth-child(3) {
		animation-delay: 4s;
	}

	&:nth-child(4) {
		animation-delay: 6s;
	}

	&:nth-child(5) {
		animation-delay: 8s;
	}

	&:nth-child(6) {
		animation-delay: 10s;
	}

	&:nth-child(7) {
		animation-delay: 12s;
	}

	&:nth-child(8) {
		animation-delay: 14s;
	}

	&:nth-child(9) {
		animation-delay: 16s;
	}
`;

interface ParagraphProps {
	children: ReactNode;
}

export default function Paragraph({ children }: ParagraphProps): JSX.Element {
	return <Wrapper>{children}</Wrapper>;
}
