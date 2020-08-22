import React from 'react';

import Stage from 'views/components/stage/Stage';
import Scene from 'views/components/stage/Scene';
import Act from 'views/components/stage/Act';

import Main from 'views/scenes/Main';

import A1S1 from 'views/scenes/A1S1';

import A1S2A from 'views/scenes/A1S2A';
import A1S2B from 'views/scenes/A1S2B';

export default function Manuscript(): JSX.Element {
	return (
		<Stage>
			<Scene slug="main" component={<Main />} />

			<Act prefix="Prologue" heading="The Night Before..." />
			<Scene slug="a1s1" component={<A1S1 />} />

			<Scene slug="a1s2a" component={<A1S2A />} />
			<Scene slug="a1s2b" component={<A1S2B />} />
		</Stage>
	);
}
