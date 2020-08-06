import React, { ReactNode } from 'react';

import Stage from 'views/components/Stage';
import MainTitle from 'views/components/MainTitle';

export default function Bootstrap(): ReactNode {
	return (
		<Stage>
			<MainTitle title="Atlas Asunder" />
		</Stage>
	);
}
