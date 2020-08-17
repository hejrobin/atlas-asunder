import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
	align-items: center;
	gap: 2rem;
`;

const Divider = styled.div`
	width: 100%;
	height: 0.2rem;
	background: linear-gradient(
		to right,
		rgba(0, 0, 0, 0),
		rgb(100, 100, 100),
		rgba(0, 0, 0, 0)
	);
	position: relative;
	z-index: 10;
`;

const Prefix = styled.div`
	height: 2rem;
	line-height: 1.9rem;
	display: inline-block;
	position: relative;
	z-index: 50;
	transform: translateX(-50%);
	left: 50%;
	top: -0.9rem;

	span {
		padding: 0.2rem 0.5rem;
		border-radius: 10rem;
		background: rgb(0, 0, 0);
		font-size: 0.9rem;
		letter-spacing: 0.2rem;
		text-transform: uppercase;
		font-weight: 600;
		display: inline-block;
		z-index: 50;
	}
`;

const Heading = styled.h1`
	font-family: Abel, helvetica, sans-serif;
	font-size: 6rem;
	text-transform: uppercase;
	text-align: center;
`;

interface TitleProps {
	prefix?: string;
	heading: string;
}

export default function Title({ prefix, heading }: TitleProps): JSX.Element {
	return (
		<Wrapper>
			<Divider>
				{prefix && (
					<Prefix>
						<span>{prefix}</span>
					</Prefix>
				)}
			</Divider>
			<Heading>{heading}</Heading>
			<Divider />
		</Wrapper>
	);
}
