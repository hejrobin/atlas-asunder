import React, {
	ReactElement,
	Children,
	createContext,
	useState,
	useCallback,
} from 'react';

import { SceneProps } from 'views/components/stage/Scene';

interface StageProps {
	children?: ReactElement<SceneProps>[] | ReactElement<SceneProps>;
}

interface StageContextType {
	goTo?: (slug?: string) => void;
	prev?: () => void;
	next?: () => void;
	busy?: boolean;
}

const InitialStageContext = {
	goTo: null,
	prev: null,
	back: null,
	busy: false,
};

export const StageContext = createContext<StageContextType>(
	InitialStageContext
);

export default function Stage({ children }: StageProps): JSX.Element {
	const [busy, setBusy] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const filteredChildren = Children.toArray(children);
	const numChildren: number = filteredChildren.length;

	const currentScene =
		filteredChildren.length > 0
			? filteredChildren.find((child, n) => n === currentIndex)
			: null;

	let childProps: SceneProps = {
		children: null,
		slug: '',
		canGoBack: true,
		onPrev: () => Promise.resolve(true),
		prevSlug: undefined,
		canGoNext: true,
		onNext: () => Promise.resolve(true),
		nextSlug: undefined,
	};

	if (
		currentScene &&
		currentScene?.hasOwnProperty('props') &&
		currentScene?.hasOwnProperty('slug')
	) {
		// @ts-ignore-start
		childProps = currentScene.props;
		// @ts-ignore-end
	}

	const {
		canGoBack,
		onPrev,
		prevSlug,
		canGoNext,
		onNext,
		nextSlug,
	} = childProps;

	const goTo = useCallback(
		(slug) => {
			const nextIndex = filteredChildren.findIndex(
				// @ts-ignore-start
				(child) => child.props?.slug === slug
				// @ts-ignore-end
			);

			if (nextIndex >= 0) {
				setCurrentIndex(nextIndex);
			}
		},
		[filteredChildren]
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

	const contextValue: StageContextType = { next, prev, goTo, busy };

	return (
		<StageContext.Provider value={contextValue}>
			{currentScene}
		</StageContext.Provider>
	);
}
