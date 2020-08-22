import { createGlobalStyle } from 'styled-components';

import * as utils from 'utils';

const backdrop: string = utils.assetPath('/images/backdrop.png');

const GlobalStyles = createGlobalStyle`
	* {
		user-select: none;
	}

	html, body {
		height: 100%;
	}

	html {
		background-image: url('${backdrop}');
		background-size: cover;
		background-position: 50% 50%;
	}

	body {
		font-family: 'Inter', helvetica, arial, sans-serif;
	}
`;

export default GlobalStyles;
