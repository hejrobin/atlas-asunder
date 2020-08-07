import { createGlobalStyle } from 'styled-components';

import * as utils from 'utils';

const backdrop: string = utils.assetPath('/images/backdrop.png');

const GlobalStyles = createGlobalStyle`
	* {
		user-select: none;
	}

	body {
		background-image: url('${backdrop}');
		background-repeat: no-repeat;
		background-position: 50% 50%;
		background-size: cover;
	}
`;

export default GlobalStyles;
