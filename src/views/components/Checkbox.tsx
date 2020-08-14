import React from 'react';
import useSound from 'use-sound';
import styled from 'styled-components';

import sfxClick from 'audio/sfx/click.mp3';

export interface CheckboxProps {
	name: string;
	checked: boolean;
}

const Wrapper = styled.div`
	font-family: Inter, helvetica, sans-serif;
	font-size: 1.4rem;

	input {
		visibility: hidden;
	}

	label {
		display: block;
		position: relative;
		text-indent: 4rem;
		height: 2.5rem;
		line-height: 2.5rem;
		display: inline-block;

		&::before {
			content: '';
			display: block;
			height: 2.5rem;
			width: 2.5rem;
			background: rgb(30, 30, 30);
			cursor: pointer;
			transform: rotate(45deg);
			border-radius: 0.2rem;
			transition: all 150ms ease-in-out;
			box-shadow: inset 0 0 0 0.1rem rgb(100, 100, 100),
				inset 0 0 0 0.4rem rgb(10, 10, 10);
			border: none;
			position: absolute;
			left: 0;
			top: 0;
		}

		&::after {
			text-indent: 0rem;
			content: '✓';
			height: 2.5rem;
			width: 2.5rem;
			font-size: 1.6rem;
			text-align: center;
			line-height: 2.5rem;
			color: rgb(255, 255, 255);
			position: absolute;
			opacity: 0;
			transform: scale(0);
			left: 0;
			top: 0;
			transition: all 150ms ease-in-out;
		}
	}

	input:checked + label {
		&::before {
			background: rgb(45, 45, 45);
		}

		&::after {
			opacity: 1;
			transform: scale(1);
		}
	}

	&:hover label::before {
		color: rgb(150, 150, 150);
		box-shadow: inset 0 0 0 0.1rem currentColor,
			inset 0 0 0 0.4rem rgb(10, 10, 10), rgba(255, 255, 255, 0.4) 0 0 1rem;
	}
`;

export default function Checkbox({
	name,
	checked = false,
}: CheckboxProps): JSX.Element {
	const [play] = useSound(sfxClick, {
		sprite: {
			on: [800, 1000],
		},
	});

	const playSfxOn = () => play({ id: 'on' });

	return (
		<Wrapper onClick={playSfxOn}>
			<input type="checkbox" id={name} name={name} defaultChecked={checked} />
			<label htmlFor={name}>Checkbox</label>
		</Wrapper>
	);
}
