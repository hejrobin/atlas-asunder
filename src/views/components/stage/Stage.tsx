import React, { Children, createContext, useState, useCallback } from 'react';

interface StageProps {
	children: ReactNode;
}

export const StageContext = createContext({});

export default function Stage({ children }: StageProps): JSX.Element {
	children = Children.toArray(children).filter((n) => n);

	const numChildren: number = children.length;

	const [busy, setBusy] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const currentStep = children.find((child, n) => n === currentIndex);

	const {
		canGoBack,
		onPrev,
		prevSlug,

		canGoNext,
		onNext,
		nextSlug,
	} = currentStep ? currentStep.props : {};

	const goTo = useCallback(
		(slug) => {
			const index = children.findIndex((child) => child.props?.slug === slug);

			if (index >= 0) {
				setCurrentIndex(index);
			}
		},
		[children]
	);

	const prev = useCallback(async () => {
		let canContinue = canGoBack;

		if (onPrev instanceof Function) {
			setBusy(true);

			canContinue = await onPrev();

			setBusy(false);
		}

		if (canContinue === false) {
			return;
		}

		if (prevSlug) {
			goTo(prevSlug);
		} else if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	}, [currentIndex, setBusy, canGoBack, onPrev, prevSlug, goTo]);

	const next = useCallback(async () => {
		let canContinue = canGoNext;

		if (onNext instanceof Function) {
			setBusy(true);

			canContinue = await onNext();

			setBusy(false);
		}

		if (canContinue === false) {
			return;
		}

		if (nextSlug) {
			goTo(nextSlug);
		} else if (currentIndex + 1 !== numChildren) {
			setCurrentIndex(currentIndex + 1);
		}
	}, [numChildren, currentIndex, setBusy, canGoNext, onNext, nextSlug, goTo]);

	if (!currentStep) return null;

	return (
		<StageContext.Provider value={{ next, prev, goTo, busy }}>
			{currentStep}
		</StageContext.Provider>
	);
}
