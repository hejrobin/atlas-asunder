import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	overflow: auto;

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

const Container = styled.div`
	padding: 2rem;
	display: grid;
	grid-auto-flow: row;
	align-items: center;
	width: 80vw;
	max-width: 72rem;
	max-height: 90vh;
	gap: 2rem;
`;

interface TextProps {
	children: ReactNode;
}

export default function Text({ children }: TextProps): JSX.Element {
	return (
		<Wrapper>
			<Container>{children}</Container>
		</Wrapper>
	);
}
