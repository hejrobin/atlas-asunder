import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import 'typeface-abel';
import 'typeface-inter';

import GlobalStyles from './GlobalStyles';
import Game from './Game';

import { StateProvider } from 'data/state';

document.addEventListener(
	'DOMContentLoaded',
	() => {
		const mountNode = document.querySelector('#root');

		render(
			<StrictMode>
				<GlobalStyles />
				<StateProvider>
					<Game />
				</StateProvider>
			</StrictMode>,
			mountNode
		);
	},
	false
);
