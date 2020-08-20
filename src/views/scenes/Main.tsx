import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { assetPath } from 'utils';
import useStageContext from 'utils/useStageContext';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;
`;

const BackdropAnimation = keyframes`
	from {
		opacity: 0;
		transform: scale(1.5);
	}

	to {
		opacity: .5;
		transform: scale(1);
	}
`;

const Backdrop = styled.div`
	background: url('${assetPath('images/backdrop-texture.png')}') no-repeat;
	background-size: cover;
	width: 100vw;
	height: 100vh;
	display: grid;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	opacity: .5;
	animation: ${BackdropAnimation} 20s ease;
	animation-fill-mode: forwards;
	position: absolute;
	left: 0;
	top: 0;
`;

const MapTextureAnimation = keyframes`
	from {
		opacity: 0;
		transform: scale(1.5);
	}

	to {
		opacity: .5;
		transform: scale(1);
	}
`;

const MapTexture = styled.div`
	background: url('${assetPath('images/map-texture.png')}') no-repeat;
	background-size: cover;
	width: 100vw;
	height: 100vh;
	display: grid;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	opacity: .5;
	animation: ${MapTextureAnimation} 10s ease;
	animation-fill-mode: forwards;
	position: absolute;
	left: 0;
	top: 0;
`;

const TitleAnimation = keyframes`
	from {
		opacity: 0;
		transform: scale(4);
	}

	to {
		opacity: 1;
		transform: scale(1);
	}
`;

const Title = styled.h1`
	font-family: Abel, helvetica, sans-serif;
	font-size: 8rem;
	text-transform: uppercase;
	animation: ${TitleAnimation} 10s ease;
	animation-fill-mode: forwards;
`;

const ContinueAnimation = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

const Continue = styled.h1`
	width: 100vw;
	font-size: 1rem;
	letter-spacing: 0.2rem;
	word-spacing: 0.5rem;
	text-transform: uppercase;
	text-align: center;
	position: absolute;
	bottom: 10vh;
	opacity: 0;
	animation: ${ContinueAnimation} 2s ease 10s;
	animation-fill-mode: forwards;
`;

export default function Main(): JSX.Element {
	const { next } = useStageContext();

	const [canContinue, setCanContinue] = useState(false);

	setTimeout(() => setCanContinue(true), 10 * 1000);

	const handleClick = () => {
		if (!canContinue) return;

		if (next instanceof Function) {
			next();
		}
	};

	return (
		<Wrapper onClick={handleClick}>
			<Backdrop />
			<MapTexture />
			<Title>Atlas Asunder</Title>
			<Continue>Click anywhere to start</Continue>
		</Wrapper>
	);
}
