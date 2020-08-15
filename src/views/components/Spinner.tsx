import React, { FunctionComponent, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

interface WrapperProps {
	children: ReactNode;
}

const Wrapper = styled.div<WrapperProps>`
	width: 8rem;
	height: 8rem;
	transform: translate(-50%, -50%);
	position: fixed;
	left: 50%;
	top: 50%;
`;

const ContainerAnimation = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	z-index: 1000;
	animation: ${ContainerAnimation} 10s linear infinite;
`;

const Sun = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 1000rem;
	z-index: 1001;
	box-shadow: inset rgb(30, 30, 30) 0 0 0 0.2rem;
`;

const Rays = styled.div`
	position: absolute;
	background: rgba(0, 0, 0, 0);
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%) rotate(45deg);
	width: 100%;
	height: 100%;
	z-index: 1000;
	box-shadow: inset rgb(30, 30, 30) 0 0 0 0.2rem;
`;

const BoxAnimation = keyframes`
	from {
		transform: translate(-50%, -50%) rotate(0deg);
	}

	to {
		transform: translate(-50%, -50%) rotate(360deg);
	}
`;

const Box = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	width: 70%;
	height: 70%;
	z-index: 1001;
	animation: ${BoxAnimation} 20s linear infinite;
	animation-direction: reverse;
	box-shadow: inset rgb(30, 30, 30) 0 0 0 0.2rem;
`;

const Spinner: FunctionComponent = () => (
	<Wrapper>
		<Box />
		<Container>
			<Sun />
			<Rays />
		</Container>
	</Wrapper>
);

export default Spinner;
