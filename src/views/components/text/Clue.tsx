import React, { useState, ReactNode, ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

import Action from 'views/components/text/Action';

type NoOpType = () => void;

const Wrapper = styled(Action)`
	background-color: rgb(239, 224, 148, 0.05);
	color: rgb(239, 224, 148);
	position: relative;

	&:hover {
		background-color: rgb(239, 224, 148, 0.05);
		color: rgb(239, 224, 148);
	}
`;

const PopupAnimation = keyframes`
	from {
		opacity: 0;
		transform: scale(.9);
	}

	to {
		opacity: 1;
		transform: scale(1);
	}
`;

const PopupWrapper = styled.div`
	position: absolute;
	bottom: calc(100% + 1rem);
	left: 50%;
	transform: translateX(-50%);
`;

const Popup = styled.div`
	padding: 0.5rem;
	width: 40rem;
	max-height: 20rem;
	overflow: auto;
	background: rgb(35, 35, 35);
	box-shadow: rgb(35, 35, 35) 0 0 0 0.5rem, rgb(0, 0, 0) 0 1rem 2rem 1rem;
	backdrop-filter: blur(1rem);
	border-radius: 0.1rem;
	animation: ${PopupAnimation} 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
	animation-fill-mode: forwards;
	transform-origin: center bottom;

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
`;

const PopupContent = styled.div`
	padding: 1rem;
	height: 100%;
	font-size: 1.5rem;
	line-height: 1.5;
	color: rgb(255, 255, 255);
`;

const PopupCloseAnimation = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

const PopupClose = styled.div`
	height: 3rem;
	width: 3rem;
	text-align: center;
	line-height: 2.5rem;
	font-size: 3rem;
	position: absolute;
	z-index: -1;
	right: -1.2rem;
	top: -3.5rem;
	opacity: 0;
	animation: ${PopupCloseAnimation} 500ms ease 300ms;
	animation-fill-mode: forwards;
`;

interface ClueProps {
	children: ReactNode;
	component?: ReactElement;
}

export default function Clue({ children, component }: ClueProps): JSX.Element {
	const [popupVisible, setVisible] = useState(false);

	const show = () => setVisible(true);
	const hide = () => setVisible(false);

	return (
		<Wrapper>
			{component && popupVisible && (
				<PopupWrapper>
					<PopupClose onClick={hide}>
						<span>&times;</span>
					</PopupClose>
					<Popup>
						<PopupContent>{component}</PopupContent>
					</Popup>
				</PopupWrapper>
			)}
			<span onClick={popupVisible ? hide : show}>{children}</span>
		</Wrapper>
	);
}
