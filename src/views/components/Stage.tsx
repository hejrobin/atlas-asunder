import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

const Stage: FunctionComponent = ({ children }) => <Wrapper>{children}</Wrapper>;

Stage.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Stage;
