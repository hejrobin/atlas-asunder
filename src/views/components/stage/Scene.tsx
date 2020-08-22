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
	margin: 0 auto;
	padding: 4rem;
	max-width: 72rem;
`;

export default function Scene({ slug, component }: SceneProps): JSX.Element {
	return <Wrapper>{component}</Wrapper>;
}
