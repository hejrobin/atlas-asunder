import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import { StageContext } from 'views/components/stage/Stage';

import Title from 'views/components/Title';

const ActAnimation = keyframes`
	0%, 100% {
		opacity: 0;
	}

	25%, 75% {
		opacity: 1;
	}
`;

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;
	opacity: 0;
	animation: ${ActAnimation} 4s ease;
	animation-delay: 500ms;
`;

interface ChapterProps {
	prefix?: string;
	heading: string;
}

export default function Chapter({
	prefix,
	heading,
}: ChapterProps): JSX.Element {
	const { next } = useContext(StageContext);

	return (
		<Wrapper onAnimationEnd={next}>
			<Title prefix={prefix} heading={heading} />
		</Wrapper>
	);
}
