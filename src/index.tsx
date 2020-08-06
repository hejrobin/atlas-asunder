import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import 'typeface-abel';
import 'typeface-im-fell-english';

import Bootstrap from './Bootstrap';

document.addEventListener(
	'DOMContentLoaded',
	() => {
		const mountNode: any = document.querySelector('#root');

		render(
			<StrictMode>
				<Bootstrap />
			</StrictMode>,
			mountNode
		);
	},
	false
);
