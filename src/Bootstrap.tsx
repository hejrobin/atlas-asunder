import React from 'react';

import Stage from 'views/components/stage/Stage';
import Scene from 'views/components/stage/Scene';

import MainScene from 'views/scenes/Main';

export default function Bootstrap(): JSX.Element {
	return (
		<Stage>
			<Scene slug="main">
				<MainScene />
			</Scene>
		</Stage>
	);
}
