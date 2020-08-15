import React from 'react';
import styled from 'styled-components';

import * as Interactable from 'views/components/Interactable';

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
			${Interactable.Idle()};
			content: '';
			display: block;
			height: 2.5rem;
			width: 2.5rem;
			cursor: pointer;
			transform: rotate(45deg);
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
			${Interactable.Active({ rotated: true })};
		}

		&::after {
			opacity: 1;
			transform: scale(1);
		}
	}

	&:hover label::before {
		${Interactable.Hover({ rotated: true })};
	}
`;

export default function Checkbox({
	name,
	checked = false,
}: CheckboxProps): JSX.Element {
	return (
		<Wrapper>
			<input type="checkbox" id={name} name={name} defaultChecked={checked} />
			<label htmlFor={name}>Checkbox</label>
		</Wrapper>
	);
}
