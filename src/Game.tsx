import React from 'react';

import Stage from 'views/components/stage/Stage';
import Scene from 'views/components/stage/Scene';
import Act from 'views/components/stage/Act';

import Main from 'views/scenes/Main';
import A1S1 from 'views/scenes/A1S1';

export default function Game(): JSX.Element {
	return (
		<Stage>
			<Scene slug="main" component={<Main />} />

			<Act prefix="Prologue" heading="The Night Before..." />
			<Scene slug="a1-s1" component={<A1S1 />} />
		</Stage>
	);
}
