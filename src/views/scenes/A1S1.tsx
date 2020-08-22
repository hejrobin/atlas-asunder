import React from 'react';

import useStageContext from 'utils/useStageContext';

import Wrapper from 'views/components/text/Wrapper';
import Paragraph from 'views/components/text/Paragraph';
import Setting from 'views/components/text/Setting';
import Emotion from 'views/components/text/Emotion';
import Action from 'views/components/text/Action';

export default function A1S1(): JSX.Element {
	const { goTo } = useStageContext();

	return (
		<Wrapper>
			<Setting>%player.possessiveName% room, late night</Setting>
			<Paragraph>
				%player.name% is awake, %partner.name% is fast asleep. The weather
				outside is really, really bad. It hasn't rained like this in years.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
				fermentum sed tellus vitae bibendum. Sed molestie ex eu porta hendrerit.
				Mauris id varius quam. Nunc ut sem sagittis, mollis metus non, vulputate
				enim. Sed pulvinar metus eget ipsum sagittis, sit amet laoreet neque
				ullamcorper. Cras posuere eros nec interdum tempor. Nunc ac leo mauris.
			</Paragraph>
			<Emotion>The rain clatters on the window</Emotion>
			<Paragraph>
				You're not sure whether you should{' '}
				<Action onClick={() => goTo && goTo('a1s2a')}>
					wake %partner.name% up
				</Action>{' '}
				or{' '}
				<Action onClick={() => goTo && goTo('a1s2b')}>go to the kitchen</Action>
				.
			</Paragraph>
		</Wrapper>
	);
}
