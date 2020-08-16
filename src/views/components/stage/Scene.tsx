import React, { ReactNode } from 'react';
import styled from 'styled-components';

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

interface WrapperProps {
	slug: string;
}

const Wrapper = styled.div<WrapperProps>``;

export default function Scene({ children, slug }: SceneProps): JSX.Element {
	return <Wrapper slug={slug}>{children}</Wrapper>;
}
