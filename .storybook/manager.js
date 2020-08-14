import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

import atlas from './theme';

addons.setConfig({
	theme: atlas,
});
