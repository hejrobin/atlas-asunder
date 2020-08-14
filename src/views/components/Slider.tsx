import React from 'react';
import styled from 'styled-components';

export interface SliderProps {
	min?: number;
	max?: number;
	step?: number;
	value?: number;
}

const Component = styled.input<React.HTMLProps<HTMLInputElement>>`
	background: none;
	appearance: none;
	margin: 1rem 0;
	width: 100%;

	&:focus {
		outline: none;
	}

	&::-webkit-slider-runnable-track {
		width: 100%;
		height: 1rem;
		cursor: pointer;
		background: rgb(10, 10, 10);
		border-radius: 2rem;
		box-shadow: inset rgb(50, 50, 50) 0 0 0 0.1rem;
		transition: all 150ms ease-in-out;
	}

	&:hover::-webkit-slider-runnable-track {
		box-shadow: inset rgb(100, 100, 100) 0 0 0 0.1rem,
			rgba(255, 255, 255, 0.15) 0 0 1rem;
	}

	&::-webkit-slider-thumb {
		margin-top: -0.5rem;
		height: 2rem;
		width: 2rem;
		background: rgb(100, 100, 100);
		cursor: pointer;
		appearance: none;
		transform: rotate(45deg);
		border-radius: 0.2rem;
		transition: all 150ms ease-in-out;
		box-shadow: inset 0 0 0 0.1rem rgb(100, 100, 100),
			inset 0 0 0 0.5rem rgb(10, 10, 10);
		border: none;
	}

	&:hover::-webkit-slider-thumb {
		color: rgb(150, 150, 150);
		background: rgb(225, 225, 225);
		box-shadow: inset 0 0 0 0.1rem currentColor,
			inset 0 0 0 0.5rem rgb(10, 10, 10), rgba(255, 255, 255, 0.4) 0 0 1rem;
	}
`;

export default function Slider({
	min = 0,
	max = 100,
	step = 1,
	value = 0,
}: SliderProps): JSX.Element {
	return (
		<Component
			type="range"
			min={min}
			max={max}
			step={step}
			defaultValue={value}
		/>
	);
}
