import React from 'react';

import Stage from 'views/components/stage/Stage';
import Scene from 'views/components/stage/Scene';

import MainScene from 'views/scenes/Main';
import PrologueScene from 'views/scenes/Prologue';

export default function Bootstrap(): JSX.Element {
	return (
		<Stage>
			<Scene slug="main">
				<MainScene />
			</Scene>
			<Scene slug="prologue">
				<PrologueScene />
			</Scene>
			<Scene slug="p1">
				<span>:D</span>
			</Scene>
		</Stage>
	);
}
