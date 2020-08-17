import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

export interface SceneProps {
	children: ReactNode;
	slug: string;

	canGoBack?: boolean;
	onPrev?: () => Promise<boolean>;
	prevSlug?: string;

	canGoNext?: boolean;
	onNext?: () => Promise<boolean>;
	nextSlug?: string;
}

const AppearAnimation = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

const Wrapper = styled.div`
	animation: ${AppearAnimation} 500ms ease;
`;

export default function Scene({ children }: SceneProps): JSX.Element {
	return <Wrapper>{children}</Wrapper>;
}
