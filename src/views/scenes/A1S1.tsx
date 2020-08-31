import React from 'react';

import useStageContext from 'utils/useStageContext';

import Sam from 'data/characters/Sam';

import QuillText from 'views/components/QuillText';

import Wrapper from 'views/components/text/Wrapper';
import Paragraph from 'views/components/text/Paragraph';
import Setting from 'views/components/text/Setting';
import Emotion from 'views/components/text/Emotion';
import Action from 'views/components/text/Action';
import Clue from 'views/components/text/Clue';

export default function A1S1(): JSX.Element {
	const { goTo } = useStageContext();

	// @NOTE For development purposes, just assume "Sam" is the player

	const clue =
		Sam.perception === 1 ? (
			<QuillText>
				%partner.name% usually hides %partner.pronoun.objective% candy in the
				bookshelf, behind %partner.pronoun.objective% favourite book.
			</QuillText>
		) : (
			<QuillText>
				%partner.name% must have hidden %partner.pronoun.objective% candy
				somewhere in the room... %player.name% is awake, %partner.name% is fast
				asleep. The weather outside is really, really bad. It hasn't rained like
				this in years. Lorem, consectetur adipiscing elit. Nullam fermentum sed
				tellus vitae bibendum. Sed molestie ex eu porta hendrerit. Mauris id
				varius quam. Nunc ut sem sagittis, mollis metus non, vulputate enim. Sed
				pulvinar metus eget ipsum sagittis, sit amet laoreet neque ullamcorper.
				Cras posuere eros nec interdum tempor. Nunc ac leo mauris.
			</QuillText>
		);

	return (
		<Wrapper>
			<Setting>%player.possessiveName% room, late night</Setting>
			<Paragraph>
				%player.name% is awake, %partner.name% is fast asleep. The weather
				outside is really, really bad. It hasn't rained like this in years.
				Lorem <Clue component={clue}>ipsum dolor sit amet</Clue>, consectetur
				adipiscing elit. Nullam fermentum sed tellus vitae bibendum. Sed
				molestie ex eu porta hendrerit. Mauris id varius quam. Nunc ut sem
				sagittis, mollis metus non, vulputate enim. Sed pulvinar metus eget
				ipsum sagittis, sit amet laoreet neque ullamcorper. Cras posuere eros
				nec interdum tempor. Nunc ac leo mauris.
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
