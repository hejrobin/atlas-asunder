import React from 'react';
import styled from 'styled-components';

import * as Interactable from 'views/components/form/Interactable';

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
		${Interactable.Idle()};
		width: 100%;
		height: 1rem;
		cursor: pointer;
		border-radius: 2rem;
	}

	&::-webkit-slider-thumb {
		${Interactable.Idle()};
		margin-top: -0.5rem;
		height: 2rem;
		width: 2rem;
		cursor: pointer;
		appearance: none;
		transform: rotate(45deg);
		border-radius: 0.2rem;
		border: none;
	}

	&:hover::-webkit-slider-thumb {
		${Interactable.Hover({ rotated: true })};
	}

	&:active::-webkit-slider-thumb {
		${Interactable.Active({ rotated: true })};
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
