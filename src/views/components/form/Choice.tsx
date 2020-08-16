import React, { ReactNode } from 'react';
import styled from 'styled-components';

import * as Interactable from 'views/components/form/Interactable';

export interface ChoiceProps {
	active: boolean;
	backdropUrl?: string;
	onClick?: () => void;
	children: ReactNode;
}

interface WrapperProps {
	backdropUrl?: string;
	onClick?: () => void;
	'data-active': boolean;
}

const Wrapper = styled.div<WrapperProps>`
	padding: 2rem 3rem;
	font-size: 1.2rem;
	font-weight: 500;
	text-shadow: rgba(0, 0, 0, 0.8) 0 0.4rem 1rem;
	display: inline-block;
	${(props) => Interactable.Idle(props)};

	&:hover {
		${(props) => Interactable.Hover(props)};
	}

	&[data-active='true'],
	&[data-active='true']:hover {
		${(props) => Interactable.Active(props)};
		color: rgb(255, 255, 255);
	}
`;

export default function Choise({
	children,
	backdropUrl,
	onClick,
	active = false,
}: ChoiceProps): JSX.Element {
	return (
		<Wrapper backdropUrl={backdropUrl} onClick={onClick} data-active={active}>
			{children}
		</Wrapper>
	);
}
