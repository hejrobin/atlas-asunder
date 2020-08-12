import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

interface StageProps {
	guid: string;
	children: ReactNode;
}

interface WrapperProps {
	guid: string;
}

const Wrapper = styled.div<WrapperProps>`
	width: 100vw;
	height: 100vh;
	display: grid;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

export default function Stage({ guid, children }: StageProps): ReactNode {
	return <Wrapper guid={guid}>{children}</Wrapper>;
}

Stage.propTypes = {
	guid: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};
