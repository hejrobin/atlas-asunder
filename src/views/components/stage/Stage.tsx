import React, {
	createContext,
	useCallback,
	useState,
	ReactElement,
	Fragment,
	Children,
} from 'react';

import styled, { css, keyframes } from 'styled-components';

import { delay } from 'utils';

import { SceneProps } from 'views/components/stage/Scene';

interface StageProps {
	children?: ReactElement<SceneProps>[] | ReactElement<SceneProps>;
}

interface StageContextType {
	goTo: (slug?: string) => void;
	prev: () => void;
	next: () => void;
	busy: boolean;
}

const InitialStageContext = {
	goTo: () => {},
	prev: () => {},
	next: () => {},
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

const SceneTransition = styled.main<SceneTransitionProps>`
	height: 100vh;
	width: 100vw;
	overflow: auto;
	display: grid;
	align-items: center;

	::-webkit-scrollbar {
		width: 6px;
	}

	::-webkit-scrollbar-track {
		background: none;
	}

	::-webkit-scrollbar-thumb {
		background: rgb(60, 60, 60);
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: rgb(180, 180, 180);
	}

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

export default function Stage({ children }: StageProps): JSX.Element {
	const [busy, setBusy] = useState(false);
	const [transitionState, setTransitionState] = useState('in');
	const [currentIndex, setCurrentIndex] = useState(2);

	const filteredChildren = Children.toArray(children);
	const numChildren: number = filteredChildren.length;

	let currentScene = (filteredChildren.length > 0
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

	currentScene = React.cloneElement(currentScene, {
		key: currentScene.props?.slug,
	});

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
		async (slug?: string) => {
			const nextIndex = filteredChildren.findIndex(
				(child) => (child as ReactElement).props?.slug === slug
			);

			if (transitionState === 'idle') {
				setTransitionState('out');
				await delay(1500);
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
			await delay(1500);
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
			await delay(1500);
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
		<SceneTransition
			transitionState={transitionState}
			onAnimationEnd={handleTransitionChange}>
			<StageContext.Provider value={contextValue}>
				{currentScene}
			</StageContext.Provider>
		</SceneTransition>
	);
}
