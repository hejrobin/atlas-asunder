import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import 'typeface-abel';
import 'typeface-inter';

import GlobalStyles from './GlobalStyles';
import Bootstrap from './Bootstrap';

document.addEventListener(
	'DOMContentLoaded',
	() => {
		const mountNode = document.querySelector('#root');

		render(
			<StrictMode>
				<GlobalStyles />
				<Bootstrap />
			</StrictMode>,
			mountNode
		);
	},
	false
);
