import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import 'typeface-abel';
import 'typeface-inter';

import GlobalStyles from 'config/GlobalStyles';
import KeyBindings from 'config/KeyBindings';

import AppStateProvider from 'data/State';
import DecisionProvider from 'data/Decisions';

import Manuscript from 'views/compositions/Manuscript';

document.addEventListener(
	'DOMContentLoaded',
	() => {
		const mountNode = document.querySelector('#root');

		render(
			<StrictMode>
				<GlobalStyles />
				<KeyBindings />
				<AppStateProvider>
					<DecisionProvider>
						<Manuscript />
					</DecisionProvider>
				</AppStateProvider>
			</StrictMode>,
			mountNode
		);
	},
	false
);
