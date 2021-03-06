import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
	align-items: center;
	gap: 2rem;
`;

interface TextProps {
	children: ReactNode;
}

export default function Text({ children }: TextProps): JSX.Element {
	return <Wrapper>{children}</Wrapper>;
}
