import React, { FunctionComponent, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

interface StageProps {
	guid: string;
	children: ReactNode;
}

const Wrapper = styled.div<StageProps>`
	width: 100vw;
	height: 100vh;
	display: grid;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

const Stage: FunctionComponent<StageProps> = ({ guid, children }) => (
	<Wrapper guid={guid}>{children}</Wrapper>
);

Stage.propTypes = {
	guid: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default Stage;
