import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import { StageContext } from 'views/components/stage/Stage';

import Title from 'views/components/Title';

const HideAnimation = keyframes`
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
`;

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;
	animation: ${HideAnimation} 1s ease;
	animation-delay: 2s;
`;

export default function Prologue(): JSX.Element {
	const { next } = useContext(StageContext);

	return (
		<Wrapper onAnimationEnd={next}>
			<Title prefix="Prologue" heading="Torn asunder" />
		</Wrapper>
	);
}
