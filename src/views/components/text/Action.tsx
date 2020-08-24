import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';

import QuillText from 'views/components/QuillText';

const Wrapper = styled.span`
	padding: 0.3rem 0.2rem 0.2rem 0.3rem;
	display: inline-block;
	background-color: rgb(44, 163, 135, 0.05);
	color: rgb(44, 163, 135);
	border-radius: 0.3rem;
	transition: all 150ms ease;
	cursor: pointer;

	&:hover {
		background-color: rgb(44, 163, 135, 0.3);
		color: rgb(214, 249, 241);
	}

	&::before {
		content: '[';
	}

	&::after {
		content: ']';
	}
`;

interface ActionProps {
	children: ReactNode;
	onClick?: () => void;
	className?: string;
}

export default function Action({
	children,
	onClick,
	className,
}: ActionProps): JSX.Element {
	const [isDisabled, setDisabled] = useState(false);

	const handleClick = () => {
		if (onClick instanceof Function) {
			if (!isDisabled) {
				onClick();
			}
		}

		setDisabled(true);
	};

	return (
		<Wrapper onClick={handleClick} className={className}>
			<QuillText>{children}</QuillText>
		</Wrapper>
	);
}
