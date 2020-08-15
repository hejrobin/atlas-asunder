import React, { ReactNode, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

export interface QuickfireProps {
	timeLimit: number;
	onEnded?: () => void;
}

interface ComponentProps {
	duration: number;
	ended: boolean;
	children?: ReactNode;
}

const BarAnimation = keyframes`
	from {
		background-color: rgb(255, 255, 255);
		transform: scaleX(1);
	}

	to {
		background-color: rgb(255, 62, 72);
		transform: scaleX(0);
	}
`;

const SquareAnimation = keyframes`
	from {
		color: rgb(255, 255, 255);
	}

	to {
		color: rgb(255, 62, 72);
	}
`;

const DisappearAnimation = keyframes`
	from {
		color: rgb(255, 255, 255);
		transform: scale(1);
		opacity: 1;
	}

	to {
		color: rgb(255, 0, 0);
		transform: scale(0);
		opacity: 0;
	}
`;

const Component = styled.div<ComponentProps>`
	background: rgb(50, 50, 50);
	color: currentColor;
	width: 100%;
	height: 0.1rem;
	position: relative;
	border-radius: 1rem;

	${({ ended }) =>
		ended &&
		css`
			animation: ${DisappearAnimation} 400ms ease-in-out;
			animation-fill-mode: forwards;
		`}

	var {
		display: block;
		width: 3rem;
		height: 3rem;
		position: absolute;
		left: 50%;
		top: 50%;
		font-size: 1rem;
		font-weight: 700;
		color: currentColor;
		transform: translate(-50%, -50%);
		text-align: center;
		line-height: 2.9rem;
		z-index: 2;
	}

	&:before {
		content: '';
		display: block;
		width: 3rem;
		height: 3rem;
		position: absolute;
		left: 50%;
		top: 50%;
		background: rgba(0, 0, 0, 0.8);
		box-shadow: inset currentColor 0 0 0 0.1rem, rgba(0, 0, 0, 0.5) 0 0 0 0.3rem,
			rgba(0, 0, 0, 0.5) 0 0 0 0.6rem;
		transform: translate(-50%, -50%) rotate(45deg);
		text-align: center;
		line-height: 3rem;
		z-index: 2;

		${({ duration }) =>
			duration > 0 &&
			css`
				animation: ${SquareAnimation} ${duration}s linear;
				animation-fill-mode: forwards;
			`}
	}

	&:after {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-color: rgb(255, 255, 255);
		border-radius: 1rem;

		${({ duration }) =>
			duration > 0 &&
			css`
				animation: ${BarAnimation} ${duration}s linear;
				animation-fill-mode: forwards;
			`}
	}
`;

export default function Quickfire({
	timeLimit,
	onEnded,
}: QuickfireProps): JSX.Element {
	const [timeLeft, setTimeLeft] = useState(timeLimit);
	const [didEnd, setDidEnd] = useState(false);

	const emitDidEnd = () => {
		if (!didEnd) {
			setDidEnd(true);

			if (onEnded instanceof Function) {
				setTimeout(onEnded, 1000);
			}
		}
	};

	useEffect(() => {
		const interval = setInterval(
			() => setTimeLeft((timeLeft) => timeLeft - 1),
			1000
		);

		if (timeLeft === 0) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [timeLeft]);

	return (
		<Component
			duration={timeLimit - 0.5}
			ended={didEnd}
			onAnimationEnd={emitDidEnd}>
			<var>{timeLeft}</var>
		</Component>
	);
}

Quickfire.propTypes = {
	timeLimit: PropTypes.number.isRequired,
	onEnded: PropTypes.func,
};
