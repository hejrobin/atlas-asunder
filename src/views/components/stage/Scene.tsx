import React, { Fragment, ReactNode } from 'react';

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

export default function Scene({ children }: SceneProps): JSX.Element {
	return <Fragment>{children}</Fragment>;
}
