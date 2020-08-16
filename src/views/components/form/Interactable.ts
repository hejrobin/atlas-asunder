import { css } from 'styled-components';

interface InteractableProps {
	rotated?: boolean;
	backdropUrl?: string;
}

export function Idle({ backdropUrl }: InteractableProps = {}): string {
	return css`
		background-color: rgb(30, 30, 30);
		border-radius: 0.2rem;
		transition: all 150ms ease-in-out;
		display: inline-block;
		box-shadow: inset 0 0 0 0.1rem rgb(100, 100, 100),
			inset 0 0 0 0.4rem rgb(10, 10, 10);

		${backdropUrl
			? css`
					background-image: url(${backdropUrl});
					background-repeat: no-repeat;
					background-size: cover;
			  `
			: ''}
	`;
}

export function Hover({
	rotated,
	backdropUrl,
}: InteractableProps = {}): string {
	if (backdropUrl) {
		return css`
			background: linear-gradient(
				${rotated ? '135deg' : 'to bottom'},
				rgba(255, 255, 255, 0),
				rgba(255, 255, 255, 0.6)
			), url('${backdropUrl}');
			background-repeat: no-repeat;
			background-size: cover;
			box-shadow: inset 0 0 0 0.1rem rgba(255, 255, 255, 0.6),
				inset 0 0 0 0.4rem rgb(10, 10, 10), rgba(255, 255, 255, 0.4) 0 0 1rem;
		`;
	}

	return css`
		background-image: linear-gradient(
			${rotated ? '135deg' : 'to bottom'},
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0.4)
		);
		box-shadow: inset 0 0 0 0.1rem rgba(255, 255, 255, 0.6),
			inset 0 0 0 0.4rem rgb(10, 10, 10), rgba(255, 255, 255, 0.4) 0 0 1rem;
	`;
}

export function Active({
	rotated,
	backdropUrl,
}: InteractableProps = {}): string {
	if (backdropUrl) {
		return css`
			background: linear-gradient(
				${rotated ? '135deg' : 'to bottom'},
				rgba(255, 62, 72, 0),
				rgb(255, 62, 72)
			), url('${backdropUrl}');
			background-repeat: no-repeat;
			background-size: cover;
			box-shadow: inset 0 0 0 0.2rem rgb(255, 62, 72),
				inset 0 0 0 0.4rem rgb(10, 10, 10), rgba(255, 62, 72, 0.6) 0 0 1rem,
				rgba(255, 62, 72, 0.2) 0 0 0.5rem 0.3rem;
		`;
	}

	return css`
		color: rgb(255, 62, 72);
		background-image: linear-gradient(
			${rotated ? '135deg' : 'to bottom'},
			rgba(255, 62, 72, 0),
			rgba(255, 62, 72, 0.6)
		);
		box-shadow: inset 0 0 0 0.2rem rgb(255, 62, 72),
			inset 0 0 0 0.4rem rgb(10, 10, 10), rgba(255, 62, 72, 0.6) 0 0 1rem,
			rgba(255, 62, 72, 0.2) 0 0 0.5rem 0.3rem;
	`;
}
