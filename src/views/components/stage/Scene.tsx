import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface SceneProps {
	slug: string;
	component: ReactElement;

	canGoBack?: boolean;
	onPrev?: () => Promise<boolean>;
	prevSlug?: string;

	canGoNext?: boolean;
	onNext?: () => Promise<boolean>;
	nextSlug?: string;
}

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
	align-items: center;
	justify-content: center;
	height: 100%;
	gap: 2rem;
`;

export default function Scene({ slug, component }: SceneProps): JSX.Element {
	return <Wrapper>{component}</Wrapper>;
}
