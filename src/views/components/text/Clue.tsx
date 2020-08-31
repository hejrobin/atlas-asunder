import React, { ReactNode, ReactElement } from 'react';
import styled from 'styled-components';

import Action from 'views/components/text/Action';

type NoOpType = () => void;

const Wrapper = styled(Action)`
	background-color: rgb(239, 224, 148, 0.05);
	color: rgb(239, 224, 148);
	position: relative;

	&:hover {
		background-color: rgb(239, 224, 148, 0.05);
		color: rgb(239, 224, 148);

		& > div {
			pointer-events: auto;
		}

		& > div > div {
			transform: scale(1);
			opacity: 1;
		}
	}
`;

const PopupWrapper = styled.div`
	position: absolute;
	bottom: 100%;
	left: 50%;
	transform: translateX(-50%);
	pointer-events: none;
`;

const Popup = styled.div`
	padding: 0.5rem;
	width: 40rem;
	max-height: 20rem;
	overflow: auto;
	background: rgb(25, 25, 25);
	box-shadow: rgb(25, 25, 25) 0 0 0 0.5rem, rgb(0, 0, 0) 0 1rem 2rem 1rem;
	backdrop-filter: blur(1rem);
	border-radius: 0.1rem;
	opacity: 0;
	transform: scale(0.5);
	transform-origin: center bottom;
	transition: transform 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
		opacity 150ms ease;

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

interface ClueProps {
	children: ReactNode;
	component?: ReactElement;
}

export default function Clue({ children, component }: ClueProps): JSX.Element {
	return (
		<Wrapper>
			{component && (
				<PopupWrapper>
					<Popup>
						<PopupContent>{component}</PopupContent>
					</Popup>
				</PopupWrapper>
			)}
			<span>{children}</span>
		</Wrapper>
	);
}
