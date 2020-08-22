import React, { Fragment, Children, ReactNode } from 'react';

import Quill from 'utils/Quill';

import Agnes from 'data/characters/Agnes';
import Sam from 'data/characters/Sam';

interface QuillTextProps {
	children: ReactNode;
}

export default function QuillText({ children }: QuillTextProps): JSX.Element {
	// @NOTE This should be defined elswhere as the player can chose either Sam or Agnes
	const q = new Quill({
		player: Sam,
		partner: Agnes,
	});

	return (
		<Fragment>
			{Children.map(children, (child) => {
				if (typeof child === 'string') {
					return q.format(child);
				}

				return child;
			})}
		</Fragment>
	);
}
