import React from 'react';
import styled from 'styled-components';

import Title from 'views/components/Title';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;
`;

export default function Prologue(): JSX.Element {
	return (
		<Wrapper>
			<Title prefix="Prologue" heading="Torn asunder" />
		</Wrapper>
	);
}
