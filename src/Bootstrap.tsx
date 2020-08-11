import React, { StatelessComponent } from 'react';

import Stage from 'views/components/Stage';
import Spinner from 'views/components/Spinner';

const Bootstrap: StatelessComponent = () => (
	<Stage guid="root">
		<span>Atlas Asunder</span>
		<Spinner />
	</Stage>
);

export default Bootstrap;
