import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	background: rgba(100, 100, 100, 0.1);
	padding: 1rem 2rem;
	padding-top: 1.2rem;
	font-family: 'IM Fell English SC', helvetica, sans-serif;
	font-size: 1.2rem;
	text-transform: uppercase;
	letter-spacing: 0.2rem;
	display: inline-block;
	border-radius: 0.2rem;
	color: rgba(255, 255, 255, 0.7);
	transition: color 250ms ease-in-out, box-shadow 250ms ease-in-out;
	box-shadow: rgba(100, 100, 100, 0.25) 0 0 0 0.1rem;

	&:hover {
		color: rgb(255, 255, 255);
		box-shadow: rgba(100, 100, 100, 0.5) 0 0 0 0.1rem,
			rgba(100, 100, 100, 0.2) 0 0 0 0.3rem,
			inset rgba(100, 100, 100, 0.25) 0 0 2rem;
	}
`;

export interface ButtonProps {
	label: string;
	onClick?: () => void;
}

export default function Button({ label, onClick }: ButtonProps): JSX.Element {
	const handleClick = () => {
		if (onClick instanceof Function) {
			onClick();
		}
	};

	return <Wrapper onClick={handleClick}>{label}</Wrapper>;
}
