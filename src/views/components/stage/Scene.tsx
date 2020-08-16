import React from 'react';
import styled from 'styled-components';

type NoOpPromiseType = Promise<void>;

interface SceneProps {
	children: ReactNode;
	slug: string;

	canGoBack?: boolean;
	onPrev?: NoOpPromiseType;
	prevSlug?: string;

	canGoNext?: boolean;
	onNext?: NoOpPromiseType;
	nextSlug?: string;
}

interface WrapperProps {
	slug: string;
}

const Wrapper = styled.div<WrapperProps>``;

export default function Scene({ children, slug }: SceneProps): JSX.Element {
	return <Wrapper slug={slug}>{children}</Wrapper>;
}
