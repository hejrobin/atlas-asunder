import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const TitleAnimation = keyframes`
	from {
		opacity: 0;
		transform: scaleX(0.9);
	}

	to {
		opacity: 1;
		transform: scaleX(1);
	}
`;

const TitleBorderAnimation = keyframes`
	from {
		transform: scaleX(0);
	}

	to {
		transform: scaleX(.9) ;
	}
`;

const Title = styled.h1`
	font-family: Abel, Helvetica, sans-serif;
	font-size: 12rem;
	text-transform: uppercase;
	animation-fill-mode: forwards;
	animation: ${TitleAnimation} 6s ease-in-out;
	position: relative;

	:before,
	:after {
		margin-top: 2rem;
		display: block;
		height: 0rem;
		content: '';
		opacity: 0.3;
		transform: scaleX(0.9);
		border-top: currentColor 0.1rem solid;
		border-bottom: currentColor 0.1rem solid;
		animation-fill-mode: forwards;
		animation: ${TitleBorderAnimation} 8s ease-in-out;
	}

	:before {
		margin-top: 0;
		margin-bottom: 2rem;
		animation-duration: 7s;
	}
`;

interface MainTitleProps {
	title: string;
}

const MainTitle: FunctionComponent<MainTitleProps> = ({ title }) => <Title>{title}</Title>;

MainTitle.propTypes = {
	title: PropTypes.string.isRequired,
};

export default MainTitle;
