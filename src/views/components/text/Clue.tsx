import styled from 'styled-components';

const Clue = styled.span`
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

export default Clue;
