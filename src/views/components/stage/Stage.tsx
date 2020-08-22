import React, {
	ReactElement,
	Fragment,
	Children,
	createContext,
	useCallback,
	useState,
} from 'react';

import styled, { css, keyframes } from 'styled-components';

import { delay } from 'utils';

import { SceneProps } from 'views/components/stage/Scene';

interface StageProps {
	initialSlug: string;
	children?: ReactElement<SceneProps>[] | ReactElement<SceneProps>;
}

interface StageContextType {
	goTo?: (slug?: string) => void;
	prev?: () => void;
	next?: () => void;
	busy?: boolean;
}

const InitialStageContext = {
	goTo: undefined,
	prev: undefined,
	back: undefined,
	busy: false,
};

export const StageContext = createContext<StageContextType>(
	InitialStageContext
);

const SceneTransitionIn = keyframes`
	0% { opacity: 0; }
	100% { opacity: 1; }
`;

const SceneTransitionOut = keyframes`
	0% {
		opacity: 1;
	}

	100% {
		opacity: 0;
	}
`;

interface SceneTransitionProps {
	transitionState: string;
	onAnimationEnd: () => void;
}

const SceneTransition = styled.div<SceneTransitionProps>`
	height: 100vh;
	width: 100vw;

	${({ transitionState }) =>
		transitionState === 'in' &&
		css`
			animation: ${SceneTransitionIn} 1.5s ease;
		`};

	${({ transitionState }) =>
		transitionState === 'out' &&
		css`
			animation: ${SceneTransitionOut} 1.5s ease;
		`};
`;

export default function Stage({
	children,
	initialSlug,
}: StageProps): JSX.Element {
	const [busy, setBusy] = useState(false);
	const [transitionState, setTransitionState] = useState('in');

	const filteredChildren = Children.toArray(children);
	const numChildren: number = filteredChildren.length;

	const initialIndex =
		filteredChildren.findIndex(
			(child) => (child as ReactElement).props?.slug === initialSlug
		) ?? 0;

	const [currentIndex, setCurrentIndex] = useState(initialIndex);

	const currentScene = (filteredChildren.length > 0
		? filteredChildren.find((child, n) => n === currentIndex)
		: null) as ReactElement;

	let childProps: SceneProps = {
		slug: '',
		component: <Fragment />,
		canGoBack: true,
		onPrev: () => Promise.resolve(true),
		prevSlug: undefined,
		canGoNext: true,
		onNext: () => Promise.resolve(true),
		nextSlug: undefined,
	};

	if (currentScene && currentScene?.hasOwnProperty('props')) {
		childProps = currentScene.props;
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
		async (slug) => {
			const nextIndex = filteredChildren.findIndex(
				(child) => (child as ReactElement).props?.slug === slug
			);

			if (transitionState === 'idle') {
				setTransitionState('out');
				await delay(1700);
			}

			if (nextIndex >= 0) {
				setCurrentIndex(nextIndex);
			}
		},
		[filteredChildren, transitionState]
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

		if (transitionState === 'idle') {
			setTransitionState('out');
			await delay(1000);
		}

		if (prevSlug) {
			goTo(prevSlug);
		} else if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	}, [
		currentIndex,
		setBusy,
		canGoBack,
		onPrev,
		prevSlug,
		goTo,
		transitionState,
	]);

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

		if (transitionState === 'idle') {
			setTransitionState('out');
			await delay(1000);
		}

		if (nextSlug) {
			goTo(nextSlug);
		} else if (currentIndex + 1 !== numChildren) {
			setCurrentIndex(currentIndex + 1);
		}
	}, [
		numChildren,
		currentIndex,
		setBusy,
		canGoNext,
		onNext,
		nextSlug,
		goTo,
		transitionState,
	]);

	const contextValue: StageContextType = { next, prev, goTo, busy };

	const handleTransitionChange = useCallback(() => {
		if (transitionState === 'in') {
			setTransitionState('idle');
		}
	}, [transitionState]);

	return (
		<StageContext.Provider value={contextValue}>
			<SceneTransition
				transitionState={transitionState}
				onAnimationEnd={handleTransitionChange}>
				{currentScene}
			</SceneTransition>
		</StageContext.Provider>
	);
}
