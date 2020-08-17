import React from 'react';

import Stage from 'views/components/stage/Stage';
import Scene from 'views/components/stage/Scene';
import Act from 'views/components/stage/Act';

import MainScene from 'views/scenes/Main';

export default function Game(): JSX.Element {
	return (
		<Stage>
			<Scene slug="main">
				<MainScene />
			</Scene>
			<Act prefix="Prologue" heading="Tjena Macarena" />
			<Scene slug="a1-s1">
				<span>:D</span>
			</Scene>
		</Stage>
	);
}
